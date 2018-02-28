import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

import { connect } from 'react-redux';

import {
    testAction,
} from '../actions/test';

import { store } from '../store/configureStore';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class MainView extends React.Component {

    handleGoTo = () => {
        const { navigate } = this.props.navigation;
        navigate('TestPage')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => this.props.testAction()}
                    title="Dispatch Action"
                    color="#841584"
                />
                <Button onPress={() => this.handleGoTo()}
                    title="GoTo TestPage"
                    color="#841584"
                />
                <Text>Main View</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    content: state.test.content,
});

const mapDispatchToProps = (dispatch) => ({
    testAction: () => {
        dispatch(testAction())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
