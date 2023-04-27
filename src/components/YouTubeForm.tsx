import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const YouTubeForm = () => {

  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log('onSubmit form', data)
  }

  renderCount++

  return (
    <div>
      <h1>YouTube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">

          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username", {
            required: {
              value: true,
              message: 'Username is required',
            },
          })} />
          <p className='error'>{errors.username?.message}</p>
        </div>

        <div className="form-control">

          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            }
          })} />
          <p className='error'>{errors.email?.message}</p>
        </div>

        <div className="form-control">

          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel", {
            required: {
              value: true,
              message: 'Channel is required',
            },
          })} />
          <p className='error'>{errors.channel?.message}</p>

        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YouTubeForm
