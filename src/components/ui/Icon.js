import React from 'react';
import clsx from 'clsx';

function Icon({ children, className, size='md' }) {
  const sizes = { sm: 'h-4 w-4', md: 'h-5 w-5', lg: 'h-6 w-6' };
  return (
    <span className={clsx('inline-flex items-center justify-center', sizes[size], className)}>
      {children}
    </span>
  );
}

export default Icon;