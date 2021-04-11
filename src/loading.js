import React from 'react';
import {ReactComponent as Loader} from './loader.svg';
import './password.css';

export default function Loading(){
  return(
    <div className="loader-container">
      <h3 className="validating-text">Checking for compromised password</h3>
      <Loader className="svg-loader"/>
    </div>
  )
}