/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppWithStackNavState from './Nav';
import appReducer from './reducers/index';

const store = createStore(appReducer, {}, applyMiddleware(thunk));

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <AppWithStackNavState />
                </View>
            </Provider>
        );
    }
};
