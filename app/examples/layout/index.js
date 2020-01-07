import React, { Component } from 'react';
import { ScrollView, View, Button, StyleSheet, Text } from "react-native";
import RowLayout from "./RowLayout"

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 16,
        flexDirection: "row"
    },
    section: {
        flex: 1
    }
})

export class LayoutScreen extends Component {
    state = {
        active: "row"
    }
    list = [
        {key: "row", label: "行布局", component: <RowLayout />},
        {key: "col", label: "列布局", component: <View><Text>ssss</Text></View> },
        {key: "others", label: "其他", component: <View></View>}
    ]
    render() {
        const com = this.list.filter(item => item.key === this.state.active)[0];
        
        return <ScrollView>
            <View style={styles.title}>
                 {this.list.map(item => {
                    return <Button
                    title={item.label}
                    onPress={() => this.setState({active: item.key})}
                  />
                })}
            </View>
            <View style={styles.section}>
                {com.component}
            </View> 
        </ScrollView>;
    }
}