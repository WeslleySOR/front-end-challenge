import { Container } from "./styles";

interface TextFieldProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export function TextField({value, setValue}: TextFieldProps) {
    return(
        <Container>
            <span>Número da placa:</span>
            <input type="text" placeholder="AAA-0000" value={value} onChange={e => setValue(e.target.value)}/>
        </Container>
    )
}