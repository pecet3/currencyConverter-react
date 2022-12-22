import { Container, Content } from "./styled.js";

const Header = ({ title }) => (
    <Container>
        <Content>{title}</Content>
    </Container>
);

export default Header;