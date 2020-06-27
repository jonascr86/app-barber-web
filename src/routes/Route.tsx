import React from 'react';
import { RouteProps as ReactDOMRoutProps, Route as ReactDOMRout, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/Auth';

interface RouterProps extends ReactDOMRoutProps{
  isPrivete?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouterProps> = ({ isPrivete = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRout
      {...rest}
      render={({ location }) => (isPrivete === !!user ? (
        <Component />
      ) : (<Redirect to={{ pathname: isPrivete ? '/' : '/dashboard', state: { from: location } }} />))}
    />
  );
};

export default Route;
