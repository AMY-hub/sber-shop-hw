import React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage:React.FC = () => {

  const error = useRouteError();
  let message = "Что-то пошло не так. Мы уже работаем над этим.";

  if(error instanceof Error && error.message) {
      message = error.message;
  }

  return (
    <div>{message}</div>
  );
};
