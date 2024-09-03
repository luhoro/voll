import { Text, VStack, ScrollView, Avatar, Divider, Image } from "native-base"
import Titulo from "../componentes/Titulo"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { pegarDadosPaciente } from "../servicos/PacienteServico"
import { Paciente } from "../interfaces/Paciente"
import Botao from "../componentes/Botao"

const Perfil = ({ navigation }: any) => {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)

  useEffect(() => {
    const dadosPaciente = async () => {
      const pacienteId = await AsyncStorage.getItem("pacienteId")

      if (!pacienteId) return null
      const resultado = await pegarDadosPaciente(pacienteId)

      if (resultado) {
        setDadosPaciente(resultado)
      }
    }
    dadosPaciente()
  }, [])

  const deslogar = () => {
    AsyncStorage.removeItem("token")
    AsyncStorage.removeItem("pacienteId")

    navigation.replace("Login")
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} p={5}>
        <Titulo color={"blue.500"}>Meu Perfil</Titulo>
        <Avatar size="xl" source={{ uri: dadosPaciente?.imagem }} mt={5} />
        {/* <Avatar size="xl" source={{ uri: "https://github.com/luhoro.png" }} mt={5} /> */}

        <Titulo color={"blue.500"}>Informações pessoais</Titulo>
        <Titulo fontSize={"lg"}>{dadosPaciente.nome}</Titulo>
        <Text fontSize={"md"} color={"gray.500"}>
          {dadosPaciente?.email}
        </Text>
        <Text fontSize={"md"} color={"gray.500"}>
          {dadosPaciente?.endereco?.estado}
        </Text>

        <Divider mt={5} />

        <Titulo color={"blue.500"}>Planos de saúde</Titulo>
        {dadosPaciente?.planosSaude?.map((plano, index) => (
          <Text key={index} fontSize={"md"} color={"gray.500"}>
            {plano}
          </Text>
        ))}

        {!dadosPaciente.planosSaude && (
          <Text fontSize={"md"} color={"gray.500"}>
            Você não possui um plano!
          </Text>
        )}

        <Botao onPress={deslogar}>Deslogar</Botao>
      </VStack>
    </ScrollView>
  )
}

export default Perfil
