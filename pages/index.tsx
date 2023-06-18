import React,{useState,ChangeEvent} from 'react';
import ButtonComponent from '@/components/button';
import axios from 'axios';


export default function Home() {

  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [json, setJson] = useState({});

  const handleClick =async  () => {
    //generate logic
    let response = await axios.post('./api/addNumbers',{
      num1, num2
    })
    setJson(response.data);

  };

  const handleButtonClick =async  () => {
    //generate logic


  };



  const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setNum1(event.target.value);
  };

  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setNum2(event.target.value);
    
  };

  return (
    <div className='h-full border mx-52 my-4 '>
      <div className='h-12 bg-[#E9E9E9]'>
        <p className='text-[28px] font-bold mx-12'>
          Step Addition
        </p>
      </div>
      <div className='ml-10'>
      <div className='flex my-3 mx-20'>
        <p className='text-[16px] w-36'> First Number:</p>
        <input className='w-full h-10 bg-[#E9E9E9] mr-20 ml-5' type="text" id='num1' value={num1} onChange={handleInputChange1}/>
      </div>

      <div className='flex my-3 mx-20'>
        <p className='text-[16px] w-40'> Second Number:</p>
        <input className='w-full ml-2 h-10 bg-[#E9E9E9] mr-20' type="text" id='num2'value={num2} onChange={handleInputChange2}/>
      </div>

      <div className='flex justify-end mx-40'>
        <button
          className={`border-2 rounded-md w-40 h-10 border-[#A8A8A8] `}
          onClick={handleClick}
        >
          Generate Steps
        </button>
      </div>

      <div className='border-[16px] sm:w-auto w-[790px]  h-80 ml-20 mt-4 mr-20 border-[#E9E9E9] bg-[#232D3E]'>
      <pre className='m-2'>
      {Object.keys(json).length ?<span style={{ color: '#FFEA2F' }}>{'{'}</span>: null}

      {Object.entries(json).map(([key, value]) => (
      <div key={key} className='ml-4'>
        <span style={{ color: '#2FF3FF' }}>{JSON.stringify(key)}<span style={{color: '#FFEA2F'}}>:{' {'}</span> </span>
        <span>
          {Object.entries(value as { [key: string]: unknown }).map(([innerKey, innerValue], index) => (
            <span key={index}>
              <span style={{ color: '#FFEA2F' }}>{JSON.stringify(innerKey)}:</span>
              <span style={{ color: '#FFA654' }}>{JSON.stringify(innerValue)}</span>
              {index%2 ===0 ? <span style={{ color: '#FFEA2F' }}>{','}</span>: <span style={{ color: '#FFEA2F' }}>{'},'}</span>}
              {index !== Object.entries(value as { [key: string]: unknown }).length - 1 && ''}
            </span>
          ))}
        </span>     
        </div>
    ))}
      {Object.keys(json).length ?<span style={{ color: '#FFEA2F' }}>{'}'}</span>: null}
  </pre>
      </div>
      
      <div className='flex justify-end mx-40 mt-4'>
        <ButtonComponent
              text='Save Results to DB'
              onClick={handleButtonClick}
        />
      </div>
        
      </div>
    </div>  )
}
