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

  const [fromPLN, setFromPLN] = useState(true);
  const [intoPLN, setIntoPLN] = useState(false);


  const onSelectChange = ({target}) => {setTypeCurrency(target.value)};

  const onInputChange = ({target})  => {setFirstAmount(target.value)};

  const onRadioChange = () => {
    setIntoPLN(intoPLN => !intoPLN) 
    setFromPLN(fromPLN => !fromPLN)
  };

  const recognizeThenInit = () => {
    const rateEUR = 4.69;
    const rateGBP = 5.44;
    const rateUSD = 4.48;

    if (intoPLN) {
      switch (typeCurrency) {
        case "USD":
          return calculateIntoPLN(firstAmount, rateUSD);
        case "EUR":
          return calculateIntoPLN(firstAmount, rateEUR);
        case "GBP":
          return calculateIntoPLN(firstAmount, rateGBP);
      }
    } else if (fromPLN) {
      switch (typeCurrency) {
        case "USD":
          return calculateFromPLN(firstAmount, rateUSD);
        case "EUR":
          return calculateFromPLN(firstAmount, rateEUR);
        case "GBP":
          return calculateFromPLN(firstAmount, rateGBP);
      }
    }
  };

  const calculateIntoPLN = (amount, rate) => {
    setFinalAmount(amount * rate)
  };

  const calculateFromPLN = (amount, rate) => {
    setFinalAmount(amount / rate)
  };




  const onChange = (event) => {
    event.preventDefault();
    recognizeThenInit();
  };
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
        typeCurrency= {typeCurrency}
        onSelectChange= {onSelectChange}
        onChange= {onChange}
        onInputChange= {onInputChange}
        firstAmount = {firstAmount}
        onRadioChange= {onRadioChange}
        fromPLN= {fromPLN}
        intoPLN= {intoPLN}
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
