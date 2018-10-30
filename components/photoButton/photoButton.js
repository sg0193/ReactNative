import React,{Component} from 'react';
import { StyleSheet, Text,View,Button } from 'react-native';
import {withNavigation} from 'react-navigation';

class PhotoButton extends Component<Props>  {
   constructor(props){
            super(props);
   }

   onPress(){
    this.props.navigation.navigate('CameraScreen');
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

export default withNavigation (PhotoButton);