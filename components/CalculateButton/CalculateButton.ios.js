import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import PropTypes from 'prop-types';

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
class CalculateButton extends React.Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonComponent}
          color="black"
          onPress={() => { this.props.onClick(); }}
          title={this.props.value}
        />
      </View>
    );
  }
}
CalculateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default CalculateButton;
