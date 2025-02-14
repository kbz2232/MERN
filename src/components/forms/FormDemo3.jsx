import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
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
        <h1>Trip To MahaKumbh</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' placeholder='Enter Name' {...register("name",validationSchema.nameValidator)}></input>
                <span style={{ color: "red" }}>
                            {errors.name?.message}
                        </span>
            </div>
            <div>
                <label>TRANSPORT</label><br></br>
                TRAIN:<input type='radio' value="train" {...register("transport")}></input>
                BUS:<input type='radio' value="bus" {...register("transport")}></input>
                FLIGHT:<input type='radio' value="flight" {...register("transport")}></input>
            </div>
            <div>
              <label>CHOICE</label><br></br>
              20KM:<input type='checkbox' value="20km" {...register("choice")}></input>
              SWIMMING:<input type='checkbox' value="swim" {...register("choice")}></input>
              GHAR VAPSI:<input type='checkbox' value="gharvapsi" {...register("choice")}></input>
            </div>
            <div>
                <label>CITY</label>
                <select>
                       <option value="delhi" {...register("city")}>DELHI</option>
                       <option value="mumbai" {...register("city")}>MUMBAI</option>
                       <option value="ahmedabad" {...register("city")}>AHMEDABAD</option>

                </select>
            </div>
            <input type='submit'></input>




        </form>

    </div>
  )
}
