import React, { useState } from 'react';
import './style.css';
import StorageData from '../../utils/LocalStorage';
import SweetAlert from '../../utils/SweetAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

let newData = [];
const Table = ({ data, changeData }) => {
  const [page, setPage] = useState(0);
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
          data.map(
            ({ firstName, LastName, age }, index) =>
              index >= page &&
              index <= page + 6 && (
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
              )
          )}
      </table>

      <div className="footer__icon">
        <FontAwesomeIcon
          className="arrow__icon"
          icon={faArrowLeft}
          color="#4CAF50"
          size="2x"
          onClick={() => page > 0 && setPage(page - 7)}
        />
        <FontAwesomeIcon
          className="arrow__icon"
          icon={faArrowRight}
          color="#4CAF50"
          size="2x"
          onClick={() => page + 7 < data.length && setPage(page + 7)}
        />
      </div>
    </div>
  );
};
export default Table;
