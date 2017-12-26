import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { NotesStyle } from '../../styles/index';

const NoFavouriteNotes = () => {
  return (
    <View style={NotesStyle.emptyNotes.wrapper}>
        <View style={NotesStyle.emptyNotes.iconRow}>
            <Icon name="ios-star-outline" size={50} color="#FDE74C" />
        </View>
        <View style={NotesStyle.emptyNotes.titleRow}>
            <Text style={NotesStyle.emptyNotes.titleText}>You have no favourite notes..yet...</Text>
        </View>
        <View style={NotesStyle.emptyNotes.messageRow}>
            <Text style={NotesStyle.emptyNotes.messageText}>Add your first one swiping your note from left to right and tapping on the <Icon name="ios-star-outline" size={16} color="#FDE74C" /></Text>
        </View>
    </View>
  );
};

export default NoFavouriteNotes;