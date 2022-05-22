import React from 'react'

export default function FormRowSelect({name , labelText , handleChange ,value , list}) {
  return (
    <div className='form-row' >
       <label htmlFor={name} className='form-label' >
          {labelText || name}
       </label>
       <select 
          name={name}
          onChange={handleChange}
          value={value}
          className='form-select'
        >
           {list.map((itemValue , itemIndex)=>{
               return <option key={itemIndex} value={itemValue}>
                 {itemValue}
               </option>
           })}
       </select>
    </div>
  )
}
