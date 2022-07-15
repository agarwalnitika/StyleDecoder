
import { useState } from 'react';
import { Form } from './components/Form';
import './styles.css'
import TextInput from './TextInput';
// import TextInput from './TextInput';

function App() {
  const [step, setStep] = useState(1)
 return (
   <>
  {/* <button type="submit" onClick={() => {
    if(step === 1) {setStep(2)} else {setStep(1)}
  }}>{step ===2 ? 'Text Decoder' : 'Step Form'}</button>
    {step === 1 ? <TextInput/> :<Form/>} */}
    <Form/>
   </>
  ); 
}

export default App;

