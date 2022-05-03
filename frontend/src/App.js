import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import logo from './logo.svg';

function App() {

  const [ lists, setLists ] = useState([]);
  const [ value, setValue ] = useState('');

  const changeHandler = (event) => {
    setValue(event.currentTarget.value)
  };
  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/value', { value: value })
      .then(response => {
        if (response.data.success) {
          console.log('response', response)
          setLists([...lists, response.data])
          setValue("");
        } else {
          alert('값을 DB에 넣는데 실패했습니다.')
        }
      })
  }

  // DB 에서 데이터를 가져옴
  useEffect(() => {
    console.log('useEffect');

    axios.get('/api/values')
      .then(response => {
        console.log('Response Data : ', response);
        setLists(response.data);
      })
      .catch(error => {
        console.log('Response Error : ', JSON.stringify(error));
      });

  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">

          {lists?.map((val, key) => 
            <li key={key}> {val.value}  </li>
          )}
          <form className="example" onSubmit={submitHandler}>

            <input type="text" placeholder="입력해주세요..."
                  onChange={changeHandler} value={value}/>

            <button type="submit">확인</button>

          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
