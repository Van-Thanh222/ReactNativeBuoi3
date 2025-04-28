import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
const Cha = () => {
  const [name, setName] = React.useState('Lê Văn Thành');
  const [age, setAge] = React.useState(20);
  const handleChange = (newName: string, newAge: number) => {
    setName(newName);
    setAge(newAge);
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          backgroundColor: 'pink',
          padding: 10,
          textAlign: 'center',
        }}>
        Cha
      </Text>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Nhập cha</Text>
      <Text>Nhập Tên: </Text>
      <TextInput
        placeholder="Nhập tên cha"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text>Nhập Tuổi: </Text>
      <TextInput
        placeholder="Nhập tuổi cha"
        value={age.toString()}
        onChangeText={text => setAge(Number(text))}
        keyboardType="numeric"
      />
      <Text style={{fontSize: 20, textAlign: 'center'}}>Hiển thị cha</Text>
      <Text>Tên :{name} </Text>
      <Text>Tuổi :{age} </Text>
      <Con name={name} age={age} handleChange={handleChange} />
    </View>
  );
};
type ConProps = {
  name: string;
  age: number;
  handleChange: (name: string, age: number) => void;
};
const Con = ({name, age, handleChange}: ConProps) => {
  const [newName, setNewName] = React.useState<string>(name);
  const [newAge, setNewAge] = React.useState<number>(age);
  const Click = () => {
    handleChange(newName, newAge);
  };
  React.useEffect(() => {
    setNewName(name);
    setNewAge(age);
  }, [name, age]);
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          backgroundColor: 'blue',
          padding: 10,
          color: 'white',
          textAlign: 'center',
        }}>
        Con
      </Text>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Hiển thị con</Text>
      <Text>Tên :{newName} </Text>
      <Text>Tuổi :{newAge} </Text>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Nhập tên,tuổi mới</Text>
      <Text>Nhập Tên mới: </Text>
      <TextInput
        placeholder="Nhập tên mới"
        value={newName}
        onChangeText={text => setNewName(text)}
      />
      <Text>Nhập Tuổi mới: </Text>
      <TextInput
        placeholder="Nhập tuổi mới"
        value={newAge?.toString()}
        onChangeText={text => setNewAge(Number(text))}
        keyboardType="numeric"
      />
      <Button title="nhấn" onPress={Click} />
    </View>
  );
};
export default Cha;

const styles = StyleSheet.create({});
