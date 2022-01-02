import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { LoadingButton } from "@mui/lab";

const ValidatedForm = ({ children, defaultValues }: any) => {
  const methods = useForm({ defaultValues });
  const {
    handleSubmit,
    reset,
    watch,
    control,
    register,
    formState: { errors, isSubmitting },
  } = methods;
  const [result, setResult] = useState("");
  const onSubmit = (data: any) => {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        resolve();
        setResult(JSON.stringify(data));
      }, 5000);
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
        {/* <p>{result}</p>
        <LoadingButton loading={isSubmitting} type="submit" variant="contained">
          Submit
        </LoadingButton> */}
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </FormProvider>
  );
};

export default ValidatedForm;
