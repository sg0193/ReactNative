
import React,{Component} from 'react';
import {StyleSheet,Text,View,Dimensions, TouchableOpacity, PermissionsAndroid } from 'react-native';
import {RNCamera} from 'react-native-camera';
import Mailer from 'react-native-mail';
import RNFS from 'react-native-fs';

export default class CameraScreen extends Component<Props>  {
    constructor(props)
    {
        super(props);
    }

    static navigationOptions = {
        header:null,
    }
        
   async takePicture(camera){
            console.log('Take Picture');
            const options = {quality : 0.5, base64: true};
            const data = await camera.takePictureAsync(options);
            console.log(data.base64);

            this.saveFileToStorage(data);
    }

    saveFileToStorage(photoData)
    {
        const path= RNFS.ExternalStorageDirectoryPath +'/myphoto.jpg';
        console.log('Path:' + path);
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                'title': 'App Requests Storage Permission',
                'message': 'App would like to store files'
            }
        ).then (() => {
            console.log('about to write my file');
            RNFS.writeFile(path, photoData.base64, 'base64').then(() => {
            console.log('File Written');
            this.sendEmail(path);
            })
            .catch((err) =>{
                console.log(err.message);
            });
        });
    }
    sendEmail(filePath)
    {
      //const path = filePath.substring('file://'.length, filePath.length);
        Mailer.mail({
            subject : 'Hello from React Native Class',
            recipients: [this.props.navigation.state.params.email],
            ccRecipients: [],
            body: '<b>Hello</b>',
            isHTML: true,
            attachement: {
                path: filePath,
                type: 'jpg',
                name: 'photo.jpg',
                //RNFS - React native file system
            }
        }, (error) => {
            console.log(error.message);
        });
    }

    render(){
            return (
                <View style={styles.window}>
                    <RNCamera 
                    style={styles.camera}
                    type={RNCamera.Constants.Type.back}
                    flashMode = {RNCamera.Constants.FlashMode.on}
                    permissionDialogMessage = {"?"}
                    permissionDialogTitle={"Want use camera!"}
                    height ={Dimensions.get('window').height}
                    >
                    {({camera, status}) => {
                        return (
                            <View>
                             <TouchableOpacity 
                             style ={styles.captureButton} 
                             onPress ={() => this.takePicture(camera)}
                             >
                                 <Text>SNAP</Text>
                             </TouchableOpacity>
                            </View>
                        );
                    }}
                    </RNCamera>
                </View>
            );
    }
};

const styles = StyleSheet.create({
    window: {
        flex:1,
        height : Dimensions.get('window').height,
        backgroundColor: 'blue',

    },
    camera :{
        flex:1,
    },
    captureButton :{
        borderRadius : 5,
        borderColor: 'white',
        borderWidth : 3,
        padding : 15,
        paddingHorizontal:20,
        alignSelf: 'center',
        margin: 20
    }
});