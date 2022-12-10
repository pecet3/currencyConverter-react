import Header from "./Header"
import Section from "./Section"
import Main from "./Main"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"
import { useState } from "react"
import currencies from "./currencies.js"
import List from "./List"

function App() {
  const [typeCurrency, setTypeCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [intoPLN, setIntoPLN] = useState(true);



  return (
    <>
      <Header title="Kalkulator walut" />
      <Main>
        <Section
          content={<List/>}
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
