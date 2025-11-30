const { readFileSync } = require('fs');
const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  try {
    const raw = readFileSync(require('path').join(__dirname, '..', 'src', 'data', 'metrics.json'), 'utf8');
    const data = JSON.parse(raw);
    await prisma.metric.deleteMany();
    for (const row of data) {
      await prisma.metric.create({ data: { t: new Date(row.t), lcp: row.lcp, fid: row.fid, cls: row.cls } });
    }
    console.log('Seeded metrics:', data.length);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
