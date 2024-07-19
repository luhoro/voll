import { Image, Text, Box, Checkbox, ScrollView } from "native-base"
import Logo from "./assets/logo.png"
import Titulo from "./componentes/Titulo"
import EntradaTexto from "./componentes/EntradaTexto"
import Botao from "./componentes/Botao"
import { useState } from "react"
import Sessoes from "./utils/CadastroEntradaTexto"

export const Cadastro = () => {
  const [numeroSessao, setNumeroSessao] = useState(0)

  const alternarSessao = (opcao: "avancar" | "voltar") => {
    if (opcao === "avancar") {
      numeroSessao < Sessoes.length - 1
        ? setNumeroSessao(numeroSessao + 1)
        : null
    }

    if (opcao === "voltar") {
      numeroSessao > 0 ? setNumeroSessao(numeroSessao - 1) : null
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf={"center"} />

      <Box mt={16}>
        <Titulo>{Sessoes[numeroSessao].titulo}</Titulo>

        {Sessoes[numeroSessao]?.entradaTexto?.map((item) => (
          <EntradaTexto
            key={item.id}
            label={item.label}
            placeholder={item.placeholder}
            type={item.type as "text" | "password"}
          />
        ))}

        {Sessoes[numeroSessao].checkbox && (
          <Text color={"blue.800"} fontWeight={"bold"} fontSize={"md"} my={2}>
            Selecione o plano:
          </Text>
        )}

        {Sessoes[numeroSessao]?.checkbox?.map((item) => (
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

      <Botao onPress={() => alternarSessao("avancar")} mb={10}>
        Avançar
      </Botao>
    </ScrollView>
  )
}

export default Cadastro
