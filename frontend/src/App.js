import "./App.css";
import { useState } from "react";
import axios from "axios";
function App() {

  function addName(e) {
    const name = e.target.value;
    setname(name);
  }

  function addPhone(e) {
    const phone = e.target.value;
    setphone(phone);
  }

  function addDomain() {
    const domain = document.getElementById("domain").value;
    setdomain(domain);
  
  }

  function addEmail(e) {
    const email = e.target.value;
    setemail(email);
  }

  async function saveuser() {
  await  axios.post('http://localhost:9200/save', {
      name: name,
      email: email,
      phone: phone,
      batch:domain
    })
      .then((response) => {
        console.log(response);
        let res = response.status
        if (res !== 200) {
          alert("data not saved")
        }
        else {
          alert("data saved")
        }
      }, (error) => {
        console.log(error);
        alert("data not saved")
      });

  }
  const [name, setname] = useState("")
  const [phone, setphone] = useState()
  const [email, setemail] = useState("")
  const [domain, setdomain] = useState("")


  return (
    <div>
    <div className="form">

<div className="img"></div>

      <div className="box">
      <span id="heading">Inquiry Form </span>
      <br /><br />

        <br />
        <span className="text" >Enter your full name </span>
        <br />
        <input className="inp" id="name" type="text" name='name' value={name} onChange={addName}/>

        <br />
        <span className="text" >Enter Phone number  </span>
        <br />
        <input className="inp" id="phone" type="text" name='phone' value={phone} onChange={addPhone}/>

        <br />
        <span className="text" >Enter Email </span>
        <br />
        <input className="inp" id="mail" type="text" name='email' value={email} onChange={addEmail}/>
        <br />
    
        <label for="domain" className="text" >Choose domain :</label>

<select name="domain" id="domain"   onChange={addDomain}>
  <option className="option" value="java">java</option>
  <option className="option" value="mern">mern</option>
  <option className="option" value="python">python</option>
  <option className="option"  value="php">php</option>
  <option className="option" value="dotnet">dotnet c#</option>
  <option className="option" value="c++">c and c++</option>
  <option className="option" value="web-designing">web designing</option>
</select>
<br /><br />
<button className="btn" onClick={saveuser}>Send Inquiry</button>
      </div>
    </div>




    
    </div>
  )
}

export default App;
