import './App.css';
import React from 'react';
import useFetch from './useFetch';

function App() {
  const [data, loading, error] = useFetch("https://jsonplaceholder.typicode.com/photos");

  if (error) {
    console.log(error);
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="flex justify-center items-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >
            Loading...
          </span>
        </div>
      </div>
    );
  }
  

  return (
    <div className='bg-yellow-200'>
      <div className='bg-slate-500 text-white flex justify-center p-5 text-center text-xl'>
        <b>Photos</b>
      </div>
      <div className='flex flex-wrap justify-center'>
        {data && data.map((item) => (
          <div className='bg-white m-2 p-2 flex flex-col items-center flex-grow-0' style={{ flexBasis: 'calc(25% - 16px)' }} key={item.id}>
            <img src={item.thumbnailUrl} alt={item.title} className='w-32 h-32 object-cover' />
            <h3 className='text-center mt-2 break-words'>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;