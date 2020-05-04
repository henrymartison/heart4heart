import React, { PureComponent } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Button from '../button';
import colors from '../../../utils/colors';
import { gs } from '../../../utils/styles';

export default class EditModal extends PureComponent {
  static navigationOptions = { headerShown: false };

  _handleSend = () => {
    Alert.alert('', 'Do you want to send to community or counsellor', [
      {
        text: 'Community',
        onPress: () => console.log('OK Pressed'),
        style: { color: colors.primary },
      },
      {
        text: 'Counsellor',
        onPress: this.props.navigation.navigate('ThankU'),
        style: 'cancel',
      },
    ]);
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, paddingHorizontal: 13 }}
      >
        {/* <View style={{ flex: 1, paddingHorizontal: 13 }}> */}
        <ScrollView style={{}} keyboardDismissMode="interactive">
          <Text style={styles.heading}>Tell us your concerns</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor={colors.defBlack}
            multiline={true}
          />
        </ScrollView>
        <View style={{ ...gs.row, marginBottom: 10 }}>
          <Button
            transparent
            style={[
              styles.button,
              {
                backgroundColor: null,
                borderColor: colors.primary,
                borderWidth: 1,
              },
            ]}
          >
            <Text style={[styles.buttonText]}>Save</Text>
          </Button>
          <Button style={styles.button} onPress={this._handleSend}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Send</Text>
          </Button>
        </View>
        {/* </View> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginTop: 16,
    fontSize: 20,
  },
  heading: {
    fontWeight: '700',
    fontSize: 21,
    marginTop: 20,
  },
  button: {
    width: '48%',
    backgroundColor: colors.primary,
    height: 50,
    marginRight: 14,
    borderRadius: 7,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
