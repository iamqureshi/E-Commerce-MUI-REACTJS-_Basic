import { TextField } from "@mui/material";
import React, { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";

interface IRHFTextFieldProps {
  name: string;
  otherProps: ComponentProps<typeof TextField>
}

export default function RHFTextField(props: IRHFTextFieldProps) {
  const objForm = useFormContext();
  return (
    <>
      <TextField
        error={!!objForm.formState.errors[props.name]}
        helperText={objForm.formState.errors[props.name]?.message?.toString()}
        {...objForm.register(props.name, {required:"this field is required."})}
        {...props.otherProps}
      />
    </>
  );
}
