import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, NavLink } from 'theme-ui';

function Navbar() {
  return (
    <Flex
      as="nav"
      sx={{
        alignItems: 'center',
        height: '80px',
        justifyContent: 'space-between',
        width: '100%',
      }}
      px="15px"
    >
      <Flex
        sx={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="/">
            <NavLink
              as="span"
              sx={{
                variant: 'styles.navlink',
                px: 3,
                py: 1,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: '4px solid',
                color: 'primary',
              }}
            >
              Git Board
            </NavLink>
          </Link>
        </Flex>
      </Flex>
      <Box>
        <Link to="login">
          <NavLink
            as="span"
            sx={{
              color: 'primary',
              mr: '15px',
              ':hover': { textDecoration: 'underline' },
            }}
          >
            Login
          </NavLink>
        </Link>
        <Link to="signup">
          <Button>Sign up</Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
