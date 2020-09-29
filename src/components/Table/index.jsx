import React from 'react';
import './style.css';

const Table = ({ data }) => {
  const handelDelete = () => {};
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
          data.map(({ firstName, lastName, age }, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{firstName}</td>
              <td> {lastName}</td>
              <td>{age}</td>
              <td>
                <button
                  onClick={() => handelDelete()}
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
