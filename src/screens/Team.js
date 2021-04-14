import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ROUTES = [
    {
        title: 'Harold TASSE LOUOKDOM',
        img: require('../assets/images/01.jpg'),
    },
    {
        title: 'Kami Mbougo Loïc Ruvice',
        img: require('../assets/images/00.jpeg'),
        email : "kamiruvice@gmail.com",
        phone : 696835158
    },
    {
        title: 'Tchaheu Tchaheu idriss',
        img: require('../assets/images/02.jpeg'),
        email: "idrisstchaheu@gmail.com"
    },
    {
        title: 'Nguepi Gaëtan',
        img: require('../assets/images/03.jpeg'),
    },
    {
        title: 'GUITIYA Moïse',
        img: require('../assets/images/04.jpeg'),
    },
    {
        title: 'Sonna Maël',
        img: require('../assets/images/05.jpeg'),
    },
    {
        title: 'MBOH HELBERT SHAYEH',
        img: require('../assets/images/06.jpeg'),
    },
    {
        title: 'Emeche Clinton Chisom',
        img: require('../assets/images/09.jpg'),
    },
    {
        title: 'Tsindjou Fomekong Herve',
        // img: require('../assets/images/06.jpeg'),
    },
    {
        title: 'Bernard Taku',
        // img: require('../assets/images/06.jpeg'),
    },
    {
        title: 'Chia',
        // img: require('../assets/images/06.jpeg'),
    },
    {
        title: 'DEFO WABO JORDAN STEVY',
        img: require('../assets/images/08.jpeg'),
        email : "jstevy2@gmail.com",
        phone : 695685892
    },
    {
        title: 'MINGUE TCHANKWE MATHIEU',
        img: require('../assets/images/07.jpeg'),
    },
]


class Team extends React.PureComponent {


    render() {
        let { navigation } = this.props
        return (
            <ScrollView>
                {
                    ROUTES.map((item, index) => (
                        <View
                            key={index}
                            style={{ flexDirection: 'row', paddingHorizontal: 4, marginVertical: 4 }}
                        >
                            <Image
                             style={{ height: 58, width: 58, borderRadius: 58/2, backgroundColor: "red" }}
                             source={item.img} />
                            <View style={styles.listContainer}>
                                <Text style={styles.listTitle}>{item.title}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
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

export default Team;