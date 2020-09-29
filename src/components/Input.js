import * as React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';



const Input = (props) => (
    <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
            { props.label + ( props.unit ? " [" + props.unit + "]" : "") + " :" }
        </Text>
        <TextInput
            style={styles.inputText}
            placeholder="Value"
            onChangeText={c => props.onInput(c)}
            keyboardType="number-pad"
            defaultValue={props.defaultValue || ""}
            />
    </View>
)


const styles = StyleSheet.create({
    inputContainer: {
        display: "flex",
        flex: 1,
        marginHorizontal: 2,
        minWidth: "45%"
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 4,
        color: "#666"
    },
    inputText: {
        fontSize: 16,
        padding: 4,
        height: 42,
        backgroundColor: "white",
        borderRadius: 4,
        marginBottom: 8,
        color: "#666"
    }



});


export default Input;




