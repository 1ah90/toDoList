import { useState, useEffect } from 'react';

const Toast = ({ massage, onClose ,color }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-start z-50`}>
      <div className={`alert alert-info bg-${color}`}>
        <span>{massage}</span>
      </div>
    </div>
  );
};
export default Toast;
