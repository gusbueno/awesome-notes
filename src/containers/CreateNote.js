import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { back } from '../actions/navigation';
import { connect } from 'react-redux';

import HeaderButton from '../components/common/HeaderButton';

class CreateNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            text: '',
            createdAt: null,
            favorite: false

        }
    }

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        console.log(state.params);
        const cancel = state.params && state.params.cancel ? state.params.cancel : null;
        return {
            title: 'New Note',
            headerRight: <HeaderButton action={() => console.log("save!")} type='check' />,
            headerLeft: <HeaderButton action={cancel} type='cross' />
        }
    };

    componentDidMount() {
        this.props.navigation.setParams({
            cancel: this.props.cancel,
            save: () => {}
        });
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
        }
    });
};

CreateNote.propTypes = {
    cancel: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(CreateNote);