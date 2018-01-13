export default {
    container: {
        flex: 1,
        backgroundColor: '#1D3557',
        padding: 10
    },
    emptyNotes: {
        wrapper: {
            flex: 1,
            backgroundColor: '#457B9D',
            borderRadius: 5,
            justifyContent: 'center',
            padding: 10
        },
        iconRow: {
            marginBottom: 10,
            alignItems: 'center'
        },
        titleRow: {
            marginBottom: 40
        },
        titleText: {
            backgroundColor: 'transparent',
            fontFamily: 'Roboto-Bold',
            fontSize: 24,
            color: '#F1FAEE',
            textAlign: 'center'
        },
        messageRow: {
            marginBottom: 20
        },
        messageText: {
            backgroundColor: 'transparent',
            fontFamily: 'Roboto-Regular',
            fontSize: 18,
            color: '#F1FAEE',
            textAlign: 'center'
        },
        gradient: {
            colors: ['#e4efe9', '#93a5cf'],
            wrapper: {
                paddingVertical: 10,
                borderRadius: 5
            }
        },
        buttonText: {
            textAlign: 'center',
            backgroundColor: 'transparent',
            fontFamily: 'Roboto-Bold',
            fontSize: 18,
            color: '#1D3557'
        }
    },
    notesList: {
        wrapper: {
            flex: 1
        }
    },
    noteItem: {
        swipeoutWrapper: {
            backgroundColor: 'transparent',
            marginBottom: 10
        },
        wrapper: {
            backgroundColor: '#A8DADC',
            borderRadius: 10,
            padding: 10
        },
        textWrapper: {
            flex: 1,
            marginBottom: 5
        },
        text: {
            color: '#211A1E',
            fontFamily: 'Roboto-Regular'
        },
        dateWrapper: {
            height: 10
        },
        date: {
            color: '#457B9D',
            fontSize: 10,
            textAlign: 'right',
            fontFamily: 'Roboto-Thin'
        }
    },
    noteButton: {
        wrapper: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent'
        }
    }
}