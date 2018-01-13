import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { ICON_TYPES } from '../../constants/IconTypes';
import  { NotesStyle } from '../../styles';

const NoteButton = ({ type }) => {
    return (
        <View style={NotesStyle.noteButton.wrapper}>
            <Icon name={ICON_TYPES[type].name} size={30} color={ICON_TYPES[type].color} />
        </View>
    );
};

NoteButton.propTypes = {
    type: PropTypes.string.isRequired
};

export default NoteButton;