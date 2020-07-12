import React, { useContext } from 'react';
import { Store } from '../store';

const Info = () => {
  const _context = useContext(Store);
  console.log('_context: ', _context);
  return (
    <>
      <div>{_context.name}</div>
      <div>{_context.message}</div>
    </>
  )
}

export default Info;