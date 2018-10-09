import React,{Component} from 'react';
import {StyleSheet,Text,View, Dimensions } from 'react-native';
import Contacts from '../Contacts/contacts';

export default class Home extends Component<Props>  {
    render(){
            return (
                <View style={styles.background}>
                    <Contacts name='Sravan Gurijala' email='sravan.guri@gmail.com'/>
                    <Contacts name='Nethra Avula' email='nethra275@gmail.com'/>
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