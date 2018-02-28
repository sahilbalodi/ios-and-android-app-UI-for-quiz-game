import React from 'react';
import PropTypes from 'prop-types';
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
        onChangeText={(text) => { this.props.value(text); }}
      />
    );
  }
}
InputName.propTypes = {
  value: PropTypes.func.isRequired,
};
export default InputName;
