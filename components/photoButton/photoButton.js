import React,{Component} from 'react';
import {StyleSheet,Text,View,Button } from 'react-native';


export default class PhotoButton extends Component<Props>  {
   constructor(props){
            super(props);
   }

   onPress(){
    console.log("Button Pressed");
   }
    render(){
            return (
                <View>
                    <Button
                    onPress={this.onPress.bind(this)}
                    title="Photo"
                    color='red'
                    />
                </View>
            );
    }
}

const styles = StyleSheet.create({
});