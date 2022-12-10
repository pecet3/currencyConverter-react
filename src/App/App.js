import Header from "./Header"
import Section from "./Section"
import Main from "./Main"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"
import { useState } from "react"
import currencies from "./currencies.js"
import List from "./List"
import RatesButton from "./RatesButton"

function App() {
  const [typeCurrency, setTypeCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [intoPLN, setIntoPLN] = useState(true);
  const [showRates, setShowRates] = useState(false);



  return (
    <>
      <Header title="Kalkulator walut" />
      <Main>
        <RatesButton
          showRates={showRates}
          setShowRates={setShowRates}
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
