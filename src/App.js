import { useRef, useState } from "react";

function App() {

  const [time,setTime] = useState(0);
  const [flag,setFlag] = useState(false)
  const intervalId = useRef(null);

  const formatTime = (time)=>{
    const minutes = Math.floor(time/60);
    const seconds = time%60

    if(seconds<10){
      return (minutes+":"+"0"+seconds);
    }

    return (minutes+":"+seconds);
  }

  const handleStart = ()=>{

    if (!flag){

      setFlag(!flag)
      intervalId.current = setInterval(()=>
        setTime(time=>time+1)
    
        ,1000)

      }

      else{

        
          clearInterval(intervalId.current)
          setFlag(!flag)

      }

    }


    const handleReset = ()=>{
      clearInterval(intervalId.current);
      setFlag(false);
      setTime(0)
    }
    
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time :{formatTime(time)}</p>
      <button onClick={()=>handleStart()}>
        {flag?"Stop":"Start"}
      </button>
      <button onClick={handleReset}>
      Reset
      </button>
    </div>
  );
}

export default App;
