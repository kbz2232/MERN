import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormDemo5 = () => {
    const { register, handleSubmit,formState:{errors} } = useForm()
    console.log("errors");

    const submitHandler = (data) => {
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
        <div style={{ textAlign: 'center' }}>
            <h1>Personal Finance Budgeting Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>ENTER YOUR NAME:</label>
                    <input type='text' placeholder='Enter Your Name'{...register("name",validationSchema.nameValidator)}></input>
                    <span style={{ color: "red" }}>
                            {errors.name?.message}
                        </span>
                </div>
                <label>Monthly Income Range</label>
                <select>
                       <option value="$10" {...register("Monthly Income Range")}>$10</option>
                       <option value="$100" {...register("Monthly Income Range")}>$100</option>
                       <option value="$5000" {...register("Monthly Income Range")}>$5000</option>
                       <option value="$50000" {...register("Monthly Income Range")}>$50000</option>

                </select>
                <div>
                    <label>Biggest Expense Category:</label><br></br>
                    Rent:<input type='radio' value="rent" {...register("Biggest Expense Category:")}></input>
                    Groceries:<input type='radio' value="groceries" {...register("Biggest Expense Category:")}></input>
                    Entertainment:<input type='radio' value="entertainment" {...register("Biggest Expense Category:")}></input>
                    Shopping:<input type='radio' value="shopping" {...register("Biggest Expense Category:")}></input>
                    Travel:<input type='radio' value="travel" {...register("Biggest Expense Category:")}></input>
                </div>
                <div>
                    <label>How do you track expenses? </label><br></br>
                    Spradsheet:<input type='checkbox' value="spradsheet"{...register("How do you track expenses?")}></input>
                    Budgeting App:<input type='checkbox' value="budgetingapp"{...register("How do you track expenses?")}></input>
                    Notebook:<input type='checkbox' value="notebook"{...register("How do you track expenses?")}></input>
                    Don't Track:<input type='checkbox' value="donttrack"{...register("How do you track expenses?")}></input>
                    

                </div>
                <div>
                    <label>Would you like financial tips sent to you?  </label><br></br>
                    YES:<input type='radio' value="yes" {...register("Would you like financial tips sent to you?")}></input>
                    NO:<input type='radio' value="no" {...register("Would you like financial tips sent to you?")}></input>

                </div>
                
                <input type='submit'></input>




            </form>

        </div>
    )
}
