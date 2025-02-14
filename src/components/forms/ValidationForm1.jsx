import React from "react";
import { useForm } from "react-hook-form";

export const ValidationForm1 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log("errors...");

  const submitHandler = (data) => {
    console.log(data);
  };

  // Corrected validation schema
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
      min: {
        value: 18,
        message: "Min age is 18*",
      },
      max: {
        value: 60,
        message: "Max age is 60*",
      },
    },
    contactValidator:{
        required:{
            value:true,
            message:"contact number in required",
        },
        pattern:{
            value:/[6-9][0-9]{9}/,
            message:"Invalid contact Number",
        }
    },
    emailValidator:{
        required:{
            value:true,
            message:"E-mail is required",
        }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Validation Form</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>ENTER YOUR NAME:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("name", validationSchema.nameValidator)}
          />
          <span style={{color:"red"}}>{errors.name?.message}</span>
        </div>
        <div>
          <label>AGE:</label>
          <input
            type="number"
            placeholder="Enter Your Age"
            {...register("age", validationSchema.ageValidator)}
          />
          <span style={{color:"red"}}>{errors.age?.message}</span>
        </div>
        
        <div>
          <label>CONTACTNUMBER:</label>
          <input
            type="tel"
            placeholder="Enter Your Contactnumber"
            {...register("contactnumber", validationSchema.contactValidator)}
          />
          <span style={{color:"red"}}>{errors.contactnumber?.message}</span>
        </div>
        <div>
            <label>E-MAIL:</label>
            <input
                type="text"
                placeholder="Enter E-mail"
                {...register("email",validationSchema.emailValidator)}></input>
              <span style={{color:"red"}}>
                {
                    errors.email?.message
                }
              </span>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default ValidationForm1;
