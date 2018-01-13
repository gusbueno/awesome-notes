import { NavigationActions } from 'react-navigation';

export const goto = (routeName) => {
    return NavigationActions.navigate({ routeName });
};

export const back = () => {
    return NavigationActions.back();
};