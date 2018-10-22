import React,{Component} from 'react';
import {StyleSheet,Text,View, Dimensions } from 'react-native';
import Contacts from '../contacts/contacts';
import ContactList from '../contactList/contactList';
import AddContactButton from '../addContactButton/addContactButton';
import AddContact from '../addContact/addContact';

export default class Home extends Component<Props>  {

    static navigationOptions = {header: null}
    render(){
            return (
                <View style={styles.background}>
                    <AddContactButton/>
                    <ContactList />
                    {/* <AddContact/> */}
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