import { useState } from "react";


export default function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


function handleLogin(e){

e.preventDefault();

alert(
"Login will connect to Firebase Authentication next."
);

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
