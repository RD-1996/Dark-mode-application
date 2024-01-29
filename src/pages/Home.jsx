import React from 'react';
import "../App.css";

const Home = () => {
  return (
    <div className='page'>
      <h1>Home Page</h1>
      <p>Checkout my newly created applications below 👇</p>
      <div className='cards'>
        <div className="card-container">
          <a href="https://kan-ban-board-steel.vercel.app/" target='_blank'>
            <div className='card card1'>
            </div></a>
          <label>KanBan Board</label>
        </div>
        <div className="card-container">
          <a href="https://front-end-basics-ten.vercel.app/" target='_blank'>
            <div className='card card2'>
            </div></a>
          <label>Grosery Website</label>
        </div>
        <div className="card-container">
          <a href="https://react-challenges-drab-zeta.vercel.app/" target='_blank'>
            <div className='card card3'>
            </div></a>
          <label>Online Game</label>
        </div>
      </div>
    </div>
  )
}

export default Home