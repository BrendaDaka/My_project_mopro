import React from 'react';
import { Text, View } from 'react-native';

const HeaderKedua = (props) => {
    const {textStyle} = styles;
    return (
        <View>
            <Text style={textStyle}>                   Global</Text>
        </View>
    );
}

const styles = {
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    //second: {
    //    fontSize: 26,
    //    color: 'red'
    //},
    //next: {
    //    fontSize: 26,
    //    color: 'red'
    //},
}

export default HeaderKedua;