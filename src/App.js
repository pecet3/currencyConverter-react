import Header from "./Header"
import Section from "./Section"
import Main from "./Main"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"
import {useState} from "react" 
import currencies from "./currencies.js"

function App() {
  const [typeCurrency, setTypeCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
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
        amount = {amount}
        typeCurrency= {typeCurrency}
        intoPLN= {intoPLN}
        setTypeCurrency={setTypeCurrency}
        setAmount={setAmount}
        setResult={setResult}
        setIntoPLN={setIntoPLN}
    /> }
    />
    {result !== undefined && (
    <Section 
    content = 
    {<Result result = {result} />}
    />)}
    
    </Main>
    <Footer/>
    </>


  );
}

export default App;
