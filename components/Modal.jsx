import React, { useState } from 'react';
import './Model.css';
import PhoneInput from 'react-phone-input-2';
const Modal = ({ closeModel }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('US'); // Default country

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className='modalBackground'>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModel(false)}> X </button>
        </div>
        <div className="title">
          <img src="./images/LovisaLogo.png" alt="logo" className='logo'/>
          <div className='afterTitle'>
            <h1>FINAL STEP</h1>
            <p>LET'S TEXT!</p>
          </div>
        </div>
        <div className="body">
          <div className='inCenter'>
            <p>If you want the VIP treatment, opt-in</p>
            <p>to SMS and you’ll get our most</p>
            <p>exciting updates straight to your</p>
            <p>phone — so you never miss a thing!</p>
          </div>
          <div className='textField'>
          <select 
              value={selectedCountry} 
              onChange={handleCountryChange}
              className='select'
            >
              <option value="IN">India</option>
              <option value="US">United States</option>

             
            </select>
            <input 
              type="tel" 
              name="phoneNumber" 
              id="phoneNumber" 
              placeholder="  123456234567" 
              value={phoneNumber} 
              onChange={handlePhoneNumberChange} 
              className='input'
            />

            
           
          </div>
        </div>
        <div className="footer">
          <div>
            <input type="checkbox" name="" id="" className='checkbox' checked={true}/>
            <p className='footerContainer'>
              <p className='footerLabel'>Agree to receive marketing text messages from Lovisa  at</p>
              <p className='footerLabel'>the number provided. Consent is not a condition of any</p>
              <p className='footerLabel'>purchase. Rates may apply. View our <a>Privacy Policy</a> and</p>
              <p className='footerLabel'><a>Terms of Service</a>.</p>
            </p>
          </div>
          <button type='submit' className='submitButton'>LET'S DO IT!</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
