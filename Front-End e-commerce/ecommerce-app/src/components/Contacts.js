import { ClassNames } from '@emotion/react';
import React, { useState } from 'react';

function Contacts() {
  const [email, setEmail] = useState('colaiera@gmail.com');

  return (
    <div className='bg-white rounded-lg border-4 border-red-500 opacity-50 mt-20 p-4'>
      <h1 className='text-center text-black lg:text-2xl xl:text-3xl '>
        This is a demo website, unfortunately, you cannot buy cigars and whiskey!
      </h1>

      <div className='mt-4 flex justify-center items-center'>
        <label htmlFor='email' className='block text-black text-sm font-semibold'>
          Send me a message: <a href={`mailto:${email}`} style={{ textDecoration: 'underline' }}>{email}</a>
        </label>
      </div>
    </div>
  );
}

export default Contacts;
