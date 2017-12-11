import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const EmptyNotes = ({ addNote }) => {
    return (
        <View style={{flex: 1, backgroundColor: '#457B9D', borderRadius: 5, justifyContent: 'center', padding: 10 }}>
            <View style={{ marginBottom: 40 }}>
                <Text style={{backgroundColor: 'transparent', fontFamily: 'Roboto-Bold', fontSize: 24, color: '#F1FAEE', textAlign: 'center' }}>You have no notes...yet...</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ backgroundColor: 'transparent', fontFamily: 'Roboto-Regular', fontSize: 18, color: '#F1FAEE', textAlign: 'center' }}>There are no notes saved. Create your first one by tapping on the following button!</Text>
            </View>
            <TouchableOpacity onPress={addNote} style={{ backgroundColor: '#A8DADC', padding: 5, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', backgroundColor: 'transparent', fontFamily: 'Roboto-Bold', fontSize: 18, color: '#1D3557' }}>Add new note</Text>
            </TouchableOpacity>
        </View>
    );
};

EmptyNotes.propTypes = {
    addNote: PropTypes.func.isRequired
};

export default EmptyNotes;