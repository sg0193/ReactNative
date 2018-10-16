import React,{Component} from 'react';
import {StyleSheet,Text,View, FlatList } from 'react-native';
import Contact from '../contacts/contacts';

export default class ContactList extends Component<Props>  {
    constructor(props)
    {
        super(props);
        this.state = {
            contacts:{}
        }
    }

    componentWillMount() {
        this.getContacts();
    }

    getContacts() {
       const myContacts = [
            {
                name: "Sravan Gurijala",
                email: "sravan.guri@gmail.com"
            },
            {
                name: "Nethra Avula",
                email: "nethra275@gmail.com"
           }
        ];

        this.setState({
            contacts:myContacts
        })
    }

    _keyExtractor = (item,index) => (item.email).toString()
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