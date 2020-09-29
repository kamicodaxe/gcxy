

import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Button,
  Picker,
  Image,
  ScrollView
  } from 'react-native';

  import InputGroup from '../../components/InputGroup';
  import Input from '../../components/Input';


export default class DCharges extends React.Component {
  state = {
    result: {}
  }

  data = {}

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
        <Image source={require('../../images/ddc.png')} style={{ maxWidth: "100%", resizeMode: "center", height: 200 }} />
        <InputGroup>
          <Input 
            label="X1"
            unit="m"
            onInput={t => this.data.x1 = t * 1}
          />
          <Input 
            label="X2"
            unit="m"
            onInput={t => this.data.x2 = t * 1}
          />
          <Input 
            label="Y1"
            unit="m"
            onInput={t => this.data.y1 = t * 1}
          />
          <Input 
            label="Y2"
            unit="m"
            onInput={t => this.data.y2 = t * 1}
          />
      </InputGroup>
        
        <Button title='Execution' onPress={this.exe} />
    </View>

    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  }

});
