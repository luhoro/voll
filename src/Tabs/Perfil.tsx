import { Text, VStack, ScrollView, Avatar, Divider } from "native-base"
import Titulo from "../componentes/Titulo"

const Perfil = () => {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems={"center"} p={5}>
        <Titulo color={"blue.500"} >Meu Perfil</Titulo>
        <Avatar
          source={{
            uri: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp",
          }}
          mt={5}
          size={"xl"}
        />

        <Titulo color={"blue.500"}>Informações pessoais</Titulo>
        <Titulo fontSize={'lg'}>Mathias Andrade</Titulo>
        <Text fontSize={"md"} color={"gray.500"}>21/04/1995</Text>
        <Text fontSize={"md"} color={"gray.500"}>Belo Horizonte - MG</Text>

        <Divider mt={5} />

        <Titulo color={"blue.500"}>Histórico médico</Titulo>
        <Text fontSize={"md"} color={"gray.500"}>Bronquite</Text>
        <Text fontSize={"md"} color={"gray.500"}>Pancreatite</Text>
      </VStack>
    </ScrollView>
  )
}

export default Perfil
