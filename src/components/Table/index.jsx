import React, { useState, useEffect } from 'react';
import './style.css';
import StorageData from '../../utils/LocalStorage';

const Table = ({ data }) => {
  const handelDelete = (i) => {
    console.log(i);
    data.splice(i, 1);
    StorageData.AddLocal(data);
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
          <th colspan="5">edit</th>
        </tr>

        {data &&
          data.map(({ firstName, LastName, age }, index) => (
            <tr>
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
