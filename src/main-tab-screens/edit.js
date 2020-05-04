import React, { PureComponent } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../utils/colors';
import Button from '../components/button';
import { gs } from '../../utils/styles';

export default class Edit extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hello, How are you feeling today?</Text>
        <View style={{}}>
          <View style={{ ...gs.rowBetween }}>
            <Button transparent>
              <Ionicons
                name="ios-arrow-back"
                size={38}
                color={colors.defBlack}
              />
            </Button>
            <Image
              source={require('../../assets/emojis/crying.png')}
              style={{ height: 100, width: 100 }}
            />
            <Button transparent>
              <Ionicons
                name="ios-arrow-forward"
                size={38}
                color={colors.defBlack}
              />
            </Button>
          </View>
          <Text style={styles.emojiText}>Loudly crying</Text>
        </View>

        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate('EditModal')}
        >
          <Text style={styles.buttonText}>Share a concern</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  heading: {
    alignSelf: 'flex-start',
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 40,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  emojiText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    marginTop: 16,
    letterSpacing: 0.2,
  },
});
