import React from 'react';


const ContactDialog = ({ title, children, onClose }) => {
  return (
    <div className="mac-dialog">
      <div className="mac-dialog-header">
        <div className="mac-dialog-buttons">
          <span className="mac-dialog-button close" onClick={onClose}></span>
          <span className="mac-dialog-button minimize"></span>
          <span className="mac-dialog-button maximize"></span>
        </div>
        <div className="mac-dialog-title">{title}</div>
      </div>
      <div className="mac-dialog-body">
        {children}
      </div>
    </div>
  );
};

export default ContactDialog;
