import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

export default function Loading() {
  return (
    <div className='loading'>
      <div className='loader'>
        <div className='loader-inner'>
          <div className='loader-line-wrap'>
            <div className='loader-line' />
          </div>
          <div className='loader-line-wrap'>
            <div className='loader-line' />
          </div>
          <div className='loader-line-wrap'>
            <div className='loader-line' />
          </div>
          <div className='loader-line-wrap'>
            <div className='loader-line' />
          </div>
          <div className='loader-line-wrap'>
            <div className='loader-line' />
          </div>
        </div>
      </div>
    </div>
  );
}
