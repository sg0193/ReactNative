import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';
import PhotoButton from '../photoButton/photoButton';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.contact}>
        <View style={styles.contactDetails}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text>
            <Text style={styles.emailTitle}>Email: </Text>
            <Text style={styles.email}>{this.props.email}</Text>
          </Text>
        </View>
        <View style={styles.photoButton}>
          <PhotoButton/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    backgroundColor: 'yellow',
    margin: 4,
    padding: 3,
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
    flexDirection: 'row',
  },
  contactDetails: {
    flex: 4,
  },
  photoButton: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  emailTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    fontSize: 16,
  },
});