
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Picker,
  Image
} from 'react-native';
import Cards from '../../Component/cards/cards';
import Header from '../Header/Header'

class Country extends React.Component {
  constructor() {
    super();
    this.state = {
      itemValue: "Pakistan",
      confirmed: 0,
      recovered: 0,
      deaths: 0
    }
  }



  handel = (itemValue, itemIndex) => {
    console.log(itemValue)
    this.setState({ itemValue: itemValue })
    fetch(`https://covid19.mathdro.id/api/countries/${itemValue}`)
      .then((response) => response.json())
      .then((json) => {
        // return json.confirmed;
        console.log(json)
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.contanier}>
          <Header navigation={this.props.navigation} />
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#005d66", color: 'white' }}>
          <Image source={require('./../country/country.jpg')}
            style={{height: 200}}
          />
          <Picker
            selectedValue={this.state.itemValue}
            style={{ height: 50, width: 350, borderColor: "white", borderWidth: 3 }}
            onValueChange={(itemValue, itemIndex) =>this.handel(itemValue,itemIndex)}
          >
            <Picker.Item label="Pakistan" value="Pakistan" />
            <Picker.Item label="India" value="India" />
            <Picker.Item label="United States" value="United States" />
            <Picker.Item label="Italy" value="Italy" />
            <Picker.Item label="United Arab emirates" value="United Arab emirates" />
            <Picker.Item label="China" value="China" />

          </Picker>
        </View>
        <Cards casesConf='Confirmed Cases' casesNo={this.state.confirmed} color='#f67610'  />
        <Cards casesConf='Deaths' casesNo={this.state.deaths} color='#4987cd'/>
        <Cards casesConf='Recovered' casesNo={this.state.recovered} color= '#499aa3' />

      </View>
    )
  }
}




const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 30,
    width: 350,
  },
  text: {
    fontSize: 32,
    paddingTop: 50,
  }

});

export default Country;
