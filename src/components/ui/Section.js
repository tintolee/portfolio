import React from 'react';
import clsx from 'clsx';

function Section({ id, className, children, container=true, pad=true }) {
  return (
    <section id={id} className={clsx(pad && 'pt-10 md:pt-16', className)}>
      {container ? <div className="container-responsive">{children}</div> : children}
    </section>
  );
}

export default Section;