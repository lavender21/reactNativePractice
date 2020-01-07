import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList } from "react-native";

const s = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 8
    },
    section: {
        marginVertical: 8,
        height: 400
    },
    lightBlue: {
        backgroundColor: "deepskyblue",
    },
    pink: {
        backgroundColor: "lightpink"
    },
    lavender: {
        backgroundColor: "lavender"
    },
    green: {
        backgroundColor: "lightgreen"
    }
});

export default class RowAndCol extends Component {
    render() {
        return <View>
            <Text style={s.title}>demo1: 复杂嵌套布局</Text>
            <View style={s.section}>
                <View style={{...s.pink, height: 50}}>
                    <ScrollView contentContainerStyle={{height: "100%", ...s.green, flexDirection: "row"}} horizontal={true}>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                        <Text>scroll view</Text>
                    </ScrollView>
                </View>
                <View style={{...s.lightBlue, flex: 1, flexDirection: "row"}}>
                    <View style={{...s.lavender, width: 60}}>
                        <FlatList
                            data={[
                                {key: 'Devin'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dominic'},
                                {key: 'Jackson'},
                                {key: 'James'},
                                {key: 'Joel'},
                                {key: 'John'},
                                {key: 'Jillian'},
                                {key: 'Jimmy'},
                                {key: 'Julie'},
                            ]}
                            renderItem={({item}) => <Text>{item.key}</Text>}
                            />
                    </View>
                    <View style={{flex: 1, height: "100%"}}>
                    <FlatList
                            data={[
                                {key: 'Devin'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dan'},
                                {key: 'Dominic'},
                                {key: 'Jackson'},
                                {key: 'James'},
                                {key: 'Joel'},
                                {key: 'John'},
                                {key: 'Jillian'},
                                {key: 'Jimmy'},
                                {key: 'Julie'},
                            ]}
                            renderItem={({item}) => <Text>{item.key}</Text>}
                            />
                    </View>
                </View>
                <View style={{...s.pink, height: 50}}></View>
            </View>
        </View>;
    }
}