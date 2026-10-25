import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/config";


export default function VerifyEmail(){

async function sendVerification(){

if(auth.currentUser){

await sendEmailVerification(
auth.currentUser
);

alert("Verification email sent!");

}

else{

alert("Please login first.");

}

}


return (

<div>

<h1>
Verify Your Email
</h1>


<p>
Please verify your email address to continue using WizNet.
</p>


<button onClick={sendVerification}>
Send Verification Email
</button>


</div>

);

}
