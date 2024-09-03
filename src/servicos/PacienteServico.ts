import { Paciente } from "../interfaces/Paciente"
import api from "./api"

export const cadastrarPaciente = async (paciente: Paciente) => {
  if (!paciente) return null

  try {
    const resultado = await api.post("/paciente", paciente)
    console.log(resultado.data)
    return resultado.data
    
  } catch (error) {
    throw new Error(error)
  }
}

export const pegarDadosPaciente = async (id: string) => {
  try {
    const resultado = await api.get(`/paciente/${id}`)
    return resultado.data
    
  } catch(error) {
    throw new Error(error)
  }
}