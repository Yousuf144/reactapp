
import './App.css';
import { Buttons, Image,Productname,Productdis,Productprice,Droopdown } from './card';
import { useState } from 'react';

function App() {
let arr = [{name:"Men Shirt",type:"men",discpriton:"New Black Shirt For Men",imge:"https://sc04.alicdn.com/kf/Hdae17163cb0a4c1fbb300cc754e19e81l.jpg", price:"499"},
{name:"Men Shirt New",type:"men",discpriton:"New blue Shirt For Men",imge:"https://ae01.alicdn.com/kf/HTB1ouCNMVXXXXaOXFXXq6xXFXXXj/New-Autumn-Fashion-Brand-Print-Shirts-Slim-Fit-Shirt-Men-Long-Sleeve-Cotton-Casual-Mens-Shirts.jpg",price:"500"},
{name:"Men's Casual Shirt",type:"men",discpriton:" Shirt Cotton Long Sleeve Button ",imge:"https://i.pinimg.com/originals/e4/5a/43/e45a43655c7502a3b053c0261e2d1ec5.jpg", price:"699"},
{name:"Men Shirt",type:"men",discpriton:"Mens Formal Shirts For Men Clothes",imge:"https://image.dhgate.com/0x0s/f2-albu-g10-M01-F5-61-rBVaWVyks8SAdU7lAADdjruigfw389.jpg/men-shirt-long-sleeve-mens-shirts-casual.jpg", price:"750"},
{name:"Girl Shirt",type:"girls",discpriton:"New White Shirt For Girls",imge:"https://images-eu.ssl-images-amazon.com/images/I/61gqf3Ufn4L._AC._SR360,460.jpg", price:"799"},
{name:"Girl Jeans Shirt",type:"girls",discpriton:"Jeans Shirt High Quality",imge:"https://static-01.daraz.pk/p/95fd1da70adfa68fd1c41963e59ce4f9.jpg_340x340q80.jpg_.webp",price:"900"},
{name:"woman Casual Shirt",type:"girls",discpriton:" Women Printed Stylish Full Sleeve ",imge:"https://looksgud.com/blog/wp-content/uploads/2017/05/sangria-mandarin-collar-full-placket-printed-tunic.jpg", price:"999"},
{name:"New Girl Shirt",type:"girls",discpriton:"shirts are designed for formal, casual",imge:"https://stylesatlife.com/wp-content/uploads/2019/05/Full-Sleeved-Red-Plain-Shirt-for-Women.jpg", price:"550"},
{name:"Children Shirt",type:"kids",discpriton:"casual t-shirt for children",imge:"https://stylesatlife.com/wp-content/uploads/2017/09/Kids-Polo-Neck-T-Shirt.jpg.webp", price:"499"},
{name:"kid Print  Shirt1",type:"kids",discpriton:"Print t-shirt for kids ",imge:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Qsr1ZH9vWV4dmyn5hkxs_KsCeMVbYMhlw&usqp=CAU",price:"900"},
{name:"Kid Casual Shirt1",type:"kids",discpriton:"Bon Organik Beach Please Tshirts for  Boys",imge:"https://m.media-amazon.com/images/I/51DXEXhVl0L._UL1000_.jpg", price:"999"},
{name:"Kid t-shirt",type:"kids",discpriton:"Powerpuff - Kids The Holi Crew T-Shirts",imge:"https://m.media-amazon.com/images/I/51nLxOlFFkL._SL1000_.jpg", price:"550"},]

let arr1 = [{name:"Men Watch",type:"men",discpriton:"New Men Black Watch",imge:"https://m.media-amazon.com/images/I/71uveJVT5IL._AC_UL1500_.jpg", price:"259"},
{name:"Men Wrist",type:"men",discpriton:"New Wrist watches For Men",imge:"https://p.kindpng.com/picc/s/490-4909930_wrist-band-watch-png-image-wrist-watch-png.png",price:"750"},
{name:"Men's Rolex",type:"men",discpriton:"Men Rolex watches ",imge:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jaeger-le-coultre-1603986736.jpg?crop=1xw:1xh;center,top&resize=480:*", price:"659"},
{name:"Quartz Watch",type:"girls",discpriton:"Quartz hand watch for girls",imge:"https://image.made-in-china.com/2f0j00HorRLiBtvjkT/for-Girl-Beautiful-Girls-Watches-Lady-New-Design-Quartz-Hand-Watch.jpg", price:"550"},
{name:"Ladies 3d Watch",type:"girls",discpriton:"3d ladies chain watch",imge:"https://static-01.daraz.pk/p/ec13883ced36bc83f52b14844593ba1d.jpg", price:"1099"},
{name:"Sveston watch",type:"girls",discpriton:"Sveston Watch wrist for girls",imge:"https://cdn.shopify.com/s/files/1/0003/5815/4293/products/SV-1971_Dial1_Cam001F9_900x.jpg?v=1617709005", price:"1550"},]

let arr3 = [{name:"Galaxy s20",type:"android",discpriton:"Samsung galaxy s20",imge:"https://images.samsung.com/pk/smartphones/galaxy-s21/buy/s21_family_kv_mo_img.jpg", price:"40099"},
{name:"Samsung A32",type:"android",discpriton:"Sumsung a32 with charger",imge:"https://www.mytrendyphone.eu/images/Samsung-Galaxy-A32-128GB-Awesome-Black-8806092082571-26032021-01-p.jpg",price:"5000"},
{name:"Nokia 2.0",type:"android",discpriton:"New nokia 2.0 with charger",imge:"https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2020/12/Nokia-2_4-review_Carousel.jpg", price:"1699"},
{name:"Nokia 106 ",type:"smartphone",discpriton:"New Nokia 106 box pack",imge:"https://images.ctfassets.net/wcfotm6rrl7u/4BMKWaUMU32GxTCYodOjb/0f4349817c1ca4280e0869b3253e42e3/nokia_106-DTC-BATTERY-mobile.png?f=center&fit=fill&q=88", price:"2750"},
{name:"Nokia 216",type:"smartphone",discpriton:"New Nokia 216 box pack",imge:"https://drop.ndtv.com/TECH/product_database/images/920201640454PM_635_nokia_216_dual_sim.jpeg", price:"3799"},
{name:"Iphone 12",type:"iphone",discpriton:"Iphone 12 fresh condition",imge:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000",price:"61900"},
{name:"Iphone X",type:"iphone",discpriton:"Iphone x fresh condition",imge:"https://thephonebox.ie/wp-content/uploads/2020/07/iphone-x-white.jpg", price:"51999"},
{name:"Iphone 8",type:"iphone",discpriton:"New Iphone 8 fresh condition",imge:"https://www.apple.com/newsroom/images/product/iphone/standard/8plus_and_8_glass_back_big.jpg.large.jpg", price:"15550"},
]



let [mainval, setmainval] = useState('');
let cloth = [{type:'men'},{type:'girls'},{type:'kids'}]
let watch = [{type:'men'},{type:'girls'}]
let mobile = [{type:'smartphone'},{type:'android'},{type:'iphone'}]
let empt = [{type:"Please Select Category"}]
let tr = ['men','girls']

let allarr = [...arr,...arr1,...arr3]
let [getval,setval] = useState(allarr)
let [getsub,setsub] = useState(empt)
let [fval,setfval] = useState('men')


 

let vala = e =>{
  
  if(e.target.value == "cloth"){
    let a = arr
    let cl = cloth
    setval(a)
    setsub(cl)
  }
  else if(e.target.value == "watch"){
    let b = arr1
    let wa = watch
    setval(b)
    setsub(wa)
  }
  else if (e.target.value == "mobile"){
    let c = arr3
    let mb = mobile
    setval(c)
    setsub(mb)
  }
  
 
 
}

  return (

    
    <div className="productcontainer">
      <div>
      <select onChange={vala}>


<option value="cloth">Clothes</option>
<option value="watch">Watches</option>
<option value="mobile">Mobiles</option>
   </select>

<select onChange={(e)=>setfval(e.target.value)}>
{getsub.map((val,ind)=>{
    return <option value={val.type}>{val.type}</option> })}
  </select>
      </div>
      <div>
{/* {arr.filter((elem)=> elem.type== getval).map((val,ind)=>{
  return<div className="Productcard"> <Image src={val.imge} />
  <Productname>{val.name}</Productname>
  <Productdis>{val.discpriton} </Productdis>
  <Productprice>{val.price}</Productprice>
  <Buttons  className="Productbutton" value="Add To Cart" />  </div> 
})}        

 */}



  


 { 
 getval.filter((ele)=> ele.type== fval).map((val,index)=>{
  return <div className="Productcard"> <Image src={val.imge} />
  <Productname>{val.name}</Productname>
  <Productdis>{val.discpriton} </Productdis>
  <Productprice>{val.price}</Productprice>
  <Buttons  className="Productbutton" value="Add To Cart" />  </div> 
})}
    </div>
  </div>
  );
}

export default App;
