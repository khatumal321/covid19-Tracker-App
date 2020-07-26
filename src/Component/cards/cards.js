import React, { Component } from "react";
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, View } from "native-base";
export default class CardItemButton extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <View></View>
          <Text style={styles.text}>{this.props.casesConf} </Text>
          <Text style={[styles.text2,{color: this.props.color}]}>{this.props.casesNo}</Text>
      </Card>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: 360,
    height: 100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#f4f5f6'
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
  text2: {
    fontSize: 40,
    padding: 10,
    fontWeight: 'bold',
    
  }

});
