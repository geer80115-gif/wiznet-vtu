import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";


export default function Register(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


async function handleRegister(e){

e.preventDefault();

try{

await createUserWithEmailAndPassword(
auth,
email,
password
);

alert("Account created successfully!");

}

catch(error){

alert(error.message);

}

}


return (

<div>

<h1>
Create WizNet Account
</h1>


<form onSubmit={handleRegister}>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>


<br/>


<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>


<br/>


<button>
Register
</button>


</form>


</div>

);

}
