import React, { PureComponent } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../../utils/colors';
import Button from '../components/button';
import { gs } from '../../utils/styles';

export default class ThankU extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Entypo name="archive" size={150} color={colors.primary} />
        <Text style={styles.text}>
          Thanks for sharing! A professional will contact you soon
        </Text>
        <Button
          style={{ ...gs.block_button }}
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={{ fontSize: 23, color: 'white', fontWeight: '700' }}>
            Continue
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 19,
  },
  text: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 37,
  },
});
