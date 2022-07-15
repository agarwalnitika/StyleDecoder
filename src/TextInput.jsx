import {useState} from 'react'
import './App.css';
import axios from 'axios';

function TextInput() {
  const [tone1, setTone1] = useState('Converted Text')
  const [tone2, setTone2] = useState('Converted Text')
  const [tone3, setTone3] = useState('Converted Text')
//   const [loader, setLoader] = useState(false)

  const handleKeyPress = (event) =>{
    console.log(event.target.value, event)
    // setLoader(true)
    if(event.ctrlKey){
      let model = "";
      if(event.keyCode === 37) {
        model = "old"
      } else if (event.keyCode === 39) {
        model ='new';
      }
    axios.post('http://34.172.89.50:8000/get_suggestions', {
      text: event.target.value.trim().length ? event.target.value : '<BOS>',
      model:model,
      max_length:'10'
    }, {
      headers:{  "Access-Control-Allow-Origin": "*",  'Content-Type': 'application/json',}
    })
    .then(function (response) {
    //   setLoader(false)
      console.log(response);
      setTone1(response?.data?.Suggestions[0])
      setTone2(response?.data?.Suggestions[1])
      setTone3(response?.data?.Suggestions[2])
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  }
  return (
  
    <div className="flex h-screen w-screen items-center justify-center">
    <div className="flex gap-[5px]">
      <div className="inline-flex flex-col mr-[85px]">
        <h1 className="text-4xl font-bold mb-[10px]">Input</h1>
        <textarea placeholder="Press Ctrl + -> for new model. Press Ctrl + <- for old model" className="border border-solid border-blue w-[500px] h-[250px] outline-none bg-blue-light text-grey p-[15px] text-xl font-medium rounded-[4px]" style={{resize:'none'}} name="text" onKeyDown={(e) => {
          handleKeyPress(e) 
        }}>
        
        </textarea>
        {/* <div className="inline-flex justify-end mt-[20px] gap-[10px]">
        <div className="cursor-pointer bg-blue text-white w-[147px] h-[36px] items-center justify-center inline-flex text-xl rounded-[4px]" onClick={() => {
        setTone1('People Are Not Happy About Changes To The Starbucks Rewards Program')
      }}>Normal</div>
      <div className="cursor-pointer bg-blue text-white w-[147px] h-[36px] items-center justify-center inline-flex text-xl rounded-[4px]" onClick={() => {
        setTone1('People Are Not Happy About Changes To The Starbucks Rewards Program')
      }}>Buzz</div>
        </div> */}
      </div>
      <div className="inline-flex flex-col justify-start max-w-[350px] w-[350px]">
      <h1 className="text-4xl font-bold mb-[10px]">Output</h1>
      <div className="mb-[40px]">
      <div className="text-xl text-blue font-medium">Tone 1</div>
      <div className="text-xl text-grey  font-medium">{tone1}</div>
      </div>
      <div className="mb-[40px]">
      <div className="text-xl text-blue font-medium">Tone 2</div>
      <div className="text-xl text-grey  font-medium">{tone2}</div>
      </div>
      <div className="mb-[40px]">
      <div className="text-xl text-blue font-medium">Tone 3</div>
      <div className="text-xl text-grey  font-medium">{tone3}</div>
      </div>
      </div>
      </div>
    </div>
  ); 
}

export default TextInput;
