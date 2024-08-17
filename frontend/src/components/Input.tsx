import React from 'react'

type InputProps = {
    value: string,
    setValue: (value: string) => void
    }

const Input = ({value, setValue}: InputProps) => {
  return (
    <>
        <input type="text" placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  )
}

export default Input