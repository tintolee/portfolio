import React from 'react';

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

export function Toggle({ checked, onChange, label, className = '', ...props }: ToggleProps) {
    return (
        <button
            role="switch"
            aria-checked={checked}
            className={[
                'inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500',
                checked ? 'bg-indigo-600' : 'bg-gray-300',
                className,
            ].join(' ')}
            style={{ width: 44, height: 26, padding: 2 }}
            onClick={() => onChange(!checked)}
            {...props}
        >
            <span
                aria-hidden
                className={[
                    'block rounded-full bg-white transition-transform',
                ].join(' ')}
                style={{ width: 22, height: 22, transform: checked ? 'translateX(18px)' : 'translateX(0)' }}
            />
            {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
        </button>
    );
}

export default Toggle;
