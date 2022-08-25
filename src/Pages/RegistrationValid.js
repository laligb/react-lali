import React from 'react'
import {useForm} from 'react-hook-form'
function RegistrationValid() {
    const {register, handleSubmit, formState: { errors }}=useForm()
    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register('firstname',
                {
                    required:'Please, input your name',
                    maxLength:{
                        value:20,
                        message:'Max symbols 20'
                    }
                }
            )}/>
            <p>{errors.firstname?.message}</p>
            <input
                 type='email'{...register('email')}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default RegistrationValid
