import React, { PureComponent } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/button';
import colors from '../../utils/colors';
import { gs } from '../../utils/styles';

export default class Register extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Sign up</Text>
        <View style={styles.mainInputContainer}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email Address" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Nick name" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Date of birth (DD/MM/YY)" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Password" />
          </View>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Welcome')}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </Button>
        </View>
        <Button
          style={styles.bkbtn}
          onPress={() => this.props.navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" size={24} color="black" />
          <Text style={{ marginLeft: 13, fontSize: 20 }}>back</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: 36,
    fontWeight: '700',
  },
  button: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 40,
    borderRadius: 4,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  inputContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    marginBottom: 16,
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  bkbtn: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
});
