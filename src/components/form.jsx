import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.string().required("age is required").matches(/[0-9]/,"should be digit"),
  })

const Form = () => {
    const ref=useRef();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode:"onTouched"
  });
  const {errors}=formState;
  console.log(errors);

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <label htmlFor="age">Age</label>
      <input name="age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="submit" />
    </form>
  );
};
export default Form;
