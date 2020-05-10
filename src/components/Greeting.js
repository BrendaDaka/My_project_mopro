import React from 'react';
import { View, Text } from 'react-native';

const Greeting = (props) => {
    const {textStyle} = styles;
    return (
    <View>
        <Text style={textStyle}>                       Indonesia</Text>
        <Text style={textStyle}> #StayHomeGengs #StaySafe #CegahCovid19</Text>
    </View>
    );
}

const styles = {
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
}

export default Greeting;