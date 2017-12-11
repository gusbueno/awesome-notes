/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppWithStackNavState from './Nav';
import appReducer from './reducers/index';

const store = createStore(appReducer);

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1, paddingTop: 20, backgroundColor: "blue" }}>
                    <AppWithStackNavState />
                </View>
            </Provider>
        );
    }
};
