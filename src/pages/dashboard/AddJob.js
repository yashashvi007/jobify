import React from 'react'
import { FormRowSelect, FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

export default function AddJob() {
  const {
    showAlert , 
    displayAlert , 
    position , 
    company , 
    jobLocation , 
    jobType , 
    jobTypeOptions , 
    status , 
    statusOptions , isEditing  , 
    handleChange , 
    clearValues , 
    createJob , 
    editJob
   } =  useAppContext()

   const handleSubmit = e => {
     e.preventDefault()

     if(!position || !company || !jobLocation ){
       displayAlert()
       return 
      }

     if(isEditing){
       editJob()
       return 
     }

     createJob()
   }

   const handleJobInput = (e)=>{
     const name = e.target.name
     const value = e.target.value
     handleChange({name , value})
   }

  return (
    <Wrapper>
      <form className='form'  >
         <h3>{isEditing ? 'edit job' : 'add job'}</h3>
         {showAlert && <Alert/> }
         <div className='form-center' >
           <FormRow type='text' name='position' value={position} handleChange={handleJobInput}   />
           <FormRow type='text' name='company' value={company} handleChange={handleJobInput}   />
           <FormRow type='text' name='jobLocation' labelText='job location' value={jobLocation} handleChange={handleJobInput}   />
           <FormRowSelect name='status' value={status} handleChange={handleJobInput} list={statusOptions} />
           <FormRowSelect name='jobType' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />
           <div className='btn-container' >
              <button type='submit' onClick={handleSubmit} className='btn btn-block submit-btn' >
                submit
              </button>
              <button className='btn btn-block clear-btn' onClick={(e)=>{
                 e.preventDefault()
                 clearValues()
              }} >
                clear
              </button>
           </div>
         </div>
      </form>
    </Wrapper>
  )
}
