import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PurchaseForm from './src/components/PurchseForm'
import Config from 'react-native-config'

console.log(Config.MY_NAME);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/julius.jpg')} style={styles.terryCrews}/>
        <Text style={styles.terryCrews}>"You don't pay taxes - they take taxes."</Text>
        <PurchaseForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  terryCrews: {
    fontSize: 8,
    marginBottom: 40,
  }
});
