import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const[openModel,setOpenModal]=useState(false)
  return (
    <div className='App'>
      <button className='openModalBtn' onClick={()=>{
        setOpenModal(true)
      }}>Open</button>
      {openModel && <Modal closeModel={setOpenModal}/>}
    </div>
  );
}

export default App;
