import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { NotesStyle } from '../styles/index';
import { notes } from '../selectors/notes';
import EmptyNotes from '../components/Notes/EmptyNotes';
import { goto } from '../actions/navigation';

class Notes extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Notes',
    });

    renderNotes() {
        console.log(this.props.notes);
        return this.props.notes.length > 0 ? <View /> : <EmptyNotes gotoCreateNote={this.props.gotoCreateNote} />;
    }

    render() {
        return (
            <View style={NotesStyle.container}>
                {this.renderNotes()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        notes: notes(state)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        gotoCreateNote: () => {
            dispatch(goto('CreateNote'));
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);