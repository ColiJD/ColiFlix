import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../assets/base';
const Page404Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const ErrorMessage = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Page404 = () => {
  return (
    <Page404Container>
      <ErrorMessage>404 - Página no encontrada</ErrorMessage>
      <Link to="/">
        <Button>Regresar</Button>
      </Link>
    </Page404Container>

  );
};

export default Page404;