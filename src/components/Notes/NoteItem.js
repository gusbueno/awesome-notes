import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';

import { NotesStyle } from '../../styles';
import NoteButton from './NoteButton';

class NoteItem extends Component {
    constructor(props) {
        super(props);
        this._switchFavorite = this._switchFavorite.bind(this);
    }

    _formatDate(date) {
        const [day, month, year] = ['' + date.getDate(), '' + (date.getMonth() + 1), date.getFullYear()];
        return [day, month, year].join('/');
    }

    _switchFavorite() {
        this.props.note.favourite = !this.props.note.favourite;
        this.props.updateNote(this.props.note);
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            right: [{ onPress: () => { this.props.deleteNote(this.props.note.id)}, component: <NoteButton type='delete' />, backgroundColor: 'transparent' }],
            left: [{ onPress: this._switchFavorite, component: <NoteButton type={this.props.note.favourite ? 'favourite-selected' : 'favourite'} />, backgroundColor: 'transparent'}],
            rowId: this.props.note.id,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings} style={NotesStyle.noteItem.swipeoutWrapper}>
                <View style={NotesStyle.noteItem.wrapper}>
                    <View style={NotesStyle.noteItem.textWrapper}>
                        <Text style={NotesStyle.noteItem.text}>{this.props.note.text}</Text>
                    </View>
                    <View style={NotesStyle.noteItem.dateWrapper}>
                        <Text style={NotesStyle.noteItem.date}>{this._formatDate(this.props.note.createdAt)}</Text>
                    </View>
                </View>
            </Swipeout>
        );
    }
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
    updateNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
};

export default NoteItem;