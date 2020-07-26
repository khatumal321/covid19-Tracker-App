import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';
import { Button } from 'native-base';

function GetStarted(props) {
        return (
            <SafeAreaView >
                <ScrollView >
                    <View style={styles.contanier} >
                        {/* <ImageBackground source={require('./../../Container/Login/background.jpg')} style={styles.image}>
            </ImageBackground> */}
                        <Image source={require('./logo.jpg')}
                            style={styles.logo}
                        />
                        <Text style={styles.text} > Be Alive.Be Yourself.</Text>
                        <View style={styles.btnView} >
                            <Button
                                bordered
                                style={styles.button}
                                onPress={() => props.navigation.navigate('Home')}
                            >
                                <Text style={{ fontSize: 23, color: 'white' }}>Get Started</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
    

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        height: 790,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    btnView: {
        marginTop: 20,
    },
    button: {
        width: 350,
        height: 60,
        backgroundColor: '#005d66',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 180,
        height: 180,
    },
    text: {
        fontWeight: 'bold',
        paddingBottom: 33,
    },
    policy: {
        color: '#808080',
        // padding: 10,
        paddingTop: 20,
        fontSize: 11
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }


});

export default GetStarted;


