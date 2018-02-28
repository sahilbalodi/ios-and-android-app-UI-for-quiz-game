import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  inputname: {
    height: 30,
    width: '95%',
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    borderWidth: 2,
    top: 60,
    left: 10,
  },
});
class InputName extends React.Component {
  render() {
    return (
      <TextInput
        style={styles.inputname}
      />
    );
  }
}
export default InputName;
