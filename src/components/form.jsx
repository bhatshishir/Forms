import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .string()
    .required("age is required")
    .matches(/[0-9]/, "should be digit"),
});

const Form = () => {
  const ref = useRef();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const { errors } = formState;

  return (
    <FormControl>
      <FormLabel htmlFor="name">Enter Name</FormLabel>
      <TextField name="name" {...register("name")}></TextField>
      <p>{errors.name?.message}</p>
      <FormLabel htmlFor="age">Enter Age</FormLabel>
      <TextField
        name="age"
        {...register("age")}
        // fullWidth      //takes full width of parent container
        margin="dense"
        helperText={errors?.age?.message}
      ></TextField>
      {/* <p>{errors.age?.message}</p> */}

      <Button variant="outlined" color="primary">
        Submit
      </Button>
    </FormControl>
    // <form onSubmit={handleSubmit((d) => console.log(d))}>
    //   <label htmlFor="name">Name</label>
    //   <input name="name" {...register("name")} />
    //   <p>{errors.name?.message}</p>
    //   <label htmlFor="age">Age</label>
    //   <input name="age" {...register("age")} />
    //   <p>{errors.age?.message}</p>
    //   <input type="submit" />
    // </form>
  );
};
export default Form;
