import React, { PureComponent } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import colors from '../../utils/colors';
import Button from '../components/button';
import { gs } from '../../utils/styles';

export default class Intro extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </Button>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('#')}
        >
          <Text style={styles.buttonText}>Guest</Text>
        </Button>
        <View
          style={{
            ...gs.row,
            alignSelf: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>Join as a</Text>
          <Button transparent>
            <Text style={{ marginLeft: 3, color: '#0087bd', fontSize: 18 }}>
              Counsellor
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },

  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    width: '100%',
    // width: Dimensions.get('window').width - 30,
    height: 40,
    borderRadius: 4,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});
