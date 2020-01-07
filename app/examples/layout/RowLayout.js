import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 8
    },
    rowLayout: {
        marginVertical: 8,
        flexDirection: "row"
    },
    rowLayoutItem: {
        flex: 1,
        height: 100
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
})

export default class RowLayout  extends Component {
    render() {
        return <View>
            <Text style={styles.title}>demo1: 均等布局</Text>
            <View style={styles.rowLayout}>
                <View style={[styles.rowLayoutItem, styles.pink]}>
                    <Text>内容未超出</Text>
                </View>
                <View style={[styles.rowLayoutItem, styles.lavender]}>
                    <Text>内容超出自动截取1111111111111111222222222222222222222222222222222222222222222222222222222222211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222</Text>
                </View>
                <View style={[styles.rowLayoutItem, styles.lightBlue]}>
                </View>
            </View>

            <Text style={styles.title}>demo2: 不均等布局</Text>
            <View style={styles.rowLayout}>
                <View style={{...styles.pink, height: 100}}></View>
                <View style={{...styles.lavender, height: 100, flex: 2}}></View>
                <View style={{...styles.lightBlue, height: 100, flex: 3}}></View>
            </View>

            <Text style={styles.title}>demo3: 左边固定，右边自动填充</Text>
            <View style={styles.rowLayout}>
                <View style={{...styles.pink, height: 100, flexBasis: 50}}></View>
                <View style={{...styles.lavender, height: 100, flex: 1}}></View>
            </View>

            <Text style={styles.title}>demo4: 左右固定，中间自动填充</Text>
            <View style={styles.rowLayout}>
                <View style={{...styles.pink, height: 100, flexBasis: 50}}></View>
                <View style={{...styles.lavender, height: 100, flex: 1}}></View>
                <View style={{...styles.lightBlue, height: 100, flexBasis: 50}}></View>
            </View>
        </View>;
    }
}