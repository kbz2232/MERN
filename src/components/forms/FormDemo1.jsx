import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors) // Corrected logging

    const submithandler = (data) => {
        console.log(data)
        setsubmitted(true)
        setoutput(data)
    }
      const [output, setoutput] = useState({})
      const [submitted, setsubmitted] = useState(false)
    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is required",
            },
        },
        ageValidator: {  // Fixed indentation
            required: {
                value: true,
                message: "Age is required",
            },
        },
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>DEMO</h1>
            <div>
                <form onSubmit={handleSubmit(submithandler)}>
                    <div>
                        <label>NAME</label>
                        <input type='text' placeholder='Enter Name' {...register("name", validationSchema.nameValidator)} />
                        <span style={{ color: "red" }}>
                            {errors.name?.message}
                        </span>
                    </div>
                    <div>
                        <label>AGE</label>
                        <input type='number' placeholder='Enter age' {...register("age", validationSchema.ageValidator)} />
                        <span style={{ color: "red" }}>
                            {errors.age?.message}
                        </span>
                    </div>
                    <div>
                        <label>COLOR</label>
                        <input type='color'{...register("color")}></input>
                    </div>
                    <div>
                    <input type='submit' />
                    </div>
                </form>
                {
                    submitted==true?<div style={{color:output.color}}>
                    <h1>NAME:{output.name}</h1>
                    <h1>AGE:{output.age}</h1>
                </div>:""
                }
                
            </div>
        </div>
    )
}
