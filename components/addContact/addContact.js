import React,{Component} from 'react';
import {Dimensions,StyleSheet,Text,View,TextInput, Button,AsyncStorage} from 'react-native';

const  uuiv1 = require('uuid/v1');

export default class AddContact extends Component<Props>  {
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            email:'',
            contacts:[]
        }
    }

    static navigationOptions ={
        header: null
    };

    onNameChange(value)
    {
        this.setState({name: value});
    }

    onEmailChange(value)
    {
        this.setState({email: value});
    }

    componentWillMount(){
        this.generateId();
        this.getContacts();
    }

    generateId(){
        const id = uuiv1();
        this.setState({id});
    }

    getContacts(){
        AsyncStorage
        .getItem('contacts')
        .then( (value) => {
            if(value!= undefined){
                this.setState({contacts: JSON.parse(value)});
            }
        })
    }

    onSubmit(){
        const contacts = this.state.contacts;
        contacts.push(
            {
                id : this.state.id,
                name: this.state.name,
                email: this.state.email
            }
        );

        AsyncStorage
        .setItem('contacts',JSON.stringify(contacts))
        .then(() => this.props.navigation.navigate('Home'))
        
    }
    render(){
            return (
                <View style={styles.background}>
                    <TextInput 
                        placeholder="Name"
                        value = {this.state.name}
                        style= {styles.textInput}
                        onChangeText = { (value) => this.onNameChange(value)}
                    />
                    <TextInput 
                        placeholder="Email"
                        value = {this.state.email}
                        style= {styles.textInput}
                        onChangeText = { (value) => this.onEmailChange(value)}
                    />

                    <Button  onPress={this.onSubmit.bind(this)} title="Add Contact" style={styles.button}/>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    background :{
        height: Dimensions.get('window').height,
        backgroundColor : '#468284'
    },
    button:{
        color:'red'
    },
    textInput: {
        backgroundColor: '#FED',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    }
});