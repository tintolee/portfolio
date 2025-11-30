import React from 'react';
import clsx from 'clsx';

function Card({ className, children, as:Comp='div', interactive=false, ...rest }) {
  return (
    <Comp
      className={clsx(
        'glass-card p-5 transition',
        interactive && 'hover:shadow-glow hover:-translate-y-1',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export default Card;