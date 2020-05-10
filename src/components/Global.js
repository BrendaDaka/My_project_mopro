import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Global extends React.Component{
    constructor(){
        super();
        this.state = {
            GlobalCovid: [],
            Positive: '',
            Recovered: '',
            Death: '',
        }
    }

    componentDidMount = () => {
        this.getDataCovid();
    }

    getDataCovid = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({Positive: json.confirmed.value})
        this.setState({Recovered: json.recovered.value})
        this.setState({Death: json.deaths.value})
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.box1}>
                    <Text style={styles.text}> Positive {this.state.Positive}</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.text}> Recovered {this.state.Recovered}</Text>
                </View>
                <View style={styles.box3}>
                    <Text style={styles.text}> Death {this.state.Death}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'space-evenly'
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '200'
    },
    box1: {
        width: 100,
        height: 90,
        borderRadius: 15,
        marginLeft: 10,
        backgroundColor: 'powderblue'
    },
    box2: {
        width: 100,
        height: 90,
        borderRadius: 15,
        marginLeft: 10,
        backgroundColor: 'greenyellow'
    },
    box3: {
        width: 100,
        height: 90,
        borderRadius: 15,
        marginLeft: 10,
        backgroundColor: 'lightpink'
    },
})

export default Global;