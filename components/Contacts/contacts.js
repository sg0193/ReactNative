import React,{Component} from 'react';
import {StyleSheet,Text,View } from 'react-native';
import PhotoButton from '../photoButton/photoButton';

export default class Contacts extends Component<Props>  {
    constructor(props){
        super(props);
    }
    render(){
            return (
                <View style={styles.contact}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.email}>Email: {this.props.email}</Text>
                    <PhotoButton/>
                </View>
            );
    }
}

const styles = StyleSheet.create({
       contact: {
           borderWidth: 2,
           margin: 4,
           padding: 3,
           backgroundColor: 'white'
       },
       name : {
           fontWeight : 'bold',
           fontSize: 20,
       },
       email : {
           fontSize: 16,
       },
});