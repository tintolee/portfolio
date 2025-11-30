import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
}

const variantClasses: Record<Variant, string> = {
    primary:
        'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-600',
    secondary:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400',
    ghost:
        'bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-300',
};

const sizeClasses: Record<Size, string> = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
};

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
    const base = 'inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition';
    return (
        <button className={[base, variantClasses[variant], sizeClasses[size], className].join(' ')} {...props} />
    );
}

export default Button;
