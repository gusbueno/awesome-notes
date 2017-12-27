import React, { PureComponent } from 'react';
import { View, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { NotesStyle } from '../../styles/index';


class NoFavouriteNotes extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            iconAnim: new Animated.Value(1)
        }
    }

    componentDidMount() {
        this._runIconAnimation(0.5);
    }

    _runIconAnimation(toValue) {
        const newValue = toValue == 0.5 ? 1 : 0.5;
        Animated.timing(this.state.iconAnim, { toValue }).start(() => this._runIconAnimation(newValue));
    }

    render() {
        const { iconAnim } = this.state;
        return (
            <View style={NotesStyle.emptyNotes.wrapper}>
                <Animated.View style={[NotesStyle.emptyNotes.iconRow, { transform: [{ scale: iconAnim }]}]}>
                    <Icon name="ios-star-outline" size={50} color="#FDE74C" />
                </Animated.View>
                <View style={NotesStyle.emptyNotes.titleRow}>
                    <Text style={NotesStyle.emptyNotes.titleText}>You have no favourite notes..yet...</Text>
                </View>
                <View style={NotesStyle.emptyNotes.messageRow}>
                    <Text style={NotesStyle.emptyNotes.messageText}>Add your first one swiping your note from left to right and tapping on the <Icon name="ios-star-outline" size={16} color="#FDE74C" /></Text>
                </View>
            </View>
        );
    }
}

export default NoFavouriteNotes;