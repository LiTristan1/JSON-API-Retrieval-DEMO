import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import Content from './Content';
import Header from './Header';
function App() {
  const [URL,setURL] = useState('https://jsonplaceholder.typicode.com/users');
  const [value,setValue] = useState([])

  function handleClick(number){
    switch(number){
      case 1:{
        setURL('https://jsonplaceholder.typicode.com/users');
        break;
      }
      case 2:{
        setURL('https://jsonplaceholder.typicode.com/posts');
        break;
      }
      case 3:{
        setURL('https://jsonplaceholder.typicode.com/comments');
      }
    }

    
  }
  useEffect(() => {
    console.log("Inside use effect")

    const fetchItems = async() => {
      try{
        const response = await fetch(URL);
        if(!response.ok) throw Error("Did not receive expected data");
        const items = await response.json();
       // console.log(items);  
        
        
        setValue(items);
        console.log("values");
        console.log(value);
         }
      catch(error){
        console.log("Error caught");
      }
      finally{
        console.log("Leaving fetchItems()");
      }
    }

    fetchItems();
  },[URL])

  
  
  
  return (
    <div>
      <Header
        handleClick = {handleClick}
      ></Header>
      <Content
        items = {value}
        
      >

      </Content>
    
    </div>
  );
}

export default App;
