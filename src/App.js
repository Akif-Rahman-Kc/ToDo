import './App.css'
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  var today = new Date()
  var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() ;
  return (
    <div className="app">
      <div className='firstPart'>
        <div className="mainHeading">
          <h1>ToDo List</h1>
          <hr/>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {date} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => { setToDos([...toDos, { id: Date.now(), name: toDo, status: false }]) }} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {
            toDos.map((obj) => {
              return (
                <div className="todo" key={obj.id}>
                  <div className="left">
                    <input onChange={(e) => {
                      setToDos(toDos.filter(obj2 => {
                        if (obj2.id === obj.id) {
                          console.log(e.target.checked);
                          obj2.status = e.target.checked
                        }
                        return obj2
                      }))
                    }} value={obj.status} type="checkbox" name="" id="" />
                    <p>{obj.name}</p>
                  </div>
                  <div className="right">
                    <i className="fas fa-times" id='delete' onClick={()=>setToDos(toDos.filter((delObj)=>{
                      if(delObj.id == obj.id){
                        delObj = null
                      }
                      return delObj
                    }))}></i>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='secondPart'>
          <h1>Completed Task</h1>
          <hr/>
          <br/>
          {toDos.map((obj) => {
            if (obj.status) {
              console.log(obj);
              return (
                <div>
                  <h2 style={{color:'#11cb11'}}>{obj.name}</h2>
                </div>
              )
            }
          })}
        </div>
    </div>
  );
}

export default App;
