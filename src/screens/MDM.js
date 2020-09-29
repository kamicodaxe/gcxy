

import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Dimensions,
    TouchableWithoutFeedback,
    Image,
    Modal,
    TextInput,
    ScrollView
} from 'react-native';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';



const Force = ({ color = "black" }) => {
    let [h, setH] = React.useState(0)
    return (
        <TouchableWithoutFeedback hitSlop={{ top: 8, bottom: 8 }} onPress={function () { setH('green') }}>
            <View style={{
                height: 100,
                width: 4,
                backgroundColor: h ? h : color
            }}></View>
        </TouchableWithoutFeedback>
    )
}

const Beam = ({ width = 100, color = "black" }) => {
    let [h, setH] = React.useState(0)
    return (
        <TouchableWithoutFeedback hitSlop={{ top: 8, bottom: 8 }} onPress={function () { setH('green') }}>
            <View style={{
                height: 4,
                width: width,
                backgroundColor: h ? h : color
            }}></View>

        </TouchableWithoutFeedback>
    )
}

const InvisibleBeam = ({ width = 100, color = "black" }) => (
    <View style={{
        height: 4,
        width: width,
        backgroundColor: color
    }}></View>
)

const SidePanel = ({ width = 100, color = "black" }) => (
    <View style={{
        backgroundColor: 'gray',
        position: 'absolute',
        padding: 4,
        top: 8,
        right: 4
    }}>
        <View style={{
        }}>
            <Text style={{
                fontSize: 16,
                fontWeight: '500',
                marginBottom: 8
            }}>Load</Text>
        </View>

        <View style={{
        }}>
            <Text style={{
                fontSize: 16,
                fontWeight: '500',
                marginBottom: 8
            }}>Charge</Text>
        </View>

    </View>
)


const Pin = ({ }) => (
    <View style={{
        height: 8,
        width: 8,
        backgroundColor: 'black',
        marginTop: 2,
        transform: [{
            rotateZ: "45 deg"
        }]
    }}></View>
)


export default class MDM extends React.Component {
    state = {
        result: {},
        text: "K"
    }

    setSelectedValue = value => {
        this.setState({ selectedValue: value });
    }

    exe = () => {
        alert('Result')
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

<View style={{
    width: '100%',
    height: Dimensions.get('screen').height / 3,
    backgroundColor: 'white',
    position: 'relative'

}}>

<SidePanel />

    <View>

        {/* Invisible Beam config */}
        <View style={{
            marginVertical: 2,
            flexDirection: "row"
        }}>
            <InvisibleBeam width={100 - 4} color="transparent" />
            <Pin />
            <InvisibleBeam width={100 - 4} color="transparent" />
            <Pin />
        </View>


        <View style={{
            flexDirection: "row",
        }}>
            <Beam />
            <Beam />
            <Beam />
        </View>

        {/* Invisible Beam config */}
        <View style={{
            marginVertical: 2,
            flexDirection: "row"
        }}>
            <InvisibleBeam width={100 - 4} color="transparent" />
            <Pin />
            <InvisibleBeam width={100 - 4} color="transparent" />
            <Pin />
        </View>


    </View>

    <Text>MDM</Text>
</View>

    <View>

    <InputGroup>
    <Input
        label="Width"
        onInput={text => console.warn(text)}
    />
    <Input
        label="Height"
        onInput={text => console.warn(text)}
    />
    </InputGroup>



    <View style={styles.inputGroupContainer}>
    </View>


</View>

<Button title='Execution' onPress={this.exe} />
</View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 4
    },


    inputGroupContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    inputContainer: {
        display: "flex",
        width: "45%"
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
