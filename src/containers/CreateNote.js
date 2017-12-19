import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Keyboard, Platform, Alert } from 'react-native';
import { back } from '../actions/navigation';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

import { CreateNoteStyle } from '../styles';
import { saveNote } from '../actions/createNote';
import HeaderButton from '../components/common/HeaderButton';

class CreateNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyboardHeight: 0,
            text: ''
        };

        this._saveNote = this._saveNote.bind(this);
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        const cancel = state.params && state.params.cancel ? state.params.cancel : null;
        const save = state.params && state.params.save ? state.params.save : null;
        return {
            title: 'New Note',
            headerRight: <HeaderButton action={save} type='check' />,
            headerLeft: <HeaderButton action={cancel} type='cross' />
        }
    };

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    componentDidMount() {
        this.props.navigation.setParams({
            cancel: this.props.cancel,
            save: this._saveNote
        });
    }

    _keyboardDidShow(e) {
        this.setState({ keyboardHeight: Platform.OS === 'ios' ? e.endCoordinates.height : 0 });
    }

    _keyboardDidHide() {
        this.setState({ keyboardHeight: 0 });
    }

    _saveNote() {
        if(this.state.text.trim() === '') {
            Alert.alert('Empty Text', 'Come on! write something cool... ;)');
        } else {
            const note = {
                id: uuid(),
                text: this.state.text,
                createdAt: new Date(),
                favourite: false
            };
            this.props.save(note);
        }
    }

    render() {
        return (
            <View style={CreateNoteStyle.container}>
                <TextInput
                    style={[CreateNoteStyle.textArea, { marginBottom: this.state.keyboardHeight }]}
                    multiline={true}
                    autoFocus={true}
                    placeholder='How do you plan to dominate the world?'
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text} />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        cancel: () => {
            dispatch(back());
        },
        save: (note) => {
            dispatch(saveNote(note));
        }
    });
};

CreateNote.propTypes = {
    cancel: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(CreateNote);