import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { t, lcp, fid, cls } = req.body || {};
      if (!t || lcp == null || fid == null || cls == null) {
        return res.status(400).json({ error: 'Missing fields: t, lcp, fid, cls' });
      }
      const created = await prisma.metric.create({
        data: { t: new Date(t), lcp: Number(lcp), fid: Number(fid), cls: Number(cls) },
      });
      return res.status(201).json({ ok: true, id: created.id });
    } catch (e: any) {
      return res.status(500).json({ error: e.message || 'Server error' });
    }
  }

  if (req.method === 'GET') {
    const rows = await prisma.metric.findMany({ orderBy: { t: 'asc' }, take: 200 });
    return res.status(200).json(rows);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
