import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";


export default function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


async function handleLogin(e){

e.preventDefault();


try{

await signInWithEmailAndPassword(
auth,
email,
password
);


alert("Login successful!");

}


catch(error){

alert(error.message);

}


}


return (

<div>

<h1>
Login to WizNet
</h1>


<form onSubmit={handleLogin}>


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
Login
</button>


</form>


</div>

);

}
