import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors");

    const submitHandler =(data)=>{

        console.log(data)
    }
    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is required",
            }
        }
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>BOX PARK</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' placeholder='Enter Name' {...register("name",validationSchema.nameValidator)}></input>
                <span style={{ color: "red" }}>
                            {errors.name?.message}
                        </span>
            </div>
            <div>
                <label>Food-pref</label><br></br>
                VEG:<input type='radio' value="veg" {...register("foodpref")}></input>
                NON-VEG:<input type='radio' value="non-veg" {...register("foodpref")}></input>
                
            </div>
            <div>
              <label>TOPPINGS</label><br></br>
              CHEESE:<input type='checkbox' value="cheese" {...register("toppings")}></input>
              SPICY:<input type='checkbox' value="spicy" {...register("toppings")}></input>
              OLIVES:<input type='checkbox' value="olives" {...register("toppings")}></input>
            </div>
            <div>
                <label>TIME</label>
                <input type='text'{...register("time")}></input>
                
            </div>
            <input type='submit'></input>




        </form>

    </div>
  )
}
