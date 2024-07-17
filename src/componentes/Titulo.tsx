import { ITextProps, Text } from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps{
  children: ReactNode
}

const Titulo = ({children, ...rest}: TituloProps) => {
  return (
    <Text
      fontSize={"2xl"}
      fontWeight={"bold"}
      color={"gray.500"}
      textAlign={"center"}
      mb={4}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default Titulo
