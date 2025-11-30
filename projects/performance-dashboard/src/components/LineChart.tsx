import React from 'react';

type Datum = { t: string; value: number };

export function LineChart({ data, width = 640, height = 300, color = '#4f46e5' }: { data: Datum[]; width?: number; height?: number; color?: string }) {
    const padding = { top: 16, right: 16, bottom: 28, left: 40 };
    const w = width - padding.left - padding.right;
    const h = height - padding.top - padding.bottom;

    const xs = data.map((d) => new Date(d.t).getTime());
    const ys = data.map((d) => d.value);
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    const yMin = Math.min(...ys);
    const yMax = Math.max(...ys);

    const x = (t: number) => padding.left + ((t - xMin) / (xMax - xMin || 1)) * w;
    const y = (v: number) => padding.top + h - ((v - yMin) / (yMax - yMin || 1)) * h;

    const path = data
        .map((d, i) => `${i === 0 ? 'M' : 'L'} ${x(new Date(d.t).getTime()).toFixed(2)} ${y(d.value).toFixed(2)}`)
        .join(' ');

    const xTicks = 4;
    const yTicks = 4;
    const xTickVals = Array.from({ length: xTicks + 1 }, (_, i) => xMin + ((xMax - xMin) * i) / xTicks);
    const yTickVals = Array.from({ length: yTicks + 1 }, (_, i) => yMin + ((yMax - yMin) * i) / yTicks);

    return (
        <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <g>
                {/* Axes */}
                <line x1={padding.left} y1={padding.top} x2={padding.left} y2={padding.top + h} stroke="#e5e7eb" />
                <line x1={padding.left} y1={padding.top + h} x2={padding.left + w} y2={padding.top + h} stroke="#e5e7eb" />

                {/* Grid + ticks */}
                {yTickVals.map((v, i) => (
                    <g key={i}>
                        <line x1={padding.left} y1={y(v)} x2={padding.left + w} y2={y(v)} stroke="#f3f4f6" />
                        <text x={padding.left - 8} y={y(v)} textAnchor="end" dominantBaseline="middle" fontSize={11} fill="#6b7280">
                            {v.toFixed(0)}
                        </text>
                    </g>
                ))}
                {xTickVals.map((t, i) => (
                    <g key={i}>
                        <line x1={x(t)} y1={padding.top} x2={x(t)} y2={padding.top + h} stroke="#f3f4f6" />
                        <text x={x(t)} y={padding.top + h + 18} textAnchor="middle" fontSize={11} fill="#6b7280">
                            {new Date(t).toLocaleDateString(undefined, { month: 'short', day: '2-digit' })}
                        </text>
                    </g>
                ))}

                {/* Line */}
                <path d={path} fill="none" stroke={color} strokeWidth={2.5} />
            </g>
        </svg>
    );
}

export default LineChart;
