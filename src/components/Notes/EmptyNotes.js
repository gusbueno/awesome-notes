import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { NotesStyle } from '../../styles/index';

const EmptyNotes = ({ gotoCreateNote }) => {
    return (
        <View style={NotesStyle.emptyNotes.wrapper}>
            <View style={NotesStyle.emptyNotes.iconRow}>
                <Icon name="ios-book-outline" size={50} color="white" />
            </View>
            <View style={NotesStyle.emptyNotes.titleRow}>
                <Text style={NotesStyle.emptyNotes.titleText}>You have no notes...yet...</Text>
            </View>
            <View style={NotesStyle.emptyNotes.messageRow}>
                <Text style={NotesStyle.emptyNotes.messageText}>There are no notes saved. Create your first one by tapping on the following button!</Text>
            </View>
            <TouchableOpacity onPress={gotoCreateNote}>
                <LinearGradient locations={[0.1,1.0]} colors={NotesStyle.emptyNotes.gradient.colors} style={NotesStyle.emptyNotes.gradient.wrapper}>
                    <Text style={NotesStyle.emptyNotes.buttonText}>Create new note!</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

EmptyNotes.propTypes = {
    gotoCreateNote: PropTypes.func.isRequired
};

export default EmptyNotes;