import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container>
    <button type="button" {...rest}>{children}</button>
  </Container>

);

export default Button;
