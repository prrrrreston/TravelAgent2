import { useDrag } from 'react-dnd';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;


async function handleDeleteClick(location) {
  const response = await fetch(
    `${apiUrl}/api/users/deletevacation`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: window.localStorage.getItem('user_id'),
        vacationLocation: location,
      }),
    },
  );
}
const Data = props => {
  const navigate = useNavigate();
//   const [state, setState] = useState(props.data);
  function handleLoadClick(data) {
    navigate('/display', { state: data });
  }
  return (
    <div>
      {props.location}
      <button
        className='loadB'
        onClick={elem => {
          console.log(props.data);
          handleLoadClick(props.data);
        }}>
        Load Vacation
      </button>
      <button
        className='loadB'
        onClick={elem => {
          handleDeleteClick(props.location);
          navigate('/userPage');
        }}>
        Delete Vacation
      </button>
    </div>
  );
};

export default Data;
