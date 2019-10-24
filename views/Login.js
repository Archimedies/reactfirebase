import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

const width = '80%';

export default class LoginScreen extends Component {
    render() {
        // Grab the navigation property and store it as an object
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Slap that Login button!</Text>
                </View>
                <View style={styles.formcontainer}>
                    {/* Fake login information */}
                    <Text style={styles.welcometext}>Archimedies</Text>
                    <Text style={styles.welcometext}>*************</Text>
                </View>
                <View style={styles.welcomebuttoncontainer}>
                    <Button style={styles.welcomebutton} title='Login' onPress={() =>
                    // Go to the homepage on 'login'
                        navigate('Sketches')
                        }/>
                </View>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    header:{
        flex: 0.1,
        marginTop: 25,
        backgroundColor: '#f2a311',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 15
    },
    headertext:{
        justifyContent: 'flex-start',
        margin: 0,
        fontSize: 20,
    },
    formcontainer:{
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        lineHeight: 30
    },
    welcometext: {
        fontSize: 20,
        color: '#000'
    },
    welcomebuttoncontainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40,
        width,
    },
    welcomebutton: {
        height: '30px'
    }
});