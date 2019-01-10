import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';

export default class App extends React.Component {
  state={}
  render() {
    return (
      <View style={styles.purchaseForm}>
        <TextInput 
          style={styles.textinput}
          placeholder="Item Purchased"
          underlineColorAndroid='transparent'
          onChangeText={(item)=>this.setState({item})}/>
        <TextInput
          style={styles.textinput}
          placeholder="Price"
          keyboardType='number-pad'
          underlineColorAndroid='transparent' 
          onChangeText={(price)=>this.setState({price})}/>
        <Picker 
          selectedValue={this.state.category}
          onValueChange={(itemValue, itemIndex) => 
          this.setState({category: itemValue})}>
          <Picker.Item label='Food' value='food' /> 
          <Picker.Item label='Car' value='car' /> 
          <Picker.Item label='Gas' value='gas' />
          <Picker.Item label='Clothes' value='clothes' />
          <Picker.Item label='Misc' value='misc' />
          <Picker.Item label='Errands' value='errands' />
        </Picker>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt} onPress={this.sendData.bind(this)}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  sendData(){
    if (this.state.price && this.state.category && this.state.item) {
      console.log(this.state.price);
      console.log(this.state.item);
      console.log(this.state.category);
    }
  }
}

// ToDo: Netowrking and GET requets 

function sendMoreData() {
  console.log("I'm sending the data now!")
}
const styles = StyleSheet.create({
  purchaseForm: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 34,
    color: '#000',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000',
    borderBottomColor: '#888',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#255d00',
    marginTop: 30, 
  },
  btntxt: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
