import React from 'react';

import { Container } from './style';
import { ToastMassage, useToast } from '../../hooks/Toast';
import Toast from './Toast';

interface ToasContainerProps{
  messages: ToastMassage[];
}

const ToastContainer: React.FC<ToasContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};


export default ToastContainer;
