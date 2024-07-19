import { Button, IButtonProps } from "native-base"
import { ReactNode } from "react"

interface BotaoProps extends IButtonProps {
  children: ReactNode
  autoSize?: boolean
  color?: string
}

const Botao = ({ children, autoSize = false, color, ...rest }: BotaoProps) => {
  return (
    <Button
      w={autoSize ? "auto" : "100%"}
      bg={color || "blue.800"}
      mt={10}
      borderRadius="lg"
      _text={{ color: "white" }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default Botao
