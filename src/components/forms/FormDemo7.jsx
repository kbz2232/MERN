import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors");

    const submitHandler =(data)=>{
        console.log(data)

    }
    const validationSchema={
        nameValidator:{
            required:{
                value:true,
                message:"Name is required"
            }
        },
        experienceValidator:{
            required:{
                value:true,
                message:"Experience is required"
            }
        }
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Job Application Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>FULL NAME:</label>
                <input type='text' placeholder='Enter Your Full Name' {...register("fullname",validationSchema.nameValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.fullname?.message}
                </span>
            </div>
            <div>
                <label>Years of Experience:</label>
                <input type='number' placeholder='Enter Years of Experience' {...register("Yearsofexperience",validationSchema.experienceValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.Yearsofexperience?.message}
                </span>
            </div>
            <div>
                    <label>Preferred Work Environment </label><br></br>
                    REMOTE:<input type='radio' value="remote" {...register("Preferred Work Environment")}></input>
                    OFFICE:<input type='radio' value="office" {...register("Preferred Work Environment")}></input>
                    CO-WORKING SPACE:<input type='radio' value="co-working space" {...register("Preferred Work Environment")}></input>
    
                </div>
                <div>
                <label>What is your dream job?</label>
                <select>
                       <option value="ceo" {...register("What is your dream job?")}>CEO</option>
                       <option value="designer" {...register("What is your dream job?")}>DESIGNER</option>
                       <option value="engineer" {...register("What is your dream job?")}>ENGINEER</option>
                       <option value="scientist" {...register("What is your dream job?")}>SCIENTIST</option>

                </select>
            </div>
                <div>
                    <label>Key Skills </label><br></br>
                    Coding:<input type='checkbox' value="coding"{...register("Key Skills ")}></input>
                    Marketing:<input type='checkbox' value="marketing"{...register("Key Skills ")}></input>
                    Problem-Solving:<input type='checkbox' value="problem-solving"{...register("Key Skills ")}></input>
                   
                </div>
                <input type='submit'></input>




        </form>

    </div>
  )
}
