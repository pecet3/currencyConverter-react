import Header from "./Header"
import Section from "./Section"
import Main from "./Main"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"
import { useState } from "react"
import currencies from "./currencies.js"
import List from "./List"
import ButtonAndDate from "./ButtonAndDate"
import Date from "./Clock"

function App() {
  const [typeCurrency, setTypeCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState();
  const [intoPLN, setIntoPLN] = useState(true);
  const [showRates, setShowRates] = useState(false);



  return (
    <>
      <Header title="Kalkulator walut" />
      <Main>
        <ButtonAndDate
          showRates={showRates}
          setShowRates={setShowRates}
          Clock= {<Date />}
        />
        <Section
          content={showRates ? <List /> : ""}
        />
        <Section
          content=
          {<Form
            amount={amount}
            typeCurrency={typeCurrency}
            intoPLN={intoPLN}
            setTypeCurrency={setTypeCurrency}
            setAmount={setAmount}
            setResult={setResult}
            setIntoPLN={setIntoPLN}
          />}
        />
        {result !== undefined && (
          <Section
            content=
            {<Result result={result} />}
          />)}

      </Main>
      <Footer />
    </>


  );
}

export default App;
