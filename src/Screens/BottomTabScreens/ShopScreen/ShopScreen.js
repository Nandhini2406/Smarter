// import { View, Text } from 'react-native'
import React from 'react';
import GradientBackground from '../../../Components/ScreenBackground/GradientBackground';
import styled from 'styled-components/native';
import {Button} from 'react-native-elements';
import {theme} from '../../../Assets/colors/bgTheme';

const Title = styled.Text`
  font-size: 30px;
  color: #000;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin-horizontal: 40px;
  margin-bottom: 20px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ShopScreen = () => {
  return (
    <GradientBackground>
      <Container>
        <Title>Used Styled Components in native</Title>
        <Button
          title="Click me!"
          type="outline"
          buttonStyle={{
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 2,
          }}
          titleStyle={{color: 'rgba(255, 255, 255, 9)'}}
          onPress={() => {
            alert('Button from react native elements is clicked!');
          }}
        />
      </Container>
    </GradientBackground>
  );
};

export default ShopScreen;
