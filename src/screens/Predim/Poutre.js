

import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  Button
  } from 'react-native';


export default class PredimPoutre extends React.Component {
  state = {
    selectedValue: "iso",
    result: {}
  }

  setSelectedValue = value => {
    this.setState({ selectedValue: value });
  }

  exe = () => {
    let h = null;
    let hMin = null;
    let hMax = null;
    let type = this.state.selectedValue;
    if (type === 'iso') {
      h = this.state.l / 10;
      this.setState({ result: { h }})
    } else {
      let lMax = this.state.l * 1;
      hMin = lMax / 15;
      hMax = lMax / 12;
      this.setState({ result: { hMin, hMax }})
    }
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <TextInput 
        style={{ height: 48 }} 
        placeholder='Largeur du mur ou des poteau'
        keyboardType='numeric'
        onChangeText={t => this.setState({ b: t })}
         />
      </View>
      <View style={styles.formGroup}>
        <TextInput 
        style={{ height: 48 }} 
        placeholder='Longeur de la poutre'
        keyboardType='numeric'
        onChangeText={t => this.setState({ l: t })}
         />
      </View>
      <View style={styles.formGroup}>
        <Text>Type de poutre: </Text>
        <Picker
        selectedValue={this.state.selectedValue}
        style={{ height: 50, width: "100%" }}
        onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
      >
        <Picker.Item label="Iso" value="iso" />
        <Picker.Item label="Cont_int" value="cont_int" />
        <Picker.Item label="Cont_riv" value="cont_riv" />
      </Picker>
      </View>
      {
        this.state.result &&
        <Text style={styles.paragraph}>
          {
            this.state.result.h &&
            `Hauteur = ${this.state.result.h} m`
          }

          {
            this.state.result.hMax &&
            `${(this.state.result.hMin + '').slice(0, 4)} m <= h <= ${(this.state.result.hMax + '').slice(0, 4)} m`
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
    margin: 24,
    fontSize: 16,
    textAlign: 'center',
  },

  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)'
  },

});
