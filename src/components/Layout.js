import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'lightpink'
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'greenyellow'
    },
})

export default Layout;