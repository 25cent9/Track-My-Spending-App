import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Button, ToastAndroid } from 'react-native';
import Config from 'react-native-config'

export default class App extends React.Component {
  state={
    submission_key: KEY,
  };
  render() {
    return (
      <View style={styles.purchaseForm}>
        <TextInput 
          style={styles.textinput}
          placeholder="Item Purchased"
          underlineColorAndroid='transparent'
          onChangeText={(item)=>this.setState({item})} 
          autoCapitalize={'words'}
          value={this.state.item}/>
        <TextInput
          style={styles.textinput}
          placeholder="Price"
          keyboardType='number-pad'
          underlineColorAndroid='transparent' 
          onChangeText={(price)=>this.setState({price})}
          value={this.state.price}
          />
        <Picker 
          selectedValue={this.state.category}
          onValueChange={(itemValue, itemIndex) => 
          this.setState({category: itemValue})}
          value={this.state.category}>
          <Picker.Item label='Food' value='Food' /> 
          <Picker.Item label='Car' value='Car' /> 
          <Picker.Item label='Gas' value='Gas' />
          <Picker.Item label='Clothes' value='Clothes' />
          <Picker.Item label='Misc' value='Misc' />
          <Picker.Item label='Errands' value='Errands' />
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
      formData.append('sub_key', this.state.submission_key);
      fetch(DOMAIN, {
        method: 'POST',
        body: formData,
      })
      .then((resp) => resp.json())
      .then((respJson) => {
        if (respJson.success == 'True'){
          ToastAndroid.show('Submission complete', ToastAndroid.SHORT)
          this.setState({
            item: '',
            price: '',
            category: 'Food',
          })
        } else {
          ToastAndroid.show('Fail, please try again', ToastAndroid.SHORT)
        }
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
