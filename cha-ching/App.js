import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PurchaseForm from './src/components/PurchseForm'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/julius.jpg')} />
        <Text style={styles.header}>"You don't pay taxes - they take taxes."</Text>
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
});