import React, { useEffect } from 'react'
// import { initialState, itemHolderReducer } from './reducers/ItemHolder.reducer'
const Itemholder: React.FC = () => {
  // const [state, dispatch] = useReducer(itemHolderReducer, initialState)

  useEffect(()=>{
    console.log("Itemholder mounted")
  },[])

  return (
    <div className='itemholder'>
        <h1>Itemholder</h1>
    </div>
  )
}

export default Itemholder