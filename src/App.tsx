import React, { FC } from 'react';
import { Lydian } from './components/Lydian';
import './assets/scss/style.scss';

export const App: FC = () => {
  return (
    <div className='App'>
      <Lydian />
    </div>
  );
};
