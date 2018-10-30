import React,{Component} from 'react';
import {StyleSheet,Text,View, FlatList, AsyncStorage } from 'react-native';
import Contact from '../contacts/contacts';
import {NavigationEvents} from 'react-navigation'; 

export default class ContactList extends Component<Props>  {
    constructor(props)
    {
        super(props);
        this.state = {
            contacts:{}
        }
    }

    onFocus() {
        this.getContacts();
    }

    getContacts() {
        AsyncStorage
        .getItem('contacts')
        .then( (value) => {
            if(!!value){
                let myContacts = JSON.parse(value);
                this.setState({contacts: JSON.parse(value)});
            }
        })
    }

    _keyExtractor = (item,index) => (item.id).toString()
    renderItem(contact){
        return(
            <View>
                <Contact name={contact.item.name} email={contact.item.email}/>
            </View>
        )
    }
    render(){
            return (
                <View>
                    <NavigationEvents 
                       onWillFocus = {() => this.onFocus()} />
                    <FlatList
                     data={this.state.contacts}
                     keyExtractor = {this._keyExtractor}
                     renderItem = {this.renderItem}
                    />
                </View>
            );
    }
}

const styles = StyleSheet.create({
});