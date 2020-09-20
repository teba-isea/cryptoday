import React from 'react';
import styled from "@emotion/styled";

const ErrorContainer = styled.div`
  color:red;
  text-align:center;
`;

const Error = ({message}) => (
  <ErrorContainer>
    <p>{message}</p>
  </ErrorContainer>
);

export default Error;