import {
  Image,
  Text,
  VStack,
  Box,
  Link,
  useToast
} from "native-base"
import { TouchableOpacity } from "react-native"
import Logo from "./assets/logo.png"
import Titulo from "./componentes/Titulo"
import EntradaTexto from "./componentes/EntradaTexto"
import Botao from "./componentes/Botao"
import { useState } from "react"
import { fazerLogin } from "./servicos/AutenticacaoServico"

export const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const toast = useToast()

  const login = async () => {
    const resultado = await fazerLogin(email, senha)

    if (resultado) {
      navigation.replace("Tabs")
    } else {
      toast.show({
        title: "Erro no login",
        description: "o email ou senha não conferem",
        backgroundColor: "red.500"
      })
    }
  }

  return (
    <VStack flex={1} alignItems={"center"} p={5} justifyContent={"center"}>
      <Image source={Logo} alt="Logo Voll" />

      <Box mt={16}>
        <Titulo>Faça login em sua conta</Titulo>

        <EntradaTexto
          label="E-mail"
          placeholder="Insira seu endereço de e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
        />
      </Box>

      <Botao onPress={login}>Entrar</Botao>

      <Link href="https://google.com" mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={10}>
        <Text>Ainda não tem conta? </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color={"blue.500"}>Faça o seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  )
}

export default Login
