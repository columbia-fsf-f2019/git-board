import React from 'react';
import { Box, Flex, Styled } from 'theme-ui';

function Footer() {
  return (
    <Flex
      as="footer"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <Box>
        <Styled.h2>Footer</Styled.h2>
      </Box>
    </Flex>
  );
}

export default Footer;
