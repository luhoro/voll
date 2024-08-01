import { VStack, Box, ScrollView } from "native-base"
import Botao from "../componentes/Botao"
import CardConsulta from "../componentes/CardConsulta"
import EntradaTexto from "../componentes/EntradaTexto"
import Titulo from "../componentes/Titulo"
import { CardsConsulta } from "../utils/mock"

const Explorar = () => {
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
          <EntradaTexto placeholder="Digite a especialidade" type="text" />
          <EntradaTexto placeholder="Digite sua localização" type="text" />
          <Botao mt={3} mb={2}>
            Buscar
          </Botao>
        </Box>

        <Titulo alignSelf={"center"} color={"blue.500"} mt={5}>
          Resultado da busca
        </Titulo>

        <VStack flex={1} w={"100%"} alignItems={"flex-start"}>
          <CardConsulta
            nome="Dr. Rodrigo Matos"
            especialidade="Cardiologista"
            foto="https://www.advancy.com/wp-content/uploads/2017/06/portrait-defaut.jpg"
          />

          {CardsConsulta.map((card) => (
            <CardConsulta
              nome={card.nome}
              especialidade={card.especialidade}
              foto={card.foto}
              key={card.id}
            />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default Explorar
