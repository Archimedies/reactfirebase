import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import firebase from './Firebase';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default class AboutScreen extends Component {
    static navigationOptions = {
        title: 'Studio',
        headerStyle: {
            backgroundColor: '#f29111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };

    // assign myDatabase to reference firebase and access "item"
    myDatabase = firebase.database().ref('item');
    // set state to track items and ids of selected objects
    state = { items: {}, selectedID: ''}

    // On page load, set value of items column, make variable for items.val(), then set state of itemsJSON to value input if not null.
    componentDidMount() {
        this.myDatabase.on('value', items => {
            const itemsJSON = items.val();
            this.setState({ items: itemsJSON === null ? {} : itemsJSON });
        })   
    }
    // Create item on database
    create(){
        this.myDatabase.push({date: '10/10/1010'});
    }

    // Update item on database
    update() {
        if (this.state.selectedID === '') {
            alert("Cannot update item. Try selecting one first!")
            return;
        }
        this.myDatabase.child(this.state.selectedID).set({ date: '10/25/2019' })
    }

    // Delete item on database
    delete(){
        if (this.state.selectedID === ''){
            alert("Cannot delete item. Try selecting one first!");
            return;
        }
        // Delete via ID
        this.myDatabase.child(this.state.selectedID).set(null)
        // Remove from inputtext
        this.setState({selectedID: ''})
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>Sketch Studio</Text>
                </View>
                <View style={styles.container}>
                    <TextInput value={this.state.selectedID} style={styles.TextInput}></TextInput>
                    <View style={styles.touchopstyle}>
                        <TouchableOpacity style={styles.TextButton} onPress={() => this.create()}>
                            <Text style={styles.containertext}>Create</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TextButton} onPress={() => this.update()}>
                            <Text style={styles.containertext}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TextButton} onPress={() => this.delete()}>
                            <Text style={styles.containertext}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                        {/* map items to an ID and an index # */}
                        <ScrollView style={{flex: 0.5}}>
                            {
                                Object.keys(this.state.items).map((itemID, index) =>
                                    <TouchableOpacity key={index} onPress={() => this.setState({ selectedID: itemID})} >
                                        <Text>{`${itemID}: ${JSON.stringify(this.state.items[itemID])}`}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </ScrollView>
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
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#f2a311'
    },
    headertext:{
        justifyContent: 'flex-start',
        margin: 10,
        fontSize: 20,
    },
    containertext:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    TextInput: {
        backgroundColor: '#f2a311',
        color: 'white',
        height: 20,
        width: '100%',
        marginBottom: 30,
        textAlign: "center"
    }, 
    TextButton: {
        margin: 10,
        backgroundColor: '#1185f2',
    },
    touchopstyle: {
        flexDirection: "row",

    }
    
});