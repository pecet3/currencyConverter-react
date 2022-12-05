import Header from "./Header"
import Section from "./Section"
import Main from "./Main"
import Form from "./Form"
import FinalAmount from "./FinalAmount"
import Footer from "./Footer"
import {useState} from "react" 

function App() {
  const [typeCurrency, setTypeCurrency] = useState("EUR");
  const [firstAmount, setFirstAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);


  const onSelectChange = ({target}) => {setTypeCurrency(target.value)};

  const onInputChange = ({target})  => {setFirstAmount(target.value);};


  const onClick = () => {
    console.log(typeCurrency)
  };
  return (
    <>
    <Header title="Kalkulator walut"/>
    <Main>
    <Section content = "Witaj w prostym kalkulatorze walut stworzonym na potrzeby nauki
        frontendu. Z czasem planuję go rozwijać dodając kolejne waluty oraz
        integrację z API Narodowego Banku Polskiego. Baw się dobrze i mam
        nadzieję, że podawanę kwoty będą wysokie 😎. "/>

    <Section 
    content = {<Form 
    typeCurrency={typeCurrency}
    onSelectChange={onSelectChange}
    onClick={onClick}
    onInputChange={onInputChange}
    firstAmount = {firstAmount}
    /> }
    />
    <Section 
    content = 
    {<FinalAmount
      firstAmount = {firstAmount}
      typeCurrency={typeCurrency}

       />}
    extraClass="section--finalAmount"
    />
    </Main>
    <Footer/>
    </>


  );
}

export default App;
