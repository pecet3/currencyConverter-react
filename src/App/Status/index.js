import { Container } from "./styled.js";

export const StatusLoading = ({ list }) => {
    return <Container list={list}> Proszę czekać, trwa ładowanie 😎. </Container>
};

export const StatusError = ({ list }) => {
    return (
        <Container error list={list}>
            Ups... wystąpiło coś nie tak 😪. Proszę sprawdź swoje połączenie z internetem.
            Jeśli jest prawidłowe, problem leży po naszej stronie.
        </Container>
    )
};
