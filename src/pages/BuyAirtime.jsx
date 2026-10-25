import { useState } from "react";


export default function BuyAirtime(){

const [phone,setPhone] = useState("");
const [amount,setAmount] = useState("");


function handlePurchase(e){

e.preventDefault();

alert(
"Airtime purchase API will be connected later."
);

}


return (

<div>

<h1>
Buy Airtime
</h1>


<form onSubmit={handlePurchase}>


<input

type="tel"

placeholder="Phone Number"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

/>


<br/>


<input

type="number"

placeholder="Amount"

value={amount}

onChange={(e)=>setAmount(e.target.value)}

/>


<br/>


<button>
Buy Airtime
</button>


</form>


</div>

);

}
