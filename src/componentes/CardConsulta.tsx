import { Text, Avatar, VStack } from "native-base"
import Botao from "./Botao"

interface CardProps {
  nome: string
  foto: string
  especialidade: string
  data?: string
  foiAtendido?: boolean
  foiAgendado?: boolean
}

const CardConsulta = ({
  nome,
  foto,
  especialidade,
  data,
  foiAgendado,
  foiAtendido,
}: CardProps) => {
  return (
    <VStack
      w={"100%"}
      bg={foiAtendido ? "blue.100" : "#fff"}
      p={5}
      borderRadius={"lg"}
      shadow={2}
      mb={5}
    >
      <VStack flexDir={"row"}>
        <Avatar
          source={{
            uri: foto,
          }}
          size={"lg"}
          shadow={2}
        />
        <VStack pl={4}>
          <Text bold fontSize={"md"}>
            {nome}
          </Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>

      <Botao mt={4}>
        {foiAgendado ? "Cancelar" : "Agendar consulta"}
      </Botao>
    </VStack>
  )
}

export default CardConsulta
