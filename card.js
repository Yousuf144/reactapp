function Buttons(prop) {
    return <button type="button" {...prop}>{prop.value}</button>
 }
 function Image(props){
     return <img {...props} width="200px" height="180px"></img>
 }
 function Productname(props){
     return <h3>{props.children}</h3>
 }
 function Productdis(props){
     return <p>{props.children}</p>
 }
 function Productprice(props){
     return <h4>RS : {props.children}</h4>
 }
 function Droopdown(prop){
     return <select {...prop}>
         <option value="arr3">All</option>
         <option value="2">Men</option>
         <option value ="aar1">Women</option>
         <option value="kids">Kids</option>
     </select>
 }

 export { Buttons, Image , Productname , Productdis , Productprice , Droopdown }
 
 