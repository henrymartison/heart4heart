import React, { PureComponent } from 'react';
import { Text, StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import colors from '../../utils/colors';
import { gs } from '../../utils/styles';
import Card from '../components/card';
import { data } from '../../assets/data';

export default class Home extends PureComponent {
  static navigationOptions = { headerShown: false };
  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 12 }}>
        <SafeAreaView />
        <Text style={styles.heading}>Youth Community</Text>

        <FlatList
          data={data}
          renderItem={({ item }) => <Card emoji={item.emoji} />}
          keyExtractor={(i, v) => v.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 25,
    textAlign: 'center',
  },
});
