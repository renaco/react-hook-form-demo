import { FormProvider, useForm } from "react-hook-form";
import Child from "./Child";

export const Parent = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log("data from child ", data);
  };

  return (
    <div>
      <h1>Parent</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Child />
        </form>
      </FormProvider>
    </div>
  );
};
