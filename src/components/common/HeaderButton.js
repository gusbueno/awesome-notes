import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const iconType = (type) => {
    switch (type) {
        case 'plus':
            return 'ios-add-outline';
        case 'cross':
            return 'ios-close-outline';
        case 'check':
            return 'ios-checkmark-outline';
        default:
            break;
    }
};

const HeaderButton = ({ action, type }) => {
  return (
    <TouchableOpacity onPress={action} style={{ marginHorizontal: 10 }}>
        <Icon name={iconType(type)} size={40} color="white" />
    </TouchableOpacity>
  );
};

HeaderButton.propTypes = {
    action: PropTypes.func,
    type: PropTypes.string.isRequired
};

export default HeaderButton;