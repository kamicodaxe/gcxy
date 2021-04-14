import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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


class About extends React.PureComponent {


    render() {
        let { navigation } = this.props
        return (
            <View>
                <Image style={{ width: '100%', height: 128, marginTop: 16 }} source={require('../assets/images/logo.png')} />
                <Text style={styles.text}>
                Cette application est une initiative du Club Génie Civil de L'ENSTP visant à résoudre quelques problèmes que l'ingénieur rencontre aux cours de sa formation et sa carrière.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 8,
        paddingVertical: 16,
        fontSize: 18,
        // textAlign: "justify"
    },
})

export default About;