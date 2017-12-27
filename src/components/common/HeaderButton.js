import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { ICON_TYPES } from '../../constants/IconTypes';
import { HeaderButtonStyle } from '../../styles';

const HeaderButton = ({ action, type }) => {
    return (
        <TouchableOpacity onPress={action} style={HeaderButtonStyle.wrapper}>
            <Icon name={ICON_TYPES[type].name} size={40} color={ICON_TYPES[type].color} />
        </TouchableOpacity>
    );
};

HeaderButton.propTypes = {
    action: PropTypes.func,
    type: PropTypes.string.isRequired
};

export default HeaderButton;