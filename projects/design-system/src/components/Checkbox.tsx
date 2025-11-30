import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string;
    description?: string;
    id?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, description, id, className = '', ...props }, ref) => {
        const inputId = id || React.useId();
        const descId = description ? `${inputId}-desc` : undefined;
        return (
            <div className={className}>
                <div className="flex items-start gap-2">
                    <input
                        id={inputId}
                        ref={ref}
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                        aria-describedby={descId}
                        {...props}
                    />
                    <div>
                        <label htmlFor={inputId} className="text-sm font-medium text-gray-800">
                            {label}
                        </label>
                        {description && (
                            <p id={descId} className="text-xs text-gray-500">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
