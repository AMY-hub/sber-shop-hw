import React from 'react';
import { useRouteError } from 'react-router-dom';
import { ErrorComponent } from '../../components';

export const ErrorPage:React.FC = () => {

  const error = useRouteError();
  let message = "Что-то пошло не так. Мы уже работаем над этим.";
  let type = 500;

  if(error instanceof Error && error.message) {
    if (error.message.toLowerCase().includes('not found')) {
      type = 404;
    } else {
      message = error.message;
    }
  }

  return (
    <ErrorComponent code={type} message={message}/>
  );
};
