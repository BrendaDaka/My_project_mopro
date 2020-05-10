import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle} = styles;
    return (
        <View>
            <Text style={textStyle}>Data Covid-19 Global & Indonesia</Text>
        </View>
    );
}

const styles = {
    textStyle: {
        fontSize: 27,
        fontWeight: 'bold'
    },
}

export default Header;