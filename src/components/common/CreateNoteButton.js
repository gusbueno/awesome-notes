import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const CreateNoteButton = ({ gotoCreateNote }) => {
  return (
    <TouchableOpacity onPress={gotoCreateNote} style={{ marginRight: 10 }}>
        <Icon name="ios-add-outline" size={40} color="white" />
    </TouchableOpacity>
  );
};

CreateNoteButton.propTypes = {
    gotoCreateNote: PropTypes.func
};

export default CreateNoteButton;