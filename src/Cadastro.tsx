import {
  Image,
  Text,
  VStack,
  Box,
  FormControl,
  Input,
  // Button,
  Link,
  Checkbox,
} from "native-base"
import { TouchableOpacity, Button  } from "react-native"
import Logo from "./assets/logo.png"
import Titulo from "./componentes/Titulo"
import EntradaTexto from "./componentes/EntradaTexto"
import Botao from "./componentes/Botao"
import { useState } from "react"

export const Cadastro = () => {
  const [numeroSessao, setNumeroSessao] = useState(0)

  const sessoes = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos",
      entradaTexto: [
        {
          id: 1,
          label: "Nome",
          placeholder: "Digite seu nome completo",
          type: "text",
        },
        {
          id: 2,
          label: "E-mail",
          placeholder: "Insira seu endereço de e-mail",
          type: "text",
        },
        {
          id: 3,
          label: "Crie uma senha",
          placeholder: "Insira sua senha",
          type: "password",
        },
        {
          id: 4,
          label: "Repita sua senha",
          placeholder: "Insira sua senha",
          type: "password",
        },
      ],
    },
    {
      id: 2,
      titulo: "Agora, mais alguns dados sobre você",
      entradaTexto: [
        {
          id: 1,
          label: "CEP",
          placeholder: "Insira seu CEP",
          type: "text",
        },
      ],
    },
    {
      id: 3,
      titulo: "Para finalizar, quais são os seus planos",
      checkbox: [
        {
          id: 1,
          value: "Sulamerica",
        },
        {
          id: 2,
          value: "Unimed",
        },
      ],
    },
  ]

  const alternarSessao = (opcao: "avancar" | "voltar") => {
    if (opcao === "avancar") {
      numeroSessao < sessoes.length - 1
        ? setNumeroSessao(numeroSessao + 1)
        : null
    }

    if (opcao === "voltar") {
      numeroSessao > 0 ? setNumeroSessao(numeroSessao - 1) : null
    }
  }

  return (
    <VStack flex={1} alignItems={"center"} p={5} justifyContent={""}>
      <Image source={Logo} alt="Logo Voll" />

      <Box mt={16}>
        <Titulo>{sessoes[numeroSessao].titulo}</Titulo>

        {sessoes[numeroSessao]?.entradaTexto?.map((item) => (
          <EntradaTexto
            key={item.id}
            label={item.label}
            placeholder={item.placeholder}
            type={item.type as "text" | "password"}
          />
        ))}
      </Box>

      <Box mt={16}>
        {sessoes[numeroSessao]?.checkbox?.map((item) => (
          <Checkbox key={item.id} value={item.value}>
            {item.value}
          </Checkbox>
        ))}
      </Box>

      {numeroSessao > 0 && (
        <>
          <Botao
            onPress={() => alternarSessao("voltar")}
            bgColor={"gray.500"}
            mb={-6}
          >
            Voltar
          </Botao>
        </>
      )}

      <Botao onPress={() => alternarSessao("avancar")}>Avançar</Botao>
    </VStack>
  )
}

export default Cadastro
