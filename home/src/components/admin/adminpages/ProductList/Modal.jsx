import React from "react";


export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  
  
  return (
    <div>
      <button onClick={()=>onClose(false)}>Close Modal</button>
      {children}
    </div>
  );
}
