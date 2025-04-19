import React from "react";
import ReactDOM from "react-dom/client";

const Content=()=>{
    return(
        <div id="content">
          <h5>Home</h5>
          <h5>contact</h5>
          <h5>email</h5>
          <h5>login</h5>
        </div>
    )
}

const Card=(props)=>{
    const {imge,resname,food,rating,time,rupees}=props;
    return (
        <div id="card">
         <img id="food" src={imge}></img>
        <h2 id="text">{props.resname}</h2>
        <h4 id = "variety">{food}</h4>
        <div id="star">
            <h4 className="rate">{rating}⭐</h4>
            <h4 className="rate">{time}</h4>
        </div>
        <div>
            <h4 className="raty">{rupees}</h4>
        </div>
        </div>


    )
}
const Srch=()=>{
    return(
        <div id="srh">
         <input type="text"></input>
         <button id="b">Search</button>
        </div>
    )
}

const Nav = ()=>{
    return (
        <div id="nav1">
          <div id="image">
          <img id ="hi" src="https://t4.ftcdn.net/jpg/02/76/34/55/240_F_276345533_gQr0R2h68cDY1MRE1QyR7ydS2Xsiwx7T.jpg"></img>
          </div>
          <div id="tool">
           <a className="ab" href="#">Home</a>
           <a className="ab" href="#">Order</a>
           <a className="ab" id= "cart" href="#">🛒</a>
          </div>

        </div>

    )
}
const App=()=>{
    return (
        <div id="parent">
            <Nav></Nav>
            <Srch></Srch>
            <div id="deco">
            <div id="parentcard">
            
            <Card imge="https://www.shutterstock.com/image-photo/hyderabadi-chicken-biryani-aromatic-flavorful-260nw-2497040151.jpg"resname="Swarg khana" food="Briyani masala with pyaz korma" rating="4.5" time="30min" rupees="$ 300"/>
            <Card imge = "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"resname="KFC" food="Burgur with pyaz korma" rating="3.5" time="15min" rupees="$ 80" ></Card>
            <Card imge="https://www.shutterstock.com/image-photo/hyderabadi-chicken-biryani-aromatic-flavorful-260nw-2497040151.jpg"resname="Khana Khajana" food="Chawal,daal,bujiya,sabji,papad" rating="4.5" time="30min" rupees="$ 150"/>
            </div>
            </div>
            <Content></Content>
        </div>

    )
}



const Root = ReactDOM.createRoot(document.getElementById("root"))
Root.render(<App></App>)