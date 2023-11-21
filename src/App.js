import { useEffect, useState } from "react";
import people from "./data";

function App() {
  const [state,setState] = useState(people);
  const [index,setIndex] = useState(0);
  const {id,image,name,title,quote} = state[index]; 
 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index >= state.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
  return () => clearTimeout(timeoutId);
  }, [index]);

  const previous=()=>{
    if(index <= 0){
      setIndex(state.length - 1)
    }
    else {
      setIndex(index - 1)
    }
  }
  
  const next=()=>{
    if(index >= state.length - 1){
      setIndex(0)
    }
    else {
      setIndex(index + 1)
    }
  }
  return (
    <>
      <div style={{"height":"400px","width":"600px","backgroundColor":"lightblue","margin":"auto","marginTop":"100px","textAlign":"center"}}>
        <>
        
          <img src={image} alt="" style={{"height":"150px","width":"150px","borderRadius":"50%","marginTop":"20px"}}/>
          <div >❞</div>
        
          <div style={{"fontSize":"30px"}}>{name}</div>
          <div>{title}</div>
          <p>{quote}</p>
          <button onClick={previous}>previous</button>
          <button onClick={next}>next</button>
        </>
    </div>
    </>
  );
}

export default App;
