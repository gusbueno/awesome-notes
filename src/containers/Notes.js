import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import EmptyNotes from '../components/Notes/EmptyNotes';

class Notes extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Notes',
    });

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1D3557', padding: 10 }}>
                <EmptyNotes addNote={() => { console.log("add note");}} />
            </View>
        );
    }
}

export default Notes;