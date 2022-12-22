import {Container} from "./styled.js";

const Main = (props) => (
    <Container>
        {props.children}
    </Container>
);

export default Main;