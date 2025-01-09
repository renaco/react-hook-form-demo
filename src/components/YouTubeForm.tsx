import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

let renderCount = 0;

const countries = [
  { label: "Bangladesh", value: "Bangladesh" },
  { label: "India", value: "India" },
  { label: "China", value: "China" },
  { label: "Finland", value: "Finland" },
];

type FormValues = {
  username: string;
  email: string;
  channel: string;
  country: string;
};

const YouTubeForm = () => {
  const form = useForm<FormValues>();
  const { control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("onSubmit form", data);
  };

  useEffect(() => {
    handleSubmit(onSubmit);
  }, []);

  renderCount++;

  return (
    <div>
      <h1>YouTube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <Controller
            name="username"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Username is required",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                id="username"
                error={!!errors.username}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                id="username"
                error={!!errors.email}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <Controller
            name="channel"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Channel is required",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                id="channel"
                error={!!errors.channel}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <div className="form-control">
          <Controller
            name="country"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Country is required",
              },
            }}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  value={field.value}
                  label="Age"
                  onChange={field.onChange}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.value} value={country.value}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          <p className="error">{errors.country?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      {JSON.stringify(errors)}
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
