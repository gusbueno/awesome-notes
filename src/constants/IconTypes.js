import { Platform } from 'react-native';
export const ICON_TYPES = {
    'plus': {
        name: Platform.OS === 'ios' ? 'ios-add-outline' : 'md-add',
        color: 'white'
    },
    'cross': {
        name: Platform.OS === 'ios' ? 'ios-close-outline': 'md-close',
        color: 'white'
    },
    'check': {
        name: Platform.OS === 'ios' ? 'ios-checkmark-outline' : 'md-checkmark',
        color: 'white'
    },
    'delete': {
        name: Platform.OS === 'ios' ? 'ios-trash': 'md-trash',
        color: '#E63946'
    },
    'favourite': {
        name: 'ios-star-outline',
        color: '#FDE74C'
    },
    'favourite-selected': {
        name: 'ios-star',
        color: '#FDE74C'
    }
};