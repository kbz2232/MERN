import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors")

    const submitHandler =(data)=>{
        console.log(data)

    }
    const validationSchema ={
        nameValidator: {
            required: {
              value: true,
              message: "Name is required",
            },
          },
          ageValidator: {
            required: {
              value: true,
              message: "Age is required",
            },
            min: {
              value: 18,
              message: "Min age is 18*",
    }
}
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Fitness Goal Tracker Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>FULL NAME:</label>
                <input type='text' placeholder='Enter Your Full Name' {...register("fullname",validationSchema.nameValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.fullname?.message}
                </span>
            </div>
            <div>
                <label>AGE:</label>
                <input type='number' placeholder='Enter Your Age' {...register("age",validationSchema.ageValidator)}></input>
                <span style={{color:"red"}}>
                    {errors.age?.message}
                </span>
            </div>
            <div>
                    <label>What is your primary fitness goal?</label><br></br>
                    Weight Loss:<input type='radio' value="weightloss" {...register("What is your primary fitness goal?")}></input>
                    Muscle Gain:<input type='radio' value="musclegain" {...register("What is your primary fitness goal?")}></input>
                    General Fitness:<input type='radio' value="generalfitness" {...register("What is your primary fitness goal?")}></input>
    
                </div>
                <div>
                <label>Preferred Workout Time?</label>
                <select>
                       <option value="morning" {...register("Preferred Workout Time?")}>MORNING</option>
                       <option value="afternoon" {...register("Preferred Workout Time?")}>AFTERNOON</option>
                       <option value="evening" {...register("Preferred Workout Time?")}>EVENING</option>
                       <option value="night" {...register("Preferred Workout Time?")}>NIGHT</option>

                </select>
            </div>
                <div>
                    <label>Do you have any diet preferences or restrictions?</label><br></br>
                    Veg:<input type='checkbox' value="veg"{...register("Do you have any diet preferences or restrictions?")}></input>
                    Vegan:<input type='checkbox' value="vegan"{...register("Do you have any diet preferences or restrictions?")}></input>
                    Gluten-Free:<input type='checkbox' value="glutenfree"{...register("Do you have any diet preferences or restrictions?")}></input>
                    No Restrictions:<input type='checkbox' value="norestrictions"{...register("Do you have any diet preferences or restrictions?")}></input>
                </div>
                <input type='submit'></input>




        </form>

    </div>
  )
}
