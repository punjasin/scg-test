import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from 'native-base';
import {Linking} from 'react-native';
import _ from 'lodash';
import axios from 'axios';

import FooterComponent from '../../components/Footer';
import Config from 'react-native-config';

const styles = {
  container: {
    padding: 5,

    backgroundColor: '#F5FCFF',
  },
  space: {
    margin: 10,
  },
};
export const Map = (props) => {
  const {loadMap, maps: result = []} = props;
  useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.8235283,100.5081204&language=th&radius=1500&type=restaurant&key=${Config.GOOGLE_MAPS_API_KEY}`,
      )
      .then((res) => {
        loadMap(res.data.results);
      });
  }, []);
  return (
    <Container>
      <Header>
        <Text>Map Page</Text>
      </Header>
      <Content contentContainerStyle={styles.container}>
        <Text>Food around BangSue</Text>
        <List>
          {result.map((item) => {
            return (
              <ListItem thumbnail>
                <Left>
                  <Icon name="map" />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note numberOfLines={1}>
                    {item.vicinity}
                  </Text>
                </Body>
                <Right>
                  <Button
                    transparent
                    onPress={() => {
                      Linking.openURL(
                        `https://www.google.com/maps/place/?q=place_id:${item.place_id}`,
                      );
                    }}>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            );
          })}
        </List>
      </Content>
      <FooterComponent />
    </Container>
  );
};
