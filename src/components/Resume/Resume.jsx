import React from 'react'
import "./Resume.css"
export const Resume = ()=>{
  return <>
  <div className='container'>
    <h1 className='resume'>Resume</h1>
    <a href="../../../assets/Resume/Resume.pdf" target='_blank' rel='noreferrer' download={"Rudrakumar_Resume"} className='link'>Download</a>
  </div>
  </>
}
