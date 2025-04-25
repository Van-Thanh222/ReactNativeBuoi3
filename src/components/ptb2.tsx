import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const HelloName = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const sayHello = () => {
    if (name.trim() === '') {
      setGreeting('Vui lòng nhập tên!');
    } else {
      setGreeting(`Xin chào ${name}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập tên của bạn</Text>
      <TextInput
        style={styles.input}
        placeholder="Ví dụ: Nguyễn Văn A"
        value={name}
        onChangeText={text => {
          console.log('Tên nhập:', text); // kiểm tra nếu lỗi
          setName(text);
        }}
        autoCorrect={false}
        autoCapitalize="words" // viết hoa đầu từ (Tên)
        keyboardType="default"
      />
      <Button title="Chào bạn" onPress={sayHello} />
      {greeting !== '' && <Text style={styles.result}>{greeting}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '600',
    color: '#1abc9c',
    textAlign: 'center',
  },
});

export default HelloName;
