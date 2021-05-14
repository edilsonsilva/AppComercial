import * as React from "react";
import { View, Text, TextInput, Picker } from "react-native";
import { styleFormat } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

let us = "";
let sh = "";

let nc = "";
let cf = "";
let sx = "";
let iu = "";
let ie = "";
let ic = "";

let lg = "";
let nr = "";
let cp = "";
let br = "";
let ce = "";

let tl = "";
let em = "";

export default function Cadastro() {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const [nomecliente, setNomeCliente] = React.useState("");
  const [cpf, setCPF] = React.useState("");
  const [sexo, setSexo] = React.useState("");

  const [logradouro, setLogradouro] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [complemento, setComplemento] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cep, setCEP] = React.useState("");

  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <View>
      <ScrollView horizontal={false}>
        {/* Área do cadastro de usuário */}
        <View>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Usuário"
            value={usuario}
            keyboardType="email-address"
            onChangeText={(value) => setUsuario(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Senha"
            value={senha}
            keyboardType="default"
            secureTextEntry
            onChangeText={(value) => setSenha(value)}
          />
        </View>
        {/* Fim da área de cadastro do usuário */}

        {/* Área do cadastro do cliente */}
        <View>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Cliente"
            value={nomecliente}
            keyboardType="default"
            onChangeText={(value) => setNomeCliente(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="CPF"
            value={cpf}
            keyboardType="number-pad"
            onChangeText={(value) => setCPF(value)}
          />
        </View>

        {/* Fim da área de cadastro do cliente */}

        {/* Área do cadastro do endereço */}
        <View>
          <TextInput
            style={styleFormat.input}
            placeholder="Logradouro"
            value={logradouro}
            keyboardType="default"
            onChangeText={(value) => setLogradouro(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Número"
            value={numero}
            keyboardType="default"
            onChangeText={(value) => setNumero(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Complemento"
            value={complemento}
            keyboardType="default"
            onChangeText={(value) => setComplemento(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="Bairro"
            value={bairro}
            keyboardType="default"
            onChangeText={(value) => setBairro(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="CEP"
            value={cep}
            keyboardType="number-pad"
            onChangeText={(value) => setCEP(value)}
          />
        </View>
        {/* Fim da área de cadastro do endereço */}

        {/* Área do cadastro do contato */}
        <View>
          <TextInput
            style={styleFormat.input}
            placeholder="Telefone"
            value={telefone}
            keyboardType="number-pad"
            onChangeText={(value) => setTelefone(value)}
          />

          <TextInput
            style={styleFormat.input}
            placeholder="E-Mail"
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        {/* Fim da área de cadastro do contato */}

        <TouchableOpacity style={styleFormat.btnCadastro}>
          <Text style={styleFormat.txtCadastro}> Cadastrar </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
