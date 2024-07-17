import { Button } from "native-base"
import { ReactNode } from "react"

interface BotaoProps {
  children: ReactNode
}

const Botao = ({ children, ...rest }: BotaoProps) => {
  return (
    <Button w={"100%"} bg={"blue.800"} mt={10} borderRadius={"lg"} {...rest}>
      {children}
    </Button>
  )
}

export default Botao
