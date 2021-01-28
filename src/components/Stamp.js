import React from 'react';

export default function Stamp({children, ...props}) {
  if(children) {
    return (
      <div className="stamp">
        {children}
      </div>
    );
  }
  return (
    <div className="stamp">
      <img src={props.src} alt="stamp" />
    </div>
  );
}
