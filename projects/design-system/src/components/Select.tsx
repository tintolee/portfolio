import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    id?: string;
    hint?: string;
}

export function Select({ label, id, hint, children, className = '', ...props }: SelectProps) {
    const selectId = id || React.useId();
    const hintId = hint ? `${selectId}-hint` : undefined;
    return (
        <div className={className}>
            <label htmlFor={selectId} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            {hint && (
                <p id={hintId} className="mt-1 text-xs text-gray-500">{hint}</p>
            )}
            <select
                id={selectId}
                aria-describedby={hintId}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...props}
            >
                {children}
            </select>
        </div>
    );
}

export default Select;
