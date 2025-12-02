import React from 'react';
import clsx from 'clsx';

const base = 'inline-flex items-center gap-2 rounded-xl font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-bg';
const variants = {
  primary: 'px-5 py-3 bg-gradient-to-r from-brand-purple via-brand-glow to-brand-pink shadow-soft hover:shadow-glow hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 text-white font-semibold',
  subtle: 'px-5 py-3 bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20 hover:-translate-y-0.5 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20',
  ghost: 'px-4 py-2 hover:bg-black/5 hover:-translate-y-0.5 dark:hover:bg-white/10',
};

function Button({ variant='primary', className, children, as:Comp='button', ...rest }) {
  return <Comp className={clsx(base, variants[variant], className)} {...rest}>{children}</Comp>;
}

export default Button;