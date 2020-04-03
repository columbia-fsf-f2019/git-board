import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Button, Flex, NavLink } from 'theme-ui';

function Navbar() {
  return (
    <Flex
      as="nav"
      sx={{
        alignItems: 'center',
        height: '80px',
        justifyContent: 'space-between',
        width: '100%'
      }}
      px="15px"
    >
      <Box
        sx={{
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <Link to="/">
          <Avatar src="https://contrast.now.sh/fff/3333ee?text=GB&size=96&fontSize=1.5&baseline=1" />
        </Link>
      </Box>
      <Box>
        <Link to="login">
          <NavLink mr="15px">Login</NavLink>
        </Link>
        <Link to="signup">
          <Button bg="secondary">Sign up</Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
