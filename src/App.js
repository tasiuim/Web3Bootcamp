import React, { useState } from "react";
import './App.css';

export default function App() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <>
    <div id="header">
    TASIU &nbsp;&nbsp;&nbsp;&nbsp; 
    <button type="button" id="btn"> Connect Wallet </button>
    </div>
    <div id="form-container">
<form>
    
    <input type="text" name="rwallet" placeholder="Reciever Wallet" />
    <br></br>
<br></br>
<input type="text" name="amount" placeholder="Amount"/>
<br></br>
<br></br>
<button type="button" id="sendbtn"> Send </button>
</form>
</div>
    </>
  );
}