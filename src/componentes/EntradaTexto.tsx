import { FormControl, Input, ITextProps } from "native-base"

interface EntradaTextoProps extends ITextProps {
  label?: string
  placeholder: string
  type: "text" | "password"
}

const EntradaTexto = ({
  label,
  placeholder,
  type,
  ...rest
}: EntradaTextoProps) => {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}

      <Input
        type={type}
        placeholder={placeholder}
        size={"lg"}
        w={"100%"}
        borderRadius={"lg"}
        backgroundColor={"gray.100"}
        shadow={3}
        {...rest}
      />
    </FormControl>
  )
}

export default EntradaTexto
