import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../reduxtoolkit/store';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../reduxtoolkit/slices/counterSlice';

const HomeScreen = () => {
  const count = useSelector((state: RootState) => state.appData.value);

  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState(0);
  //   const [counterValue, setCounterValue] = useState(0);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{marginVertical: 10, fontSize: 18, color: '#000'}}>
        {count}
      </Text>
      <TextInput
        value={textValue}
        onChangeText={text => setTextValue(text)}
        placeholder="Count"
        style={{
          borderRadius: 2,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      />

      <View style={{marginTop: 10}}>
        <Button
          title="SUBMIT VALUE"
          onPress={() => dispatch(incrementByAmount(Number(textValue)))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          width: '60%',
          justifyContent: 'space-between',
        }}>
        <Button title="INCREMENT" onPress={() => dispatch(increment())} />
        <Button title="DECREMENT" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
