import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    description?: string;
    error?: string;
    id?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, description, error, id, className = '', ...props }, ref) => {
        const inputId = id || React.useId();
        const descId = description ? `${inputId}-desc` : undefined;
        const errId = error ? `${inputId}-err` : undefined;
        const describedBy = [descId, errId].filter(Boolean).join(' ') || undefined;

        return (
            <div className={className}>
                <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                {description && (
                    <p id={descId} className="mt-1 text-xs text-gray-500">
                        {description}
                    </p>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    aria-describedby={describedBy}
                    aria-invalid={error ? 'true' : undefined}
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    {...props}
                />
                {error && (
                    <p id={errId} className="mt-1 text-xs text-red-600">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
