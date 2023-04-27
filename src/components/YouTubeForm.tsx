import React from 'react';
import { useForm } from 'react-hook-form';

const YouTubeForm = () => {

  const form = useForm();
  // const { register, handleSubmit, errors } = form;
  // const { name, ref, onChange, onBlur } = register("username");
  const { register } = form;
 
  return (
    <div>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default YouTubeForm
