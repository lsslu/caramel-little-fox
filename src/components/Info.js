import React, { useContext } from 'react';
import { Store } from '../store';
import * as constants from '../common/contants';

const sandy = { name: 'sandy' }
let { name } = sandy;

const Info = () => {
  const _context = useContext(Store);
  console.log('_context: ', _context);
  // constants._env = 'info'
  // setEnv('info')
  name = 'lss'
  console.log(name)
  return (
    <>
      <div>{_context.name}</div>
      <div>{_context.message}</div>
    </>
  )
}

export default Info;