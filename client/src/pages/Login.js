import React from 'react';
import { Box, Button, Card, Flex, Input, Label, Styled } from 'theme-ui';
import { useFormik } from 'formik';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(
        `[DEBUG] login(onSubmit) form values :: ${JSON.stringify(values)}`
      );
    }
  });

  return (
    <Flex
      as="main"
      sx={{
        height: '80vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Card px="75px" py="100px">
        <Flex
          sx={{
            flexDirection: 'column'
          }}
        >
          <Styled.h1>Login</Styled.h1>
          <Box as="form" onSubmit={formik.handleSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              mb="15px"
            />
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              mb="30px"
            />
            <Button type="submit" sx={{ width: '100%' }}>
              Login
            </Button>
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Login;
