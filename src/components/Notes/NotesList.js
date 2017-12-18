import React, { PureComponent } from 'react';
import { View, Text, VirtualizedList } from 'react-native';
import PropTypes from 'prop-types';

import NoteItem from './NoteItem';

class NotesList extends PureComponent {

    _renderItem({ item }) {
        return <NoteItem note={item} />;
    }

    _getItem(data, index) {
        return data[index];
    }

    _shouldItemUpdate(prev, next) {
        return prev.item !== next.item;
    }

    render() {
        console.log(this.props.notes);
        return (
            <View style={{ flex: 1 }}>
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
    notes: PropTypes.array.isRequired
};

export default NotesList;