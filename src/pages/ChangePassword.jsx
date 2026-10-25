import { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../firebase/config";


export default function ChangePassword(){

const [password,setPassword] = useState("");


async function handleChange(e){

e.preventDefault();


try{

if(auth.currentUser){

await updatePassword(
auth.currentUser,
password
);


alert("Password changed successfully!");

}

}

catch(error){

alert(error.message);

}

}


return (

<div>

<h1>
Change Password
</h1>


<form onSubmit={handleChange}>


<input

type="password"

placeholder="New Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>


<br/>


<button>
Update Password
</button>


</form>


</div>

);

}
