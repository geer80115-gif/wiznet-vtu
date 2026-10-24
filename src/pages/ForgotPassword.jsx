import { useState } from "react";


export default function ForgotPassword(){

const [email,setEmail] = useState("");


function handleReset(e){

e.preventDefault();

alert(
"Password reset will connect to Firebase next."
);

}


return (

<div>

<h1>
Reset Password
</h1>


<form onSubmit={handleReset}>


<input

type="email"

placeholder="Enter your email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>


<br/>


<button>
Send Reset Link
</button>


</form>


</div>

);

}
