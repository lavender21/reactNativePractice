import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 8
    },
    colLayout: {
        marginVertical: 8,
        height: 200
    },
    lightBlue: {
        backgroundColor: "deepskyblue",
    },
    pink: {
        backgroundColor: "lightpink"
    },
    lavender: {
        backgroundColor: "lavender"
    }
});

export default class ColLayout extends Component {
    render() {
        return <View>
            <Text style={styles.title}>demo1: 均等布局</Text>
            <View style={styles.colLayout}>
                <View style={{flex: 1, ...styles.pink}}>
                        <Text>内容未超出</Text>
                </View>
                <View style={{flex: 1, ...styles.lavender}}>
                    <Text>内容超出自动截取1111111111111111222222222222222222222222222222222222222222222222222222222222211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222</Text>
                </View>
                <View style={{flex: 1, ...styles.lightBlue}}>
                </View>
            </View>

            <Text style={styles.title}>demo1: 顶部固定，剩余填充</Text>
            <View style={styles.colLayout}>
                <View style={{height: 50, ...styles.pink}}>
                </View>
                <View style={{flex: 1, ...styles.lightBlue}}>
                </View>
            </View>

            <Text style={styles.title}>demo1: 顶低部固定，中间填充</Text>
            <View style={styles.colLayout}>
                <View style={{height: 50, ...styles.pink}}>
                </View>
                <View style={{flex: 1, ...styles.lightBlue}}>
                </View>
                <View style={{height: 50, ...styles.pink}}>
                </View>
            </View>
        </View>;
    }
}