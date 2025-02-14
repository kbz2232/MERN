import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo8 = () => {
    const { register, handleSubmit,formState:{ errors} } = useForm()
    console.log("errors..");

    const submitHandler = (data) => {
        console.log(data)

    };
    const validationSchema ={
        nameValidator:{
            required:{
                value:true,
                message:"name is required"
            }
        }
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Monthly Subscription Manager</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>SUBSCRIBER NAME:</label>
                    <input type='text' placeholder='Enter Your Full Name' {...register("subscribername",validationSchema.nameValidator)}></input>
                    <span style={{color:"red"}}>
                        {
                            errors.subscribername?.message
                        }
                    </span>
                </div>




                <div>
                    <label>Active Subscriptions</label><br></br>
                    Netflix:<input type='checkbox' value="netflix"{...register("Active Subscriptions")}></input>
                    Spotify:<input type='checkbox' value="spotify"{...register("Active Subscriptions")}></input>
                    Amazon-Prime:<input type='checkbox' value="amazon-prime"{...register("Active Subscriptions")}></input>
                    Cloud-Storage:<input type='checkbox' value="cloud-storage"{...register("Active Subscriptions")}></input>

                </div>

                <div>
                    <label>Monthly Budget for Subscriptions </label>
                    <select>
                        <option value="$10" {...register("Monthly Budget for Subscriptions")}>$10</option>
                        <option value="$30" {...register("Monthly Budget for Subscriptions")}>$30</option>
                        <option value="$40" {...register("Monthly Budget for Subscriptions")}>$40</option>
                        <option value="s$50" {...register("Monthly Budget for Subscriptions")}>$50</option>

                    </select>
                </div>
                <div>
                    <label>Subscription You Want to Cancel? </label><br></br>
                    YES:<input type='radio' value="yes" {...register("Subscription You Want to Cancel?")}></input>
                    NO:<input type='radio' value="no" {...register("Subscription You Want to Cancel?")}></input>
                    CONSIDERING IT:<input type='radio' value="considering-it" {...register("Subscription You Want to Cancel?")}></input>

                </div>
                <div>
                    <label>Would You Like a Reminder for Subscription Renewals?  </label><br></br>
                    YES:<input type='radio' value="yes" {...register("Subscription You Want to Cancel?")}></input>
                    NO:<input type='radio' value="no" {...register("Subscription You Want to Cancel?")}></input>

                </div>
                <input type='submit'></input>




            </form>

        </div>
    )
}
