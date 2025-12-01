import React from 'react';
import clsx from 'clsx';

const base = 'inline-flex items-center gap-2 rounded-xl font-medium text-sm transition focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-bg';
const variants = {
  primary: 'px-5 py-3 bg-gradient-to-r from-brand-purple via-brand-glow to-brand-pink shadow-soft hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0',
  subtle: 'px-5 py-3 bg-black/5 border border-black/10 hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10',
  ghost: 'px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10',
};

function Button({ variant='primary', className, children, as:Comp='button', ...rest }) {
  return <Comp className={clsx(base, variants[variant], className)} {...rest}>{children}</Comp>;
}

export default Button;