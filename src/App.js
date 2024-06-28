import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './LandingPage';
import AddGoods from './AddGoods';
import DisplayGoods from './DisplayGoods';
import EditOwners from './EditOwner';
import Error from './Error';
import { createContext, useState } from "react";
import GoodsInfo from "./GoodsInfo";
import Compo from './Compo';

export const goodsContext = createContext();
function App() {
  // let [goodsName, setGoodsName] = useState("")
  // let [goodsQuantity, setGoodsQuantity] = useState("")
  // let [goodsPrice, setGoodsPrice] = useState("")
  // let [goodsDescp, setGoodsDescp] = useState("")
  // let [owner, setOwner] = useState("ADE STORE")
  // let [details, setDetails] = useState([])
  // let [goods, setGoods] = useState([])


  return (
   <div className="bg-red-400">
    <Compo/>
     {/* <goodsContext.Provider value={{goods,setGoods,goodsName,setGoodsName,goodsQuantity,setGoodsQuantity,goodsPrice,setGoodsPrice,goodsDescp,setGoodsDescp,owner,setOwner,details,setDetails}}>
      <h4>{owner}</h4>
      <button className="">madav</button>
    <nav style={{display:"flex"}}>
          <Link to="/"> Home</Link> <br/>
          <Link to="/addgoods"> Add Goods</Link> <br/>
          <Link to="/displaygoods"> Display Goods</Link> <br/>
          <Link to="/editowners"> Edit Owner</Link> <br/>
    </nav>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/addgoods" element={<AddGoods/>}></Route>
        <Route path="/displaygoods" element={<DisplayGoods/>}></Route>
        <Route path="/goodsinfo" element={<GoodsInfo/>}></Route>
        <Route path="/editowners" element={<EditOwners/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
      </goodsContext.Provider> */}
   </div>
  );
}

export default App;