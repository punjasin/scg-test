import React, {useState} from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Item,
  Input,
  Button,
} from 'native-base';
import _ from 'lodash';

import FooterComponent from '../../components/Footer';

const styles = {
  container: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  space: {
    margin: 10,
  },
};
export const Test = (props) => {
  const [x, setX] = useState('0');
  const [result, setResult] = useState([3]);
  const calculate = () => {
    const output = [];
    let y = 3;
    output.push(y);
    _.times(x, (n) => {
      y = y + (n + 1) * 2;
      output.push(y);

      console.log(output);
    });
    setResult(output);
  };
  return (
    <Container>
      <Header>
        <Text>Test Page</Text>
      </Header>
      <Content contentContainerStyle={styles.container}>
        <Text>This is Test page</Text>
        <Text style={styles.space}>
          {x === '0' ? 'insert x number' : `result is ${result}`}
        </Text>
        <Item style={styles.space} rounded>
          <Input
            keyboardType="numeric"
            onChangeText={(value) => {
              setX(value.replace(/\D/g, ''));
            }}
            value={x}
          />
        </Item>
        <Button block onPress={calculate}>
          <Text>Calculate</Text>
        </Button>
      </Content>
      <FooterComponent />
    </Container>
  );
};
