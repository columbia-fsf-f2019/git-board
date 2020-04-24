import React from 'react';
import { Flex, Styled } from 'theme-ui';

function Home() {
  return (
    <Flex
      as="main"
      sx={{
        minHeight: '80vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Styled.h2>Home</Styled.h2>
    </Flex>
  );
}

export default Home;
