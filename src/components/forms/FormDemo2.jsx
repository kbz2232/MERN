import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const { register, handleSubmit,formState:{errors} } = useForm()
    console.log("errors");

    const submithandler = (data) => {
        console.log(data)
    }
    const validationSchema = {
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
        },
        budgetValidator:{
            required:{
                value:true,
                message:"budget is required"
            },
            min:{
                value:100000,
                message:"min needed",
            },
            max:{
                value:1000000,
                message:"max needed",
            }
        }
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Trip To GOA</h1>
            <div>
                <form onSubmit={handleSubmit(submithandler)}>
                    <div>
                        <label>NAME</label>
                        <input type='text' placeholder='Enter Name'{...register("name",validationSchema.nameValidator)}></input>
                        <span style={{ color: "red" }}>
                            {errors.name?.message}
                        </span>
                    </div>
                    <div>
                        <label>AGE</label>
                        <input type='number' placeholder='Enter age'{...register("age",validationSchema.ageValidator)}></input>
                        <span style={{ color: "red" }}>
                            {errors.age?.message}
                        </span>
                        
                    </div>
                    <div>
                        <label>BUDGET</label>
                        <input type='number' placeholder='Enter budget' {...register("budget",validationSchema.budgetValidator)}></input>
                        <span style={{ color: "red" }}>
                            {errors.budget?.message}
                        </span>
                        </div>
                        <div>
                     <label>GENDER</label><br></br>
                     MALE:<input type='radio' value="male" name='gender' {...register("gender")}></input>
                     FEMALE:<input type='radio' value="female" name='gender' {...register("gender")}></input>
                     OTHERS:<input type='radio' value="others" name='gender' {...register("gender")}></input>
                    </div>
                    
                    <input type='submit'></input>









                </form>






            </div>




        </div>
    )
}
