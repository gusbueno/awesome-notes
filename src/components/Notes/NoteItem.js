import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

class NoteItem extends Component {

    _formatDate(date) {
        const [day, month, year] = ['' + date.getDate(), '' + (date.getMonth() + 1), date.getFullYear()];
        return [day, month, year].join('/');
    }

    render() {
        return (
            <View style={{ width: '100%', backgroundColor: '#A8DADC', borderRadius: 10, padding: 10, marginBottom: 10 }}>
                <View style={{ flex: 1, marginBottom: 5 }}>
                    <Text style={{ color: '#211A1E', fontFamily: 'Roboto-Regular' }}>{this.props.note.text}</Text>
                </View>
                <View style={{ height: 10 }}>
                    <Text style={{ color: '#457B9D', fontSize: 10, textAlign: 'right', fontFamily: 'Roboto-Thin' }}>{this._formatDate(this.props.note.createdAt)}</Text>
                </View>
            </View>
        );
    }
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired
};

export default NoteItem;