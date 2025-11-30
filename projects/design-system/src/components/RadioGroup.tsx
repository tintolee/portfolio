import React, { useEffect, useMemo, useRef, useState } from 'react';

export interface RadioOption<T extends string | number> {
    value: T;
    label: string;
}

export interface RadioGroupProps<T extends string | number> {
    name: string;
    options: RadioOption<T>[];
    value: T;
    onChange: (v: T) => void;
    ariaLabel?: string;
    className?: string;
}

export function RadioGroup<T extends string | number>({ name, options, value, onChange, ariaLabel, className = '' }: RadioGroupProps<T>) {
    const [focusIndex, setFocusIndex] = useState<number>(() => Math.max(0, options.findIndex(o => o.value === value)));
    const refs = useRef<Array<HTMLButtonElement | null>>([]);

    useEffect(() => {
        const idx = options.findIndex(o => o.value === value);
        if (idx >= 0) setFocusIndex(idx);
    }, [value, options]);

    function onKeyDown(e: React.KeyboardEvent) {
        let next = focusIndex;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            next = (focusIndex + 1) % options.length;
            setFocusIndex(next);
            refs.current[next]?.focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            next = (focusIndex - 1 + options.length) % options.length;
            setFocusIndex(next);
            refs.current[next]?.focus();
        } else if (e.key === 'Home') {
            e.preventDefault();
            setFocusIndex(0);
            refs.current[0]?.focus();
        } else if (e.key === 'End') {
            e.preventDefault();
            setFocusIndex(options.length - 1);
            refs.current[options.length - 1]?.focus();
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            const opt = options[focusIndex];
            if (opt) onChange(opt.value);
        }
    }

    return (
        <div role="radiogroup" aria-label={ariaLabel} className={className} onKeyDown={onKeyDown}>
            <div className="inline-flex gap-2">
                {options.map((opt, i) => {
                    const checked = value === opt.value;
                    return (
                        <button
                            key={String(opt.value)}
                            ref={(el) => (refs.current[i] = el)}
                            role="radio"
                            aria-checked={checked}
                            tabIndex={i === focusIndex ? 0 : -1}
                            name={name}
                            className={[
                                'px-3 py-1.5 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500',
                                checked ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-300 bg-white text-gray-700',
                            ].join(' ')}
                            onClick={() => onChange(opt.value)}
                        >
                            {opt.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default RadioGroup;
