import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { NotesStyle } from '../styles/index';
import EmptyNotes from '../components/Notes/EmptyNotes';

class Notes extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Notes',
    });

    renderNotes() {
        return <EmptyNotes addNote={() => { console.log("add note");}} />;
    }

    render() {
        return (
            <View style={NotesStyle.container}>
                {this.renderNotes()}
            </View>
        );
    }
}

export default Notes;