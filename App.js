import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [imageUri, setImageUri] = useState('https://static.vecteezy.com/system/resources/previews/005/005/840/non_2x/user-icon-in-trendy');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const pickImageGaleria = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);  
    }
  };

  const pickImageFoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); 
    }
  };

  const validateLogin = () => {
    if (username.trim() === '') {
      Alert.alert('Error', 'Por favor, ingrese un nombre de usuario.');
      return;
    }
    if (password.length < 8) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    Alert.alert('Éxito', 'Usuario registrado correctamente.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <TouchableOpacity style={styles.button2} onPress={pickImageGaleria}>
          <Text style={styles.buttonText}>Elegir de Galería</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={pickImageFoto}>
          <Text style={styles.buttonText}>Tomar Foto</Text>
        </TouchableOpacity>
        <Text style={styles.infoText}>Usuario: obligatorio</Text>
        <Text style={styles.infoText}>Contraseña: mínimo 8 caracteres, letras, números y símbolos especiales</Text>

        <View style={styles.subcontainer2}>
          <Text style={styles.subtitle}>Nombre de usuario:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Nombre"
            value={username}
            onChangeText={setUsername} 
          />
          <Text style={styles.subtitle}>Contraseña:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Contraseña" 
            secureTextEntry 
            value={password}
            onChangeText={setPassword} 
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={validateLogin}>
          <Text style={styles.buttonText}>ACEPTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center' },
  subcontainer: {
    borderColor: '#8294AC', backgroundColor: '#FFF', borderWidth: 2,
    alignItems: 'center', justifyContent: 'center', padding: 30, borderRadius: 10
  },
  subcontainer2: { marginTop: 15, marginBottom: 15 },
  title: { fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', color: '#000' },
  subtitle: { fontSize: 14, fontFamily: 'Roboto', color: '#333' },
  infoText: { fontSize: 12, color: '#666', marginTop: 5 },
  image: { height: 100, width: 100, borderRadius: 50, marginTop: 25, marginBottom: 15, borderColor: '#4C4C4C', borderWidth: 2 },
  input: {
    padding: 5, height: 40, width: 200, borderRadius: 5,
    backgroundColor: '#FFF', color: '#000', marginTop: 5, marginBottom: 10,
    borderColor: '#1975FE', borderWidth: 2
  },
  button: {
    height: 40, width: 100, backgroundColor: "#191970", borderRadius: 8,
    borderColor: '#5575FE', borderWidth: 1.5, justifyContent: "center", alignItems: 'center', marginTop: 10
  },
  button2: {
    height: 40, width: 150, backgroundColor: "#191970", borderRadius: 8,
    borderColor: '#5575FE', borderWidth: 1.5, justifyContent: "center", alignItems: 'center', marginTop: 10
  },
  buttonText: { color: "#FFF", fontSize: 14, textAlign: 'center' }
});

export default App;
