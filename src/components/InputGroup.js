import * as React from 'react';
import { View, StyleSheet } from 'react-native';



const InputGroup = (props) => (
    <View style={styles.inputGroupContainer}>
        { props.children }
    </View>
)


const styles = StyleSheet.create({
    inputGroupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },
})


export default InputGroup;