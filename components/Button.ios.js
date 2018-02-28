import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Button, View } from 'react-native';

const styles = StyleSheet.create({
  buttonComponent: {
    width: 20,
    height: 10,
    borderColor: 'white',
    color: 'black',
  },
  buttonContainer: {
    position: 'relative',
    left: 130,
    top: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    width: 120,
  },
});
class DisplayButton extends React.Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonComponent}
          color="black"
          onPress={() => { this.props.login(); }}
          title={this.props.value}
        />
      </View>
    );
  }
}
DisplayButton.propTypes = {
  value: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};
export default DisplayButton;
