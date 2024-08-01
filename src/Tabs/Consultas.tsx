import { Divider, ScrollView, Text, VStack } from "native-base"
import CardConsulta from "../componentes/CardConsulta"
import Titulo from "../componentes/Titulo"
import Botao from "../componentes/Botao"
import { CardsConsulta } from "../utils/mock"

const Consultas = () => {
  return (
    <ScrollView p={5}>
      <Titulo color={"blue.500"}>Minhas consultas</Titulo>

      <Botao mt={2} mb={5}>
        Agendar nova consulta
      </Botao>

      <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"}>
        Próximas consultas
      </Titulo>
      <CardConsulta
        nome="Dr. Rodrigo Matos"
        especialidade="Cardiologista"
        foto="https://www.advancy.com/wp-content/uploads/2017/06/portrait-defaut.jpg"
        data="20/10/2024"
        foiAgendado
      />

      <Divider mt={2} mb={5} />

      <Titulo color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"}>
        Consultas passadas
      </Titulo>

      {CardsConsulta.map((card) => (
        <CardConsulta
          nome={card.nome}
          especialidade={card.especialidade}
          foto={card.foto}
          data={card.data}
          key={card.id}
          foiAtendido
        />
      ))}
    </ScrollView>
  )
}

export default Consultas
