

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
    fck: 45,
    fyk: 450,
    h: null,
    eN: null,
    coeffDeFlambement: null,
    lambda: null,
    k: null

  }

  setSelectedValue = value => {
    this.setState({ selectedValue: value });
  }

  setSelectedValue = value => {
    this.setState({ selectedValue: value });
  }

  exe = () => {
    console.log(this.data)
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
          <Input 
            label="Coeff de flambement"
            onInput={t => this.data.coeffDeFlambement = t * 1}
          />
      </InputGroup>

      <InputGroup>
          <Input 
            label="Fck"
            defaultValue="45"
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
            label="L’élancement, λ"
            onInput={t => this.data.lambda = t * 1 }
          />
          <Input 
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
        <Picker.Item label="rect" value="Rectangulaire" />
        <Picker.Item label="cir" value="Circulaire" />
      </Picker>
      
      </InputGroup>

      

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
