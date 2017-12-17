import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { back } from '../actions/navigation';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

import { saveNote } from '../actions/createNote';
import HeaderButton from '../components/common/HeaderButton';

class CreateNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            text: '',
            createdAt: null,
            favorite: false
        };

        this.saveNote = this.saveNote.bind(this);
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

    componentDidMount() {
        this.props.navigation.setParams({
            cancel: this.props.cancel,
            save: this.saveNote
        });
    }

    saveNote() {

        this.setState({ id: uuid(), createdAt: new Date() }, () => this.props.save({}));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ flex: 1, padding: 10 }}
                    multiline={true}
                    autoFocus={true}
                    placeholder='How do you plan to dominate the world?'
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}/>
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