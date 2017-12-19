import React, { PureComponent } from 'react';
import { View, Text, VirtualizedList } from 'react-native';
import PropTypes from 'prop-types';

import { NotesListStyle } from '../../styles';
import NoteItem from './NoteItem';

class NotesList extends PureComponent {
    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
    }

    _renderItem({ item }) {
        return <NoteItem note={item} updateNote={this.props.updateNote} deleteNote={this.props.deleteNote} />;
    }

    _getItem(data, index) {
        return data[index];
    }

    _shouldItemUpdate(prev, next) {
        return prev.item !== next.item;
    }

    render() {
        return (
            <View style={NotesListStyle.container}>
                <VirtualizedList
                    data={this.props.notes}
                    renderItem={this._renderItem}
                    shouldItemUpdate={this._shouldItemUpdate}
                    windowSize={10}
                    keyExtractor={(item, index) => item.id}
                    getItemCount={(data) => data.length}
                    getItem={this._getItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    updateNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
};

export default NotesList;