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

class TestPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test Page</Text>
                <Text>Value : {this.props.content}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
