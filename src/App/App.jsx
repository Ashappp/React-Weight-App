import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import ModalComponent from '../ModalComponent/ModalComponent';
import {Switch,Route} from 'react-router-dom';
import Header from '../Header/Header';
import IMT from '../IMT/IMT';
import Weight from '../Weight/Weight';
import History from '../History/History';
import ModalPlus from '../ModalPlus/ModalPlus';



class App extends Component {
state ={
  history:[],
  data:{
    growth:'',
    weight:'',
    date:'',
    dayNow:'',
    today:'',
    desiredWeight:'',
    gender:''
  },
  flag:true,
  imt:null,
  display:false,
  weightAdd:'',
  weight:''
}


componentDidMount=()=>{
if (JSON.parse(localStorage.getItem('key')) !== null){this.setState({
  flag:false
})}
const time = new Date()
  const GetDay = time.getDay()
  const year = time.getFullYear()
  const month = time.getMonth()+1;
  const day = time.getDate()
  const dayNow = `${day}.${month}.${year}`
  const dayOfTheWeek = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота',]
  let today = dayOfTheWeek[GetDay]
  this.setState({
    data:{...this.state.data,dayNow:dayNow,today:today}
  })
}
modalData =(e)=>{
const time = new Date()
const GetDay = time.getDay()
const year = time.getFullYear()
const month = time.getMonth()+1;
const day = time.getDate()
const dayNow = `${day}.${month}.${year}`
const dayOfTheWeek = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота',]
let today = dayOfTheWeek[GetDay]
let name = e.target.name
let value = e.target.value
this.setState({
  dayNow:dayNow,
  today:today,
  data:{...this.state.data,[name]:value}
})
}

x=(e)=>{
let name = e.target.name
let value = e.target.value
this.setState({
 data:{...this.state.data,[name]:value} 
})
}

setItemLocal = async()=>{
  await this.setState({
    history:[...this.state.history,this.state.data],
    flag:false,
    data:{...this.state.data,weight:''}
  },)
  localStorage.setItem('key',JSON.stringify(this.state.data));
  localStorage.setItem('history',JSON.stringify(this.state.history));
  }

cancelChanges=()=>{
  console.log('asdasdd');
  this.setState({
    data:{growth:'',
    weight:'',
    date:''},
  })
}

imtMan=()=>{
  const weight = JSON.parse(localStorage.getItem('history'))
  const x = Number(weight[weight.length-1].weight)
  const growth = JSON.parse(localStorage.getItem('history'))
  const y = Number(growth[0].growth)
  const imt = Math.floor(x/(Math.pow((y/100),2)))
  console.log(imt)
  localStorage.setItem('imt',JSON.stringify(imt));
}

displayChange=()=>{
  this.setState({
    display:!this.state.display
  })
}

addWeight =()=>{
  const time = new Date()
  const GetDay = time.getDay()
  const year = time.getFullYear()
  const month = time.getMonth()+1;
  const day = time.getDate()
  const dayNow = `${day}.${month}.${year}`
  const dayOfTheWeek = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота',]
  let today = dayOfTheWeek[GetDay]
  let weight = this.state.data.weight
  this.setState({
      data:{...this.state.data,weight:''}
    }
  )
  const localHistory = JSON.parse(localStorage.getItem('history'))
  const differentWeight = (Number(weight) - Number((localHistory[localHistory.length-1].weight))).toFixed(1)
  const obj = {dayNow,today,weight,differentWeight}
  const objhistory = [...localHistory,obj]
  localStorage.setItem('history',JSON.stringify(objhistory))
}

  render() {
    const {growth,date,weight,desiredWeight} = this.state.data
    const {flag,history,display,weightAdd,x} = this.state
    return (
      <div className="App">
      {flag && <ModalComponent desiredWeight={desiredWeight} setItemLocal={this.setItemLocal} cancelChanges={this.cancelChanges} growth={growth} weight={weight} date={date} modalData={this.modalData}/>}
      <Header displayChange={this.displayChange}/>
      <Menu imtMan={this.imtMan}/>
      <Switch>
        <Route path='/IMT' render={(props)=><IMT imtMan={this.imtMan}/>}/>
        <Route path='/Weight' render={(props)=><Weight/>}/>
        <Route path='/History' render={(props)=><History history={history}/>}/>
        <Route path='/ModalPlus' render={(props)=><ModalPlus weight={weight}  x={this.x} addWeight={this.addWeight} weightAdd={weightAdd} modalData={this.modalData}/>}/>
      </Switch>
      </div>
    );
  }
}

export default App;
