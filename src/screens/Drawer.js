import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const ROUTES = [
    {
        title: 'Accueil',
        routeName: 'Home',
    },
    {
        title: 'Notre équipe',
        routeName: 'Team',
    },
    {
        title: 'A propos',
        routeName: 'About',
    }
]


class Drawer extends React.PureComponent {


    render() {
        let { navigation } = this.props
        return (
            <View>
                {
                    ROUTES.map((item, index) => (
                        <TouchableHighlight 
                        key={index}
                        onPress={() => {
                            navigation.pop()
                            navigation.push(item.routeName)
                        }}
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

export default Drawer;