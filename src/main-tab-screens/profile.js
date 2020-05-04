import React, { PureComponent } from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';
import Button from '../components/button';
import colors from '../../utils/colors';
import { TouchableOpacity } from '../components/TouchableOpacity';
import { gs } from '../../utils/styles';

const listItems = [
  { title: 'Become a counsellor', href: '#' },
  { title: 'Logout', href: '#' },
  { title: 'Help', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Privacy policy', href: '#' },
  { title: 'Terms and conditions', href: '#' },
  { title: 'Delete account', href: '#' },
];

export default class Profile extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (
      <Button transparent>
        <Text style={{ color: colors.primary, fontSize: 18, marginRight: 13 }}>
          Edit
        </Text>
      </Button>
    ),
  });
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/cats.png')}
              style={{ height: 100, width: 100 }}
            />
            <Text
              style={{ fontSize: 20, color: colors.defBlack, marginTop: 5 }}
            >
              @happycat.com
            </Text>
          </View>

          {listItems.map((item) => {
            return (
              <TouchableOpacity key={item.title} style={styles.listContainer}>
                <Text style={styles.listText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 210,
    backgroundColor: '#f2f3f5',
    ...gs.center,
  },
  listContainer: {
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 0.5,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  listText: {
    color: colors.primary,
    fontSize: 17,
  },
});
