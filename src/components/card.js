import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import { gs } from '../../utils/styles';
import Button from './button';
import colors from '../../utils/colors';

const emojis = [
  '../emojis/angry.png',
  '../emojis/confused.png',
  '../emojis/crying.png',
  '../emojis/disappoint.png',
];
const emoji = emojis[Math.floor(Math.random() * emojis.length)];

const Card = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Image source={props.emoji} style={{ height: 50, width: 50 }} />

        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={styles.name}>@catlover</Text>
          <Text style={styles.time}>10hrs ago</Text>

          <Text numberOfLines={5} style={styles.content}>
            Dolore elit magna ad ea labore occaecat dolor consequat elit sit
            deserunt sunt velit eu. Cillum exercitation excepteur esse eiusmod
            sint mollit dolore velit nostrud cupidatat magna cillum magna anim.
            Aliquip minim laboris nostrud irure labore cupidatat culpa occaecat
            ex ut ipsum. Enim minim labore non tempor tempor nisi labore ad ad
            incididunt ex aliqua eu.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    // minHeight: 100,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 0,
    padding: 8,
    borderRadius: 4,
    shadowColor: 'grey',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
  },
  cardContainer: {
    ...gs.row,
    alignItems: 'flex-start',
  },
  content: {
    // flex: 1,
    // flexWrap: 'wrap',
    flexShrink: 1,
    fontSize: 16,
    marginTop: 5,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.2,
  },
  time: {
    color: colors.primary,
    fontWeight: '500',
  },
});
