import React, { useEffect, useState } from 'react';
import { Card, Flex, Styled } from 'theme-ui';
import { Link } from 'react-router-dom';

import apiClient from '../utils/api-client';

function Home() {
  const [userLists, setUserLists] = useState([]);
  useEffect(() => {
    const fetchUserLists = async () => {
      const response = await apiClient.lists.getAll();
      setUserLists(response.data);
    };
    fetchUserLists();
  }, []);
  return (
    <Flex
      as="main"
      sx={{
        minHeight: '80vh',
        width: '100vw',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        px: '50px',
      }}
    >
      <Styled.h2>Lists</Styled.h2>
      <Flex
        as="ul"
        sx={{
          width: '100%',
          px: 0,
          flexWrap: 'wrap',
        }}
      >
        {userLists.map((list) => (
          <Link
            key={list.id}
            to={`/lists/${list.id}`}
            style={{ textDecoration: 'none', flexBasis: '33%' }}
          >
            <Card
              as="li"
              sx={{
                listStyle: 'none',
                m: '3%',
                color: 'text',
                textDecoration: 'none',
                overflow: 'scroll',
              }}
            >
              <pre>{JSON.stringify(list, null, 2)}</pre>
            </Card>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default Home;
