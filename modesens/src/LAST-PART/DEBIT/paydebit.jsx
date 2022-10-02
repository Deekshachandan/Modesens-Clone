import "./paydebit.css"
import { useToast } from '@chakra-ui/react'
import {Link} from "react-router-dom"
export default function DebitPAy(){
    const toast = useToast()
const handleClick=()=>{
    toast({
        title: 'Payment Successful',
        description: "Thank you for shopping with modesens, continue shopping !!!!!!",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
}




return(
    <div>
<div className="checkOut">
  <h1 className="hello">Checkout</h1>
  <h4 className="hello">Payment Details</h4>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="cardName">Card Holder Name</label>
      <input type="text" class="form-control" id="cardName" placeholder="Name" />
    </div>
    <div class="form-group col-md-6">
      <label for="cardNum">Card Number</label>
      <input type="password" class="form-control" id="cardNum" placeholder="1234567890098765" />
    </div>
  </div>
    <div class="form-row">
  <div class="form-group col-md-4">
    <label for="endDate">Expiration Date: Month</label>
    <select id="endDate" class="form-control">
      <option selected>01</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>
      </div>
    <div class="form-group col-md-4">
      <label for="endDate">Year</label>
    <select id="endDate" class="form-control">
      <option selected>2018</option>
      <option>2019</option>
      <option>2020</option>
      <option>2021</option>
      <option>2022</option>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>



    </select>
  </div>
  
    <div class="form-group col-md-4">
      <label for="cVV">CVV</label>
      <input type="text" class="form-control" id="cVV" placeholder="123" />
    </div>
  </div>
 
 <Link to="/">
  <button onClick={handleClick}     class="btn btn-primary">submit</button>
  </Link>
</form>
</div>




        
    </div>
)





}