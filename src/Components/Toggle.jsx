import React from 'react'

const Toggle = ({handleChange, isChecked}) => {
  return (
    <div className='toggle-div'>
            <input type='checkbox' id='check' className='toggle' onChange={handleChange} checked={isChecked}/>
            <label htmlFor="check"> Dark Theme </label>
        </div>
  )
}

export default Toggle
