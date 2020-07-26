import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Button } from 'native-base';
function Map(props) {

    return (
        <View style={styles.contanier} >
            <View style={styles.btnView} >
                <Button
                    bordered
                    style={styles.button}
                    onPress={() => props.navigation.navigate('country')}
                >
                    <Text style={{ fontSize: 23, color: 'white' }}>Get Started Map</Text>
                </Button>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        height: 790,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
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

export default Map;
