import { Image, Text, Box, Checkbox, ScrollView, useToast } from "native-base"
import Logo from "./assets/logo.png"
import Titulo from "./componentes/Titulo"
import EntradaTexto from "./componentes/EntradaTexto"
import Botao from "./componentes/Botao"
import { useState } from "react"
import secoes from "./utils/CadastroEntradaTexto"
import { cadastrarPaciente } from "./servicos/PacienteServico"

export const Cadastro = ({ navigation }) => {
  const [numSecao, setNumSecao] = useState(0)
  const [dados, setDados] = useState({} as any)
  const [planos, setPlanos] = useState([] as number[])
  const toast = useToast()

  const alternarSecao = (opcao: "avancar" | "voltar") => {
    if (opcao === "avancar") {
      if (numSecao < secoes.length - 1) {
        setNumSecao(numSecao + 1)
      } else {
        console.log(dados)
        cadastrar()
      }
    }

    if (opcao === "voltar") {
      numSecao > 0 ? setNumSecao(numSecao - 1) : null
    }
  }

  const atualizarDados = (id: string, valor: string) => {
    setDados({ ...dados, [id]: valor })
  }

  async function cadastrar() {
    const resultado = await cadastrarPaciente({
      cpf: dados.cpf, //precisa ser um cpf existente
      nome: dados.nome,
      email: dados.email,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        estado: dados.estado,
        complemento: dados.complemento, //é obrigatório
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: dados.imagem,
    })

    if (resultado) {
      toast.show({
        title: "Cadastro realizado com sucesso",
        description: "Você já pode fazer login",
        backgroundColor: "green.500",
      })
      navigation.replace("Login")
    } else {
      toast.show({
        title: "Erro ao cadastrar",
        description: "Verifique os dados e tente novamente",
        backgroundColor: "red.500",
      })
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf={"center"} mt={10} />

      <Box mt={16}>
        <Titulo>{secoes[numSecao].titulo}</Titulo>

        <Box>
          {secoes[numSecao]?.entradaTexto?.map((item) => (
            <EntradaTexto
              key={item.id}
              label={item.label}
              placeholder={item.placeholder}
              secureTextEntry={item.secureTextEntry}
              value={dados[item.name]}
              onChangeText={(text) => atualizarDados(item.name, text)}
            />
          ))}
        </Box>

        <Box>
          {secoes[numSecao]?.checkbox && (
            <Text color={"blue.800"} fontWeight={"bold"} fontSize={"md"} my={2}>
              Selecione o plano:
            </Text>
          )}

          {secoes[numSecao]?.checkbox?.map((checkbox) => (
            <Checkbox
              key={checkbox.id}
              value={checkbox.value}
              onChange={() => {
                setPlanos((planosAnteriores) => {
                  if (planosAnteriores.includes(checkbox.id)) {
                    return planosAnteriores.filter((id) => id !== checkbox.id)
                  }
                  return [...planosAnteriores, checkbox.id]
                })
              }}
              isChecked={planos.includes(checkbox.id)}
            >
              {checkbox.value}
            </Checkbox>
          ))}
        </Box>
      </Box>

      {numSecao > 0 && (
        <>
          <Botao
            onPress={() => alternarSecao("voltar")}
            bgColor={"gray.500"}
            mb={-6}
          >
            Voltar
          </Botao>
        </>
      )}

      <Botao onPress={() => alternarSecao("avancar")} mb={10}>
        {numSecao === 2 ? "Finalizar cadastro" : "Avançar"}
      </Botao>
    </ScrollView>
  )
}

export default Cadastro
