import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    width: '100%',
    top: 20,
    textAlign: 'center',
  },
});
class Header extends React.Component {
  render() {
    return (
      <Text style={styles.header}>{this.props.value}</Text>
    );
  }
}
Header.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Header;

