
import { useState } from 'react';
import '.././styles.css'

export const Form = ()=> {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });




  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { firstName, lastName, email, password } = formData;

  const items = [
    {
      label: "Action"
    },
    {
      label: "Another Action"
    },
    {
      label: "Something Else"
    }
  ];
 return (
   <div className="items-center justify-center flex flex-col h-screen w-screen">
   {step === 0 ? <div className="flex flex-col">
     
     <h1 className="text-4xl font-bold mb-[100px] text-blue">Welcome to PTRQuill: A personalized Writing assistant</h1>
    
<h1 className="text-2xl font-bold mb-[10px]">Train a customized writing assistant for your users</h1>
    <ul>
        <li>
        Automatic learning based on 'good' set
        </li>
        <li>
        Personalised writing assistant for content publishing companies as well as writing enthusiast
        </li>
        <li>Works for media houses, legal etc

        </li>
        <li>
        Vocabulary bias towards specific categories
        </li>
    </ul>




    
     

<div className="inline-flex items-center justify-center mt-[40px]">


     <button type="submit" onClick={() => {setStep(1)}}>Let's get started</button>
     </div>
   </div> :
   <>{step === 1 ?    
   <>
    <h1 className="text-4xl font-bold mb-[10px]">Step 1: Register Yourself</h1>
    <form>
      <input
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="Company name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData(e)}
        placeholder="Url"
        type="text"
        name="lastName"
        required
      />
      
      <div className="inline-flex items-center justify-center w-full">
      <button type="submit" onClick={() => {setStep(2)}}>Register</button>
      </div>
    </form>
    </>:  <>{step === 2 ?  <><h1 className="text-4xl font-bold mb-[10px]">Step 2: Add training set to finetune</h1>
    <form>
      <input
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="Url to Crawl"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData(e)}
        placeholder="Zip file with articles"
        type="select"
        name="lastName"
        required
      />

      <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="Drive Link"
        type="text"
        name="category"
        required
      />
<div className="inline-flex items-center justify-center w-full">
      <button type="submit" onClick={() => {setStep(3)}}>Submit</button>
      </div>
    </form></> : 
    <h1 className="text-3xl font-bold  text-blue mb-[10px] w-[500px] text-center">
    Thank you<br/>
    Good things arrive slow. We will notify you as soon as your model is trained and ready to use</h1>
     } </>

   }
   
   </>}</div>
   

  ); 
}



