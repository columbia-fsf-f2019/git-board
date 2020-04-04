import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Flex, NavLink } from 'theme-ui';

import { useAuth } from '../contexts/auth.context';

function AuthenticatedNavbar() {
  const { user, logout } = useAuth();
  console.log(user);
  const firstInitial = user.email[0].toUpperCase();
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
      <Flex sx={{ alignItems: 'center' }}>
        <NavLink
          sx={{
            color: 'primary',
            mr: '15px',
            ':hover': { textDecoration: 'underline' },
          }}
          onClick={logout}
        >
          Logout
        </NavLink>
        <Link to="/">
          <Avatar
            src={`https://contrast.now.sh/fff/30c?text=${firstInitial}&size=96&fontSize=1.5&baseline=1`}
          />
        </Link>
      </Flex>
    </Flex>
  );
}

export default AuthenticatedNavbar;
