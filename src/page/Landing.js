import React, {Component} from 'react';
import {Container, Header, Content, Text} from 'native-base';

import FooterComponent from '../components/Footer';

export const Landing = (props) => {
  return (
    <Container>
      <Header>
        <Text>Landing Page</Text>
      </Header>
      <Content>
        <Text>This is landing page</Text>
      </Content>
      <FooterComponent />
    </Container>
  );
};
