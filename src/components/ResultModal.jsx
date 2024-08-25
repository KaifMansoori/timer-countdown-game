import React from 'react'
import { forwardRef,remainingTime, useImperativeHandle, useRef } from 'react';

const ResultModal= forwardRef(function ResultModal({remainingTime, targetTime}, ref) {
  const dialog= useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime=(remainingTime/1000).toFixed(2);
  const score=Math.round((1-remainingTime/(targetTime*1000))*100)
  useImperativeHandle(ref, ()=>{
    return {
      open(){
        dialog.current.showModal();
      }
    }
  })
  return (
    <dialog ref={dialog} className='result-modal'>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your Scroe: {score}</h2>}
        <p>The Target time was <strong>{targetTime} seconds.</strong></p>
        <p>You Stop the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method='dilaog'><button>Close</button></form>
    </dialog>
  )
});

export default ResultModal;