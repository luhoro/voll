import { Divider, ScrollView, Text, VStack } from "native-base"
import CardConsulta from "../componentes/CardConsulta"
import Titulo from "../componentes/Titulo"
import Botao from "../componentes/Botao"

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
      <CardConsulta
        nome="Dr. Aliane Regina"
        especialidade="Dermatologista"
        foto="https://img.freepik.com/free-psd/portrait-businesswoman_23-2150116729.jpg"
        data="20/07/2024"
        foiAtendido
      />

      <CardConsulta
        nome="Dr. Miguel Amaral"
        especialidade="Angiologista"
        foto="https://t3.ftcdn.net/jpg/02/79/78/48/360_F_279784836_4eKMjfIfDtaICKmaSBAyft2Y43u5V76Q.jpg"
        data="05/07/2024"
        foiAtendido
      />

      <CardConsulta
        nome="Dr. Ana Lópes"
        especialidade="Tricologista"
        foto="https://as2.ftcdn.net/v2/jpg/02/38/52/23/1000_F_238522302_inLLf4hzc83NVFlfQUoC1TAEbYEN1nVa.jpg"
        data="13/06/2024"
        foiAtendido
      />
    </ScrollView>
  )
}

export default Consultas
