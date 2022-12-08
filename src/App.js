import Header from "./Header"
import Section from "./Section"
import Main from "./Main"
import Form from "./Form"
import FinalAmount from "./FinalAmount"
import Footer from "./Footer"
import {useState} from "react" 
import currencies from "./currencies.js"

function App() {
  const [typeCurrency, setTypeCurrency] = useState(currencies[0].short);
  const [firstAmount, setFirstAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [intoPLN, setIntoPLN] = useState(true);



  return (
    <>
    <Header title="Kalkulator walut"/>
    <Main>
    <Section content = "Witaj w prostym kalkulatorze walut stworzonym na potrzeby nauki frontendu.
        Z czasem planuję go rozwijać dodając kolejne waluty oraz
        integrację z API Narodowego Banku Polskiego. Baw się dobrze i mam
        nadzieję, że podawanę kwoty będą wysokie 😎."/>

    <Section 
    content = 
      {<Form 
        firstAmount = {firstAmount}
        typeCurrency= {typeCurrency}
        intoPLN= {intoPLN}
        setTypeCurrency={setTypeCurrency}
        setFirstAmount={setFirstAmount}
        setFinalAmount={setFinalAmount}
        setIntoPLN={setIntoPLN}
    /> }
    />
    <Section 
    content = 
    {<FinalAmount
      firstAmount = {firstAmount}
      typeCurrency= {typeCurrency}
      intoPLN= {intoPLN}
      finalAmount = {finalAmount}
       />}
    extraClass="section--finalAmount"
    />
    </Main>
    <Footer/>
    </>


  );
}

export default App;
