import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styleFormat } from "./css/styles";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
const pilha = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <pilha.Navigator initialRoute="TelaInicial">
        <pilha.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <pilha.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: "center",
          }}
        />
        <pilha.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerTitleAlign: "center" }}
        />
      </pilha.Navigator>
    </NavigationContainer>
  );
}

function TelaInicial({ navigation }) {
  return (
    <View style={styleFormat.container}>
      <Image
        source={{
          uri:
            "https://i.pinimg.com/originals/ee/59/a6/ee59a6254c2c9b52c7177d0cfe7e36c5.png",
        }}
        style={styleFormat.logo}
      />

      <View style={styleFormat.btnApp}>
        <TouchableOpacity
          style={styleFormat.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign name="login" size={30} color="black" />
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleFormat.btn}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <AntDesign name="adduser" size={30} color="black" />
          <Text>Cadastro</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
