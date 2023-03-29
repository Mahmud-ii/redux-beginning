import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export default function IceCreamView() {
  const numOfIceCreams = useSelector(state => state.icecream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock ice creams</button>
    </div>
  )
}
