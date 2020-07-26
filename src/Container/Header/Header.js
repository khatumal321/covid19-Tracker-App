import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderIconExample extends Component {
  render() {
      console.log("rtrt",this.props.navigation)
    return (
        <Header style={{backgroundColor: '#005d66'}}>
          <Left>
          
            <Button transparent onPress = {() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>COVID19 App</Title>
          </Body>
          <Right>

          </Right>
        </Header>
    );
  }
}