import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { HeaderButtonStyle } from '../../styles';

const HeaderButton = ({ action, type }) => {
    const iconTypes = { plus:'ios-add-outline', cross: 'ios-close-outline', check: 'ios-checkmark-outline' };
    return (
        <TouchableOpacity onPress={action} style={HeaderButtonStyle.wrapper}>
            <Icon name={iconTypes[type]} size={40} color="white" />
        </TouchableOpacity>
    );
};

HeaderButton.propTypes = {
    action: PropTypes.func,
    type: PropTypes.string.isRequired
};

export default HeaderButton;