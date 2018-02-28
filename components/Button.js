import React from 'react';
import { StyleSheet, Button, Alert, View } from 'react-native';

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
    color: 'white',
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
          onPress={() => { Alert.alert('saved'); }}
          title="LOGIN"
        />
      </View>
    );
  }
}
export default DisplayButton;
