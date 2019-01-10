import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button } from 'react-native';

export default class App extends React.Component {
  state={}
  render() {
    return (
      <View style={styles.purchaseForm}>
        <TextInput 
          style={styles.textinput}
          placeholder="Item Purchased"
          underlineColorAndroid='transparent'
          onChangeText={(item)=>this.setState({item})} 
          autoCapitalize={'words'}/>
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
        <Button style={styles.button}
          title='Submit'
          onPress={this.sendData.bind(this)}
          color='#255d00'
          />
      </View>
    );
  }

  sendData(){
    if (this.state.price && this.state.category && this.state.item) {
      var formData = new FormData;
      formData.append('bought_item', this.state.item);
      formData.append('price', this.state.price);
      formData.append('category', this.state.category);
      fetch('http://DOMAIN', {
        method: 'POST',
        body: formData,
      })
      .then((resp) => resp.json())
      .then((respJson) => {
        console.log(respJson)
      })
      .catch((error) => {
        console.log(error)
      });
    }
  }
}

const styles = StyleSheet.create({
  purchaseForm: {
    alignSelf: 'stretch',
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000',
    borderBottomColor: '#888',
    borderBottomWidth: 1,
  },
});
