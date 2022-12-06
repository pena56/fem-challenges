import React, { useState, useEffect } from "react";

import style from "./style.module.scss";
import cardLogo from "./assets/images/card-logo.svg";
import completeLogo from "./assets/images/icon-complete.svg";

import Input from "./components/Input";
import InputGroup from "./components/InputGroup";
import Button from "./components/Button";

import containsOnlyNumbers from "./helpers/checkString";

export default function Index() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");

  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("");

  const [cardAdded, setCardAdded] = useState(false);

  useEffect(() => {
    if (number.length === 4 || number.length === 10 || number.length === 16) {
      setNumber((prev) => {
        return `${prev}  `;
      });
    }
  }, [number.length]);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError("");
    setNumberError("");
    setCvcError("");
    setDateError("");

    if (!name) {
      setNameError("Can't be blank");
      return;
    }

    if (!number) {
      setNumberError("Can't be blank");
      return;
    }

    if (!containsOnlyNumbers(number.replace(/\s/g, ""))) {
      setNumberError("Wrong format, numbers only");
      return;
    }

    if (date === "/" || !date || date.length < 4) {
      setDateError("Can't be blank");
      return;
    }

    if (!cvc) {
      setCvcError("Can't be blank");
      return;
    }

    setCardAdded(true);
  };

  return (
    <main className={style.container}>
      <div className={style.cardContainer}>
        <div className={style.cardBack}>
          <p className={style.cvc}>{cvc || "000"}</p>
        </div>
        <div className={style.cardFront}>
          <img src={cardLogo} alt="" />

          <div className={style.cardContent}>
            <p className={style.cardNumber}>
              {number || "0000 0000 0000 0000"}
            </p>
            <p className={style.cardName}>
              <span>{name || "jane appleseed"}</span>
              <span>{date === "/" || !date ? "00/00" : date}</span>
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleOnSubmit} className={style.cardForm} action="#">
        {!cardAdded ? (
          <>
            <Input
              errorMessage={nameError}
              id="name"
              label="cardholder name"
              placeholder="e.g. Jane Appleseed"
              setValue={setName}
              value={name}
            />

            <Input
              errorMessage={numberError}
              id="number"
              label="card number"
              placeholder="e.g. 1234 5678 9123 0000"
              setValue={setNumber}
              value={number}
              maxLength={22}
            />

            <div className={style.formRow}>
              <div className={style.dateGroup}>
                <InputGroup
                  errorMessage={dateError}
                  id="date"
                  label="exp. date (mm/yy)"
                  placeholder="MM/YY"
                  setValue={setDate}
                  value={date}
                  maxLength={2}
                />
              </div>
              <div>
                <Input
                  errorMessage={cvcError}
                  id="cvc"
                  label="cvc"
                  placeholder="e.g. 123"
                  setValue={setCvc}
                  value={cvc}
                  maxLength={3}
                />
              </div>
            </div>

            <Button label="Confirm" />
          </>
        ) : (
          <div className={style.completeSection}>
            <img src={completeLogo} alt="" />
            <div>
              <p className={style.header}>THANK YOU!</p>
              <p className={style.subtext}>
                We&apos;ve added your card details
              </p>
            </div>

            <Button label="Continue" />
          </div>
        )}
      </form>
    </main>
  );
}
