import Header from "./Header"
import Section from "./Section"
import Main from "./Main"
import Form from "./Form"
import FinalAmount from "./FinalAmount"
import Footer from "./Footer"

function App() {
  return (
    <>
    <Header title="Kalkulator walut"/>
    <Main>
    <Section content = "Witaj w prostym kalkulatorze walut stworzonym na potrzeby nauki
        frontendu. Z czasem planuję go rozwijać dodając kolejne waluty oraz
        integrację z API Narodowego Banku Polskiego. Baw się dobrze i mam
        nadzieję, że podawanę kwoty będą wysokie 😎. "/>

    <Section content = {<Form /> }/>
    <Section content = {<FinalAmount />} extraClass="section--finalAmount" />
    </Main>
    <Footer />
    </>


  );
}

export default App;
