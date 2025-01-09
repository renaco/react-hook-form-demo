import { Input } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const Child = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <button type="submit">Submit</button>
    </>
  );
};

export default Child;
