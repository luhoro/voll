import { VStack, Box, ScrollView } from "native-base"
import Botao from "../componentes/Botao"
import CardConsulta from "../componentes/CardConsulta"
import EntradaTexto from "../componentes/EntradaTexto"
import Titulo from "../componentes/Titulo"
import { CardsConsulta } from "../utils/mock"
import { useState } from "react"
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico"

interface Especialista {
  nome: string
  imagem: string
  especialidade: string
}

const Explorar = () => {
  const [estado, setEstado] = useState("")
  const [especialidade, setEspecialidade] = useState("")
  const [resultadoBusca, setResultadoBusca] = useState([])

  const buscar = async () => {
    if(!estado || !especialidade) return null

    const resultado = await buscarEspecialistaPorEstado(estado, especialidade)

    if(resultado) {
      setResultadoBusca(resultado)
      console.log(resultadoBusca)
    }
  }

  return (
    <ScrollView flex={1} bgColor={"white"}>
      <VStack
        flex={1}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        p={5}
      >
        <Box
          w={"100%"}
          borderRadius={"lg"}
          p={3}
          mt={5}
          bgColor={"#fff"}
          shadow={"1"}
          borderRightRadius={"md"}
        >
          <EntradaTexto
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />

          <EntradaTexto placeholder="Digite sua localização" value={estado} onChangeText={setEstado}/>

          <Botao mt={3} mb={2} onPress={buscar}>
            Buscar
          </Botao>
        </Box>

        <Titulo alignSelf={"center"} color={"blue.500"} mt={5}>
          Resultado da busca
        </Titulo>

        <VStack flex={1} w={"100%"} alignItems={"flex-start"}>
          {resultadoBusca?.map((especialista: Especialista, index) => (
            <CardConsulta
              nome={especialista.nome}
              especialidade={especialista.especialidade}
              foto={especialista.imagem}
              key={index}
            />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default Explorar
