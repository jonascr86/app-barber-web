import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

interface TooltipProps {
  title: string,
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ children, title, className }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
