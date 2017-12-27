import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import Swipeout from 'react-native-swipeout';

import { NotesStyle } from '../../styles';
import NoteButton from './NoteButton';

class NoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleAnim: new Animated.Value(1),
            opacityAnim: new Animated.Value(1)
        };

        this._switchFavorite = this._switchFavorite.bind(this);
        this._onSwipeOpen = this._onSwipeOpen.bind(this);
        this._onSwipeClose = this._onSwipeClose.bind(this);
    }

    _runScaleAnimation(toValue) {
        Animated.timing(this.state.scaleAnim, { toValue }).start();
    }

    _runOpacityAnimation(toValue) {
        Animated.timing(this.state.opacityAnim, { toValue }).start();
    }

    _formatDate(date) {
        const [day, month, year] = ['' + date.getDate(), '' + (date.getMonth() + 1), date.getFullYear()];
        return [day, month, year].join('/');
    }

    _switchFavorite() {
        this.props.note.favourite = !this.props.note.favourite;
        this.props.updateNote(this.props.note);
    }

    _onSwipeOpen(sectionID, rowId, direction) {
        this._runScaleAnimation(0.60);
        direction == 'right' && this._runOpacityAnimation(0.5);
    }

    _onSwipeClose(sectionID, rowId, direction) {
        this._runScaleAnimation(1);
        direction === 'right' && this._runOpacityAnimation(1);
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            right: [{ onPress: () => { this.props.deleteNote(this.props.note.id)}, component: <NoteButton type='delete' />, backgroundColor: 'transparent' }],
            left: [{ onPress: this._switchFavorite, component: <NoteButton type={this.props.note.favourite ? 'favourite-selected' : 'favourite'} />, backgroundColor: 'transparent'}],
            rowId: this.props.note.id,
            onOpen: this._onSwipeOpen,
            onClose: this._onSwipeClose,
            style: NotesStyle.noteItem.swipeoutWrapper
        };

        let { scaleAnim, opacityAnim } = this.state;
        const rotateY = this.state.opacityAnim.interpolate({
            inputRange: [0.5, 1],
            outputRange: ['45deg', '0deg']
        });
        return (
            <Swipeout {...swipeSettings}>
                <Animated.View style={[NotesStyle.noteItem.wrapper, { opacity: opacityAnim }, { transform: [{ scale: scaleAnim }, { perspective: 1000 }, { rotateY }] }]}>
                    <View style={NotesStyle.noteItem.textWrapper}>
                        <Text style={NotesStyle.noteItem.text}>{this.props.note.text}</Text>
                    </View>
                    <View style={NotesStyle.noteItem.dateWrapper}>
                        <Text style={NotesStyle.noteItem.date}>{this._formatDate(this.props.note.createdAt)}</Text>
                    </View>
                </Animated.View>
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