import React, { PureComponent } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Button from '../components/button';
import colors from '../../utils/colors';

export default class Welcome extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/botanical.png')}
          style={styles.image}
        />
        <Text style={styles.text}>
          "Take in three deep breaths. This will help you relax your nerves
          before you get started"
        </Text>
        <View style={{}}>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Edit')}
          >
            <Text style={styles.buttonText}>Get started</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around', paddingHorizontal: 15 },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
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
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});
