import React, { useState } from 'react';
import InputText from './components/TextInput';
import StorageData from './utils/LocalStorage';
import Swal from 'sweetalert2';

import './App.css';
import Table from './components/Table';

const App = () => {
  const [firstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [data, setData] = useState(StorageData.GetLocal() || []);

  const handelClick = () => {
    if (!firstName || !LastName || !age)
      Swal.fire({
        title: 'Error!',
        text: 'Check data please',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    else {
      setData([...data, { firstName, LastName, age }]);
      StorageData.AddLocal([...data, { firstName, LastName, age }]);
    }
  };

  return (
    <div className="container">
      <div className="container__form">
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
      </div>
      <Table data={data} />
    </div>
  );
};

export default App;
