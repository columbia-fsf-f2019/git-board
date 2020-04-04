import React from 'react';
import { Flex, Styled } from 'theme-ui';
import { useParams } from 'react-router-dom';

function List() {
  const { id } = useParams();

  return (
    <Flex
      as="main"
      sx={{
        minHeight: '80vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        px: '50px',
      }}
    >
      <Styled.h2>List {id}</Styled.h2>
    </Flex>
  );
}

export default List;
