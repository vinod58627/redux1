
import React from 'react'

export default function F1() {
  return (<div>
    
    <h1 className="text-center">Form Data Handling ☰</h1>
    
    
    
    
    
    </div>
  )
}
/*import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register('name', { required: true, maxLength: 30 })} />
      {errors.name && errors.name.type === "required" && <span>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }
      <input type="submit" />
    </form>
  );
}*/
