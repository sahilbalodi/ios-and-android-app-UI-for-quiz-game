import React from 'react';
import { TextInput } from 'react-native';

class Title extends React.Component {
  render() {
    return (
      <TextInput
        style={{
 height: 40,
width: '95%',
borderColor: 'white',
borderWidth: 1,
backgroundColor: '#FFFFFF',
 position: 'relative',
 top: 0,
}}
      />
    );
  }
}
export default Title;
