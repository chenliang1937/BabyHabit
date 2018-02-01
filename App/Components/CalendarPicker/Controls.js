import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Controls({ styles, name, size, color, onPressControl }) {
  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
    >
      <Icon name={name} size={size} color={color} style={styles}/>
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  name: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};