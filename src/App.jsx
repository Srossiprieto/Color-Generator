import './App.css'
import Values from 'values.js'
import {useState}  from 'react'
import FormColor from './components/FormColor'
import DisplayColors from './components/DisplayColors'


function App() {

  const [list, setList] = useState(new Values('#802FDE').all(5))
  console.log(list);

  return (
    <div className='App'>
      <FormColor setList={setList}/>
      <DisplayColors list={list}/>
    </div>
  )
}

export default App
