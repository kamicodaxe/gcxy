

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  Button
} from 'react-native';
import InputGroup from '../../components/InputGroup';
import Input from '../../components/Input';


export default class DimPoutre extends React.Component {
  state = {
    selectedValue: "iso",
    result: {},
    As: '',
    Z: '',
    K: ''
  }

  setSelectedValue = value => {
    this.setState({ selectedValue: value });
  }

  data = {
    Med: 48,
    V: 44,
    fck: 25,
    fyk: 450,
    b: 150,
    h: 600,
    cover: 25,
  }

  exe = () => {
    let { Med, V, fck, fyk, b, h, cover } = this.data
    const mainBarSize = 12
    const linkBarSize = 10
    const d = h - cover - linkBarSize - mainBarSize / 2


    /**
     * 
     * @param {*} Med Maximum moment
     * @param {*} b width of beam
     * @param {*} d Effective depth
     * @param {*} kPrime equals 0.167
     * @returns 
     */
    function getKIfBeamNotOverReinforced(Med, b, kPrime = 0.167) {
      let k = Med * Math.pow(10, 6) / (b * d * d * fck)
      if (k < kPrime) return k
      // Null implies that the beam is overreinforced
      return null;
    }

    let k = getKIfBeamNotOverReinforced(Med, b)

    this.setState({
      K: k
    })

    console.log(k)

    function leverArm(d, K) {
      let z = d * (0.5 + Math.sqrt(0.25 - (K / 1.134)));
      return z > 0.95 * d ? 0.95 * d : z;
    }

    let z = leverArm(d, k)

    this.setState({
      Z: z + " mm"
    })

    console.log(z)

    /**
     * 
     * @param {*} Med 
     * @param {*} z Lerver arm
     * @returns Area of stell required in [unints]
     */
    function getAsReq(Med, z) {
      return Med * Math.pow(10, 6) / (0.87 * fyk * z);
    }

    let asReq = getAsReq(Med, z)
    console.log(asReq)

    this.setState({
      As: asReq + " mm²"
    })

    function getBarSizes(As, bar) {
      let bars = [8, 10, 12, 14, 16, 18];
      let areas = bars.map(function (bar) {
        return Math.PI * Math.pow(bar, 2) / 4
      })

      console.log(asReq / areas[bars.indexOf(bar)])

      return {

      }
    }

    getBarSizes(asReq, 12)




    // this.setState({ result: { hMin, hMax } })

  }

  render() {
    return (
      <View style={styles.container}>
        <InputGroup>
          <Input
            defaultValue="48"
            label="Moment"
            unit="kNm"
            onInput={t => this.data.Med = t * 1}
          />
          <Input
            defaultValue="44"
            label="Effort tranchant"
            unit="kN"
            onInput={t => this.data.V = t * 1}
          />
        </InputGroup>

        <InputGroup>
          <Input
            label="Fck"
            defaultValue="25"
            unit="MPa"
            onInput={t => this.data.fck = t * 1}
          />
          <Input
            label="Fyk"
            defaultValue="450"
            unit="MPa"
            onInput={t => this.data.fyk = t * 1}
          />
          <Input
            defaultValue="150"
            label="Longeur, b"
            unit="mm"
            onInput={t => this.data.b = t * 1}
          />
          <Input
            defaultValue="600"
            label="Hauteur, h"
            unit="mm"
            onInput={t => this.data.h = t * 1}
          />
          <Input
            defaultValue="25"
            label="L'enrobage"
            unit="mm"
            onInput={t => this.data.cover = t * 1}
          />
        </InputGroup>

        {/* <View style={styles.formGroup}>
          <Text>Type de poutre: </Text>
          <Picker
            selectedValue={this.state.selectedValue}
            style={{ height: 42, width: "100%" }}
            onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="Iso" value="iso" />
            <Picker.Item label="Cont_int" value="cont_int" />
            <Picker.Item label="Cont_riv" value="cont_riv" />
          </Picker>
        </View> */}
        
          <Text style={styles.paragraph}>
            {
              this.state.K &&
              `K = ${this.state.K}`
            }
            </Text>

            <Text style={styles.paragraph}>
            {
              this.state.Z &&
              `Z = ${this.state.Z}`
            }
            </Text>

            <Text style={styles.paragraph}>
            {
              this.state.As &&
              `As = ${this.state.As}`
            }
          </Text>
        

        <Button title='Execution' onPress={this.exe} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: 'center',
  },

  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 4,
    // borderWidth: 1,
    // borderColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    backgroundColor: "white"
  },

});
