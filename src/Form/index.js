import "./style.css"

const Form = () => {
  return (
    <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Wybierz walutę do obliczeń</legend>
          <p>
          <div className="form__container">
            <span className="form__labelText">Waluta:</span><select className="form__field js-currency" name="currency">
              <option className="form__option" value="USD">
                Dolar Amerykański
              </option>
              <option className="form__option" value="EUR" selected>Euro</option>
              <option className="form__option" value="GBP">Funt Angielski</option>
            </select>
          </div>
          </p>
        </fieldset>

        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Wpisz swój kapitał do przeliczenia
          </legend>
          <div className="form__container form__container--currency">
            <div className="form__containerElement">
              <span className="form__labelText form__labelText--curency">Jaką walutę posiadasz?</span>
            </div>
            <div className="form__containerElement">
              <label className="form__label form__label--radio">
                <input type="radio" name="operationType" value="toPLN" className="js-operationFromPLN form__radio" />PLN
                <input type="radio" name="operationType" value="fromPLN" className="js-operationToPLN form__radio"
                  checked /><span className="js-FormCurrencyField">EUR</span>
              </label>
            </div>
          </div>
          <p>
            <label className="form__label">
              <div className="form__container">
                <div className="form__containerElement">
                  <span className="form__labelText">Ilość:</span>
                </div>
                <div className="form__containerElement"><input type="number" className="form__field" min="0.00"
                    step="0.01" value="0" /></div>
              </div>
            </label>
          </p>
        </fieldset>

        <p className="form__textDataInfo">kursy pochodzą z dnia 21.11.2022</p>
      </form>
  )
};

export default Form;