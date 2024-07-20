import {
  Image,
  Text,
  VStack,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base"
import { TouchableOpacity } from "react-native"
import Logo from "./assets/logo.png"
import Titulo from "./componentes/Titulo"
import EntradaTexto from "./componentes/EntradaTexto"
import Botao from "./componentes/Botao"

export const Login = ({ navigation }) => {
  return (
    <VStack flex={1} alignItems={"center"} p={5} justifyContent={"center"}>
      <Image source={Logo} alt="Logo Voll" />

      <Box mt={16}>
        <Titulo>Faça login em sua conta</Titulo>

        <EntradaTexto
          label="E-mail"
          placeholder="Insira seu endereço de e-mail"
          type="text"
        />

        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          type="password"
        />
      </Box>

      <Botao onPress={()=> navigation.navigate('Tabs')
      }>Entrar</Botao>

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
