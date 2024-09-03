import api from "./api"

export const buscarEspecialistaPorEstado = async (
  estado: string,
  especialidade: string
) => {
  try {
    const resultado = await api.get("/especialista/busca", {
      params: {
        estado,
        especialidade,
      },
    })

    return resultado.data
  } catch (error) {
    throw new Error(error)
  }
}
