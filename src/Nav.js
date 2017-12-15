import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Notes from './containers/Notes';
import CreateNote from './containers/CreateNote';

export const Nav = StackNavigator(
    {
        Notes: { screen: Notes },
        CreateNote: { screen: CreateNote }
    }, {
        headerMode: 'screen',
        navigationOptions: {
            gesturesEnabled: false,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#E63946',

            },
            headerTitleStyle: {
                fontFamily: 'Roboto-Regular'
            }
        },
    }
);

const AppWithStackNavState = ({ dispatch, nav }) => {
    return (
        <Nav navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithStackNavState);