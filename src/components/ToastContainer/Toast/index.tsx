import React, { useEffect } from 'react';
import {
  FiAlertCircle, FiXCircle, FiCheckCircle, FiInfo,
} from 'react-icons/fi';
import { ToastMassage, useToast } from '../../../hooks/Toast';

import { Container } from './style';

interface ToasProps{
  message: ToastMassage;
}

const icons = {
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
  info: <FiInfo size={24} />,
};

const Toast: React.FC<ToasProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={() => { removeToast(message.id); }}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};


export default Toast;
