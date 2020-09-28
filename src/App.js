import React, { useState } from 'react';
import InputText from './components/TextInput';

import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [age, setAge] = useState();

  const handelClick = () => {};

  return (
    <div className="container">
      <form className="Text__input__form">
        <InputText
          placeholder="enter first name "
          value={firstName}
          change={setFirstName}
        />
        <InputText
          placeholder="enter last name "
          value={LastName}
          change={setLastName}
        />
        <InputText
          type="number"
          placeholder="enter age "
          value={age}
          change={setAge}
        />
        <button className="form__layout__button" onClick={() => handelClick()}>
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
