import { useState } from "react";


export default function BuyData(){

const [phone,setPhone] = useState("");
const [plan,setPlan] = useState("");


function handlePurchase(e){

e.preventDefault();

alert(
"Data purchase API will be connected later."
);

}


return (

<div>

<h1>
Buy Data
</h1>


<form onSubmit={handlePurchase}>


<input

type="tel"

placeholder="Phone Number"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

/>


<br/>


<select

value={plan}

onChange={(e)=>setPlan(e.target.value)}

>

<option value="">
Select Data Plan
</option>

<option>
1GB Daily
</option>

<option>
5GB Weekly
</option>

<option>
10GB Monthly
</option>


</select>


<br/>


<button>
Buy Data
</button>


</form>


</div>

);

}
