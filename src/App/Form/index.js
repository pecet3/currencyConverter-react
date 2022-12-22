import { useState } from "react";
import {
  StyledForm,
  Legend,
  LabelText,
  Fieldset,
  Input,
  Container,
  DataInfo,
  Button,
  Label,
  RadioElement,
} from "./styled.js";
import currencies from "../currencies.js";

const Form = ({ amount, typeCurrency, intoPLN, setTypeCurrency, setAmount, setResult, setIntoPLN }) => {

  const [fromPLN, setFromPLN] = useState(false);


  const onSelectChange = ({ target }) => { setTypeCurrency(target.value) };

  const onInputChange = ({ target }) => {
    setAmount(target.value)
  };

  const onRadioChange = () => {
    setIntoPLN(intoPLN => !intoPLN)
    setFromPLN(fromPLN => !fromPLN)
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    calculate(typeCurrency, amount, intoPLN);
  };

  const calculate = (typeCurrency, amount, intoPLN) => {
    const rate = currencies.find(({ short }) => short === typeCurrency).rate

    if (intoPLN) {
      return setResult({
        firstAmount: amount,
        finalAmount: amount * rate,
        typeCurrency,
        intoPLN,
      })
    }
    else if (fromPLN) {
      return setResult({
        firstAmount: amount,
        finalAmount: amount / rate,
        typeCurrency,
        intoPLN,
      })
    }
  };

  return (
    <>
        <StyledForm onSubmit={onSubmitForm}>
          <Fieldset>
            <Legend>Wybierz walutę do obliczeń</Legend>
            <Container>
              <LabelText>Waluta:</LabelText>
              <Input 
                as="select"
                name="currency"
                value={typeCurrency}
                onChange={onSelectChange}>
                {currencies.map((currency => (
                  <option
                    key={currency.short}
                    value={currency.short}
                  >
                    {currency.name}
                  </option>
                )))}
              </Input>
            </Container>
          </Fieldset>
          <Fieldset>
            <Legend>
              Wpisz swój kapitał do przeliczenia
            </Legend>
            <Container currency>
                <LabelText currency>
                  Jaką walutę posiadasz?
                </LabelText>
                <Label radio>
                  <RadioElement>
                    <input
                      type="radio"
                      name="operationType"
                      onChange={onRadioChange}
                      checked={fromPLN}
                    />
                    PLN
                  </RadioElement>
                  <RadioElement>
                    <input
                      type="radio"
                      name="operationType"
                      onChange={onRadioChange}
                      checked={intoPLN}
                    />
                    {typeCurrency}
                  </RadioElement>
                </Label>
            </Container>
            <Label>
              <Container>
                  <LabelText>Ilość:</LabelText>
                  <Input
                    type="number"
                    className="form__field"
                    min="0.00"
                    step="0.01"
                    value={amount}
                    onChange={onInputChange} />
                <Button>Oblicz Wynik</Button>
              </Container>
            </Label>
          </Fieldset>
          <DataInfo>*kursy pochodzą z dnia 06.12.2022</DataInfo>
        </StyledForm>
    </>
  )

};

export default Form;