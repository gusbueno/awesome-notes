import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';

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
            <Swipeout {...swipeSettings} style={{ backgroundColor: 'transparent', paddingBottom: 10 }}>
                <View style={{ width: '100%', backgroundColor: '#A8DADC', borderRadius: 10, padding: 10 }}>
                    <View style={{ flex: 1, marginBottom: 5 }}>
                        <Text style={{ color: '#211A1E', fontFamily: 'Roboto-Regular' }}>{this.props.note.text}</Text>
                    </View>
                    <View style={{ height: 10 }}>
                        <Text style={{ color: '#457B9D', fontSize: 10, textAlign: 'right', fontFamily: 'Roboto-Thin' }}>{this._formatDate(this.props.note.createdAt)}</Text>
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