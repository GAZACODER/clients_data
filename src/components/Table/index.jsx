import React, { useState } from 'react';
import './style.css';
import StorageData from '../../utils/LocalStorage';
import SweetAlert from '../../utils/SweetAlert';

let newData = [];
const Table = ({ data, changeData }) => {
  const handelDelete = (i) => {
    SweetAlert.ConfirmWithAlert(() => {
      newData = data.filter((x, index) => index !== i);
      changeData(newData);
      StorageData.AddLocal(newData);
    }, 'warning');
  };

  const handelEdit = () => {};
  return (
    <div>
      <table className="table__todo">
        <tr>
          <th>num </th>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
          <th>delete</th>
          <th>edit</th>
        </tr>

        {data &&
          data.map(({ firstName, LastName, age }, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{firstName}</td>
              <td> {LastName}</td>
              <td>{age}</td>
              <td>
                <button
                  onClick={() => handelDelete(index)}
                  className="table__todo__delete__btn"
                >
                  delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => handelEdit()}
                  className="table__todo__edit__btn"
                >
                  edit
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};
export default Table;
