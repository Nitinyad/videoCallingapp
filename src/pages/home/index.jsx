import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [roomcode ,setRoomcode] = useState('');
  const navigate = useNavigate();
  

  const handleonSubmit = (ev) =>{
    ev.preventDefault();
    navigate(`/room/${roomcode}`)
  }
  return (
    <div className='home-page'>
      <form className='form' onSubmit={handleonSubmit}>
        <div className='info'>
          <label>Enter Room code</label>
          <input 
          type='text'
          value={roomcode}
          onChange={e => setRoomcode(e.target.value)}
          placeholder='Enter Room code' 
          required
          />
          <button className='button' type='submit'>Enter Room</button>
        </div>
      </form>
    </div>
  )
}

export default HomePage