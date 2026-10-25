export default function Transactions(){

const transactions = [
  {
    id: 1,
    type: "Airtime",
    amount: "₦500",
    status: "Successful"
  },
  {
    id: 2,
    type: "Data",
    amount: "₦1000",
    status: "Successful"
  }
];


return (

<div>

<h1>
Transaction History
</h1>


{
transactions.map((item)=>(

<div key={item.id}>

<h3>
{item.type}
</h3>

<p>
Amount: {item.amount}
</p>

<p>
Status: {item.status}
</p>

<hr/>

</div>

))
}


</div>

);

}
