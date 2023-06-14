import React from "react";
import "./style.css";

import toast, {Toaster} from 'react-hot-toast';

export default function App() {
  const onClickHandler = () => {
    toast.success('Api data succcessfully received!', {
      duration: 4000,
      position: 'top-left',

      // Custom Icon
      icon: '👏',
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }

  const onClickSuccessHandler = () => {
    toast.success('Custom toast message!', {
      duration: 4000,
      position: 'top-left',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
      // styling
      style: {
        border: '1px solid #000000',
        padding: '5px 10px',
        color: '#000000',
        // minWidth: '300px'
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }

  const onClickErrorHandler = () => {
    toast.error('Api data posting error!', {
      duration: 4000,
      position: 'top-left',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#f00',
        secondary: '#fff',
      },
      // styling
      style: {
        border: '1px solid #713200',
        padding: '5px 10px',
        color: '#713200',
        // minWidth: '300px'
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }

  const onClickLoadingHandler = () => {
    toast.loading('Api data posting error!', {
      duration: 4000,
      position: 'top-left',

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#00f',
        secondary: '#fff',
      },
      // styling
      style: {
        border: '1px solid #713200',
        padding: '5px 10px',
        color: '#713200',
        // minWidth: '300px'
      },
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  } 

  const onClickPromiseHandler = () => {
    const apiPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data: 'okay'});
        // reject(new Error('System error!'));
        },4000);
      }); 

      toast.promise(apiPromise, {
        loading: 'Loading',
        success: 'Got the data',
        error: 'Error when fetching',
      },
      {
        duration: 10000,
        position: 'top-left',

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#0ff',
          secondary: '#fff',
        },
        // styling
        style: {
          border: '1px solid #713200',
          padding: '5px 10px',
          color: '#713200',
          minWidth: '200px'
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      }
    );
  } 

  return (
    <div>
      <h1>React Hot Toast</h1>
      <p>Toast demostaration</p>

      <div>
        <button onClick={onClickHandler}>Click for toast message</button>
      </div>

      <div>
        <button onClick={onClickSuccessHandler}>Click for toast.success message</button>
      </div>
      <div>
        <button onClick={onClickErrorHandler}>Click for toast.error message</button>
      </div>
      <div>
        <button onClick={onClickLoadingHandler}>Click for toast.loading message</button>
      </div>
      <div>
        <button onClick={onClickPromiseHandler}>Click for toast.promise message</button>
      </div>      

      <Toaster />
    </div>
  );
}
