import React, { useState } from "react";
import "./Admin.css";
import { json } from "react-router-dom";
import axios from "axios";

export function Admin() {
    const [inpid, setinpid] = useState("");
    const [inppass, setinppass] = useState("");
    const [temp, settemp] = useState(true)
    const [data, setdata] = useState("");
    const [error, setError] = useState("");

    function arjun() {
        // let mahima = document.getElementById("heading");
        // mahima.innerHTML = `
       
        
        // `;
               
        
        let alok = `
        <tr id ="mainrow">
        <th>no</th>
        <th>name</th>
        <th>email</th>
        <th>phone</th>
        <th>domain</th>
      </tr>
        `
        for (let i = 0; i < data.length ; i++) {
            alok +=
                `
  

    <tr className = "ak">
    <td>${" " + i + " "}</td>
    <td>${data[i].name}</td>
    <td>${data[i].email}</td>
    <td>${data[i].phone}</td>
    <td>${data[i].batch}</td>
</tr>


    
    `
        }

        setError(alok)
        let x = document.getElementById("xyz");
        x.innerHTML = error;



    }
    function getid(event) {
        const inpid = event.target.value;
        setinpid(inpid);
    }

    function getpass(event) {
        const pass = event.target.value;
        setinppass(pass);
    }

    function checkadmin() {
        let data = localStorage.getItem("admin");
        if (data == null) {
            let arr = [12345, "mainismain"];
            localStorage.setItem("admin", JSON.stringify(arr));
        } else {
            data = JSON.parse(data);
            let mainid = data[0];
            mainid = Number(mainid);
            let mainpass = data[1];

            if (mainid == inpid) {
                if (mainpass == inppass) {
                    alert("login successfully");
                    settemp(false)
                } else {
                    alert("invalid passsword ");
                }
            } else {
                alert("invalid id ");
            }
        }
    }

    async function getdata() {
        try {
            const response = await axios.get('http://localhost:9200/getdata');
            console.log(response);
            setdata(response.data);
            arjun()
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div>
            {temp ? (
                <div className="loginform">
                    <h1>Admin Login Here ......</h1>
                    <br />

                    <h3>Admin Id </h3>

                    <input type="text" onChange={getid} />
                    <br />
                    <h3>Password</h3>

                    <input type="text" onChange={getpass} />
                    <br />
                    <br />
                    <button onClick={checkadmin}>Submit</button>
                </div>) :

                <div>


                    <h3 align='center' id="welcome">Welcome dear Admin </h3>
                    <br />
                    <hr />
                    <button className="btn" onClick={getdata}>Get Details</button>

                    <div>

                    </div>

                </div>}


            <div id="xyzh">


                <table id="xyz">



                </table>
            </div>

        </div>
    );
}
