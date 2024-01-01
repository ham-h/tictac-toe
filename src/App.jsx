
// import { useState } from 'react';
import './Styles.scss'
import Board from './Compo/Board'
// import Prop from './Prop'

function App() {
  // const [counter,setCounter]=useState(1);
// let counter=1;//after usestate v dontneed  this
// const onBtnClick=()=>{
  // setCounter(counter+1);
  // setCounter(currentCounter=>{
  //   return currentCounter+1;
  // })//the answer will be same  bt  this callback aproach isbetter
  // counter=counter+1;//after usestate v dontneed  this
  // this will work onlyin plian js not in react,it wont update coz inreact 
  // v hav to make changes as states


  return (
    <div className='app'>
     
{/* <Prop name="ham" >
  <div>jhadsh</div>
  <h1>dfhh</h1>
</Prop>
<Prop name="3"/>
<Prop name="...."/>    */}
<Board/>
{/* <button onClick={()=>{console.log("hlo")}}>click</button> */}
{/* <button onClick={(event)=>{console.log("hlo",event)}}>click</button> */}
{/* gives syntaticevents */}
{/* <button onClick={onBtnClick}>click</button>
<div>{counter}</div> */}
    </div>
  )
}

export default App
