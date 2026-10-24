import { useState } from "react";


export default function Register(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


function handleRegister(e){

e.preventDefault();

alert(
"Registration system will connect to Firebase next."
);

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
