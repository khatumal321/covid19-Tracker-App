
import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import Cards from '../../Component/cards/cards';
import Header from '../Header/Header'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            confirmed: 0,
            recovered: 0,
            deaths: 0
        }
    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api')
            .then((response) => response.json())
            .then((json) => {
                // return json.confirmed;
                console.log(json.confirmed.value)
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
        <Image source={require('./../Home/Home.jpg')}
          style={{height: 250}}
        />
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

export default Home;
