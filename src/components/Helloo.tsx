import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
type Props = {
  name: string;
  age: number;
};
const Helloo = ({name, age}: Props) => {
  const [Ten, setTen] = React.useState(name);
  const [Tuoi, setTuoi] = React.useState(age);
  const ClickButton = () => {
    setTen('Nguyễn Văn Thành Đẹp Zai');
    setTuoi(20);
  };
  return (
    <View>
      <Text style={styles.title}>
        Chào Bạn : {name} ,Tuổi {age}
      </Text>
      <Text style={styles.title2}>
        Chào Bạn : {Ten} ,Tuổi {Tuoi}
      </Text>
      <Text>
        <Button title="Nhấn" onPress={ClickButton} />
      </Text>
    </View>
  );
};

export default Helloo;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
  title2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
  },
});
////////////////////////

// import {Button, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// type Props = {
//   name: string;
//   age: number;
// };
// const Helloo = ({name, age}: Props) => {
//   return (
//     <View>
//       <Text style={styles.title}>
//         Chào Bạn : {name} ,Tuổi {age}
//       </Text>
//     </View>
//   );
// };

// export default Helloo;

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
//   title2: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'red',
//   },
// });

/////////////////////
// import {Button, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const Helloo = () => {
//   const [Ten, setTen] = React.useState('Lê Văn Thành');
//   const [Tuoi, setTuoi] = React.useState(20);
//   const ClickButton = () => {
//     setTen('Lê Văn Thành Đẹp Zai');
//     setTuoi(20);
//   };
//   return (
//     <View>
//       <Text style={styles.title2}>
//         Chào Bạn : {Ten} ,Tuổi {Tuoi}
//       </Text>
//       <Text>
//         <Button title="Nhấn" onPress={ClickButton} />
//       </Text>
//     </View>
//   );
// };

// export default Helloo;

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
//   title2: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'red',
//   },
// });
