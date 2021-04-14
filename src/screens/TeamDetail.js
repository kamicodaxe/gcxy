import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const ROUTES = [
    {
        title: 'Prédim',
        routeName: 'Predim',
    },
    {
        title: 'Décente des charges',
        routeName: 'DCharges',
    },
    {
        title: 'MDM',
        routeName: 'MDM',
    }
]


class TeamDetail extends React.PureComponent {


    render() {
        let { navigation } = this.props
        return (
            <View>
                {
                    ROUTES.map((item, index) => (
                        <TouchableHighlight 
                        key={index}
                        onPress={() => navigation.push(item.routeName)}
                        >
                            <View style={styles.listContainer}>
                                <Text style={styles.listTitle}>{item.title}</Text>
                            </View>
                        </TouchableHighlight>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    listTitle: {
        fontSize: 16
    }
})

export default TeamDetail;