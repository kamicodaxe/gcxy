

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


export default class PredimDalle extends React.Component {
  state = {
    result: {},

    selectedValue: "hourdis"
  }

  setSelectedValue = value => {
    this.setState({ selectedValue: value });
  }

  exe = () => {
    alert('Result')
  }

  render() {
    return (
    <View style={styles.container}>

        <InputGroup>
          <Input 
            label="Effort normal"
            unit="N"
            onInput={t => this.data.eN = t * 1}
          />
          <Input 
            label="Hauteur"
            unit="m"
            onInput={t => this.data.h = t * 1}
          />
      </InputGroup>

      <InputGroup>
      <Text>Type de plancher: </Text>
        <Picker
        selectedValue={this.state.selectedValue}
        style={{ height: 42, width: "100%" }}
        onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="dalle à hourdis" value="hourdis" />
        <Picker.Item label="pleine" value="pleine" />
      </Picker>
      </InputGroup>

      {
        this.state.selectedValue === "pleine" &&
        <>
          <InputGroup>
          <Text>Type: </Text>
              <Picker
              selectedValue={this.state.selectedValue}
              style={{ height: 42, width: "100%" }}
              onValueChange={(itemValue, itemIndex) => this.data = itemValue}
              mode="dropdown"
            >
              <Picker.Item label="Continue" value="continue" />
              <Picker.Item label="Isolé" value="pas_continue" />
            </Picker>
          </InputGroup>

          <InputGroup>
          <Input 
            label="Lx"
            unit="m"
            onInput={t => this.data.ly = t * 1}
          />
          <Input 
            label="Ly"
            unit="m"
            onInput={t => this.data.lx = t * 1}
          />
      </InputGroup>

        </>
      }

{
        this.state.selectedValue === "hourdis" &&
        <InputGroup>
          <Input
              label="Portée maximale"
              unit="m"
              onInput={t => t * 1}  
            />
        </InputGroup>
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
