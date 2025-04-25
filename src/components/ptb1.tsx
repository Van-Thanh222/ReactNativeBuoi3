import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Ptb1 = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [ketqua, setKetqua] = useState('');

  const handlePress = () => {
    const soA = parseFloat(a);
    const soB = parseFloat(b);

    if (isNaN(soA) || isNaN(soB)) {
      setKetqua(' Vui lòng nhập số hợp lệ!');
      return;
    }

    if (soA !== 0) {
      setKetqua(` Nghiệm x = ${(-soB / soA).toFixed(2)}`);
    } else if (soA === 0 && soB === 0) {
      setKetqua('♾️ Vô số nghiệm');
    } else {
      setKetqua(' Vô nghiệm');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Giải phương trình bậc 1</Text>

      <View style={styles.card}>
        <TextInput
          placeholder=" Nhập hệ số a"
          keyboardType="numeric"
          style={styles.input}
          value={a}
          onChangeText={setA}
        />
        <TextInput
          placeholder=" Nhập hệ số b"
          keyboardType="numeric"
          style={styles.input}
          value={b}
          onChangeText={setB}
        />

        <View style={styles.buttonWrapper}>
          <Button title="Giải ngay" color="#27ae60" onPress={handlePress} />
        </View>

        {ketqua !== '' && (
          <Text style={styles.resultText}> Kết quả: {ketqua}</Text>
        )}
      </View>
    </View>
  );
};

export default Ptb1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff9fb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    left: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#130f40',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#95afc0',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#f5f6fa',
  },
  buttonWrapper: {
    marginVertical: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3436',
    textAlign: 'center',
  },
});
