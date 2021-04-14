

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Picker
} from 'react-native';

import InputGroup from '../../components/InputGroup';
import Input from '../../components/Input';


export default class PredimPoteau extends React.Component {
  state = {
    result: {},
    selectedValue: 'rect',
  }

  data = {
    fck: 25,
    fyk: 450,
    h: 3,
    eN: 500,
    coeffDeFlambement: 1,
    lambda: 40,
    k: 1

  }

  setSelectedValue = value => {
    this.setState({ selectedValue: value });
  }

  setSelectedValue = value => {
    this.setState({ selectedValue: value });
  }

  exe = () => {
    function arrondi_5(x) {
      let y = Math.ceil(x);
      let z = Math.round(y / 50) * 50;
      if (z < y)
        return z + 50;
      return z;
    }
    const predimPoteau = (Nu, L, k0, Fck, Fyk, lambda, k, section) => {
      console.log(Nu)
      console.log(L)
      console.log(k0)
      console.log(Fck)
      console.log(Fyk)
      console.log(lambda)
      console.log(k)
      console.log("-----------------------")
      let beta = null;
      if (lambda <= 50) { beta = 1 + 0.2 * (lambda / 35) ** 2 }
      else if (lambda > 50 && lambda < 70) { beta = 0.85 * (lambda / 1500) ** 2; }
      else if (lambda >= 70) { console.log("elancement innaproprié") }
      let Fcd = Fck * 0.85 / 1.5;
      let Fyd = Fyk / 1.15;
      let Lf = k0 * L * 1000;
      let Br = (k * beta * Nu * 1000) / (Fcd / 0.9 + 0.85 * Fyd / 100);
      let a = 0; let b = 0; let c = 0;
      if (section == "RECTANGULAIRE") {
        a = Math.max(12 ** 0.5 * Lf / lambda, Br ** 0.5 + 20);
        b = Math.max(150, Br / (a - 20) + 20);

        this.setState({
          result: {
            l: (arrondi_5(a) / 10),
            w: (arrondi_5(b) / 10)
          }
        })

      }
      else if (section == "CIRCULAIRE") {
        d = Math.max(4 * Lf / lambda, (4 * Br / Math.PI) ** 0.5 + 20);
        this.setState({
          result: {
            d: (arrondi_5(d)) / 10 + "cm"
          }
        })

      }
    }

    let { fck, fyk, eN, h, coeffDeFlambement, lambda, k  } = this.data

    predimPoteau(eN * 1, h * 1, coeffDeFlambement * 1, fck * 1, fyk * 1, lambda * 1, k * 1, this.state.selectedValue)

    console.log(this.state.selectedValue)

    // predimPoteau(500, 3, 1, 25, 500, 40, 1, "RECTANGULAIRE")

  }

  render() {
    return (
      <View style={styles.container}>

        <InputGroup>
          <Input
            defaultValue="500"
            label="Effort normal"
            unit="N"
            onInput={t => this.data.eN = t * 1}
          />
          <Input
            defaultValue="3"
            label="Hauteur"
            unit="m"
            onInput={t => this.data.h = t * 1}
          />
        </InputGroup>

        <InputGroup>
          <Input
            defaultValue="1"
            label="Coeff de flambement"
            onInput={t => this.data.coeffDeFlambement = t * 1}
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
            defaultValue="40"
            label="L’élancement, λ"
            onInput={t => this.data.lambda = t * 1}
          />
          <Input
            defaultValue="1"
            label="Coeff, k"
            onInput={t => this.data.k = t * 1}
          />
        </InputGroup>

        <InputGroup>
          <Text>Type de poteau: </Text>
          <Picker
            selectedValue={this.state.selectedValue}
            style={{ height: 42, width: "100%" }}
            onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="rect" value="RECTANGULAIRE" />
            <Picker.Item label="cir" value="CIRCULAIRE" />
          </Picker>

        </InputGroup>

        {
          this.state.result &&
          <Text style={styles.paragraph}>
            {
              this.state.result.l && this.state.result.w &&
              `Section = ${this.state.result.l} cm x ${this.state.result.w} cm`
            }

            {
              this.state.result.d &&
              `Diametre = ${this.state.result.d}`
            }

          </Text>
        }

        <Button title='Execution' onPress={this.exe} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  }

});
