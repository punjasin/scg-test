import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default () => {
  const {currentScene} = Actions;
  return (
    <Footer>
      <FooterTab>
        <Button
          active={currentScene === 'home'}
          onPress={() => {
            Actions.reset('home');
          }}>
          <Icon name="home" />
        </Button>
        <Button
          active={currentScene === 'test'}
          onPress={() => {
            Actions.reset('test');
          }}>
          <Icon name="ios-folder" />
        </Button>
      </FooterTab>
    </Footer>
  );
};
