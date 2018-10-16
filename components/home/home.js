import React,{Component} from 'react';
import {StyleSheet,Text,View, Dimensions } from 'react-native';
import Contacts from '../contacts/contacts';
import ContactList from '../contactList/contactList';

export default class Home extends Component<Props>  {
    render(){
            return (
                <View style={styles.background}>
                    <ContactList />
                </View>
            );
    }
}

const styles= StyleSheet.create({
    background: {
        height: Dimensions.get('window').height,
        backgroundColor: 'yellow'
    }
});