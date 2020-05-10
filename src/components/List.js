import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'DKI Jakarta',
                    faculty: 'Komputer'
                },
                {
                    id: 2,
                    name: 'Jawa Barat',
                    faculty: 'Fekon'
                },
                {
                    id: 3,
                    name: 'Jawa Timur',
                    faculty: 'Perawat'
                },
                {
                    id: 4,
                    name: 'Jawa Tengah',
                    faculty: 'Pertanian'
                },
                {
                    id: 5,
                    name: 'Sulawesi Selatan',
                    faculty: 'Pertanian'
                },
                {
                    id: 6,
                    name: 'Banten',
                    faculty: 'Pertanian'
                },
                {
                    id: 7,
                    name: 'Nusa Tenggara Barat',
                    faculty: 'Pertanian'
                },
                {
                    id: 8,
                    name: 'Bali',
                    faculty: 'Pertanian'
                },
                {
                    id: 9,
                    name: 'Papua',
                    faculty: 'Pertanian'
                },
                {
                    id: 10,
                    name: 'Kalimantan Selatan',
                    faculty: 'Pertanian'
                },
            ],
            refreshing: false
        }
    }

    renderItem = ({ item }) => (
        <View style={{ padding: 5, borderBottomWidth: 2, borderBottomColor: '#000' }}>
            <Text>{item.name}</Text>
            
            
        </View>
    )

    onRefresh = () => {
        this.setState({ refreshing: true })
        const data = this.state.students.concat({id: 5, name: 'Edo', faculty: 'Fekon'})
        this.setState({
            refreshing: false,
            students: data
        })
        this.setState({ counter: this.state.counter + 1 })
        
    }
    
    render() {
        
        return (
            <View>
                <TextInput
                    style={{ height: 30 }}
                />
                <Text> Data Covid-19 Global & Indonesia </Text>
                <TextInput
                    style={{ height: 10 }}
                />
                <Text> Global </Text>
                <TextInput
                    style={{ height: 10 }}
                />
                <Text> Indonesia </Text>
                <Text> #StayHomeGengs #StaySafe #CegahCovid19 </Text>
                <TextInput
                    style={{ height: 10 }}
                />
                <Text> Nama Provinsi </Text>
                <FlatList 
                    data={this.state.students}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            </View>
        )
    }
}

export default List;