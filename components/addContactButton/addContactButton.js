import React,{Component} from 'react';
import {StyleSheet,Text,View,Button } from 'react-native';
import {withNavigation} from 'react-navigation';

class AddContactButton extends Component<Props>  {
    constructor(props){
        super(props);
    }
    
    buttonPressed(){
        console.log('Button Pressed');
        this.props.navigation.navigate('AddContact');
    }

    render(){
            return (
                <View>
                    <Button title="Add Contact" style={styles.AddContactButton}
                    onPress = {this.buttonPressed.bind(this)}/>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    AddContactButton: {
        color: 'red'
      }
});

export default withNavigation(AddContactButton);