import * as yup from 'yup';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "react-bootstrap/Button";
import React from "react";
import {AuthToken} from "./openapi-generated/src";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(8),
});

export function Login({session, authApiService, login}) {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async data => {
    try {
      const resp = await authApiService.createAuthToken({
        authToken: AuthToken.constructFromObject(data),
      });
      login(resp.token);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input value='admin' {...register("username", {required: true, maxLength: 20})} />
      <p>{errors.username?.message}</p>
      <input value='password' {...register("password", {required: true})} />
      <p>{errors.password?.message}</p>
      <Button onClick={handleSubmit(onSubmit)}>Hello</Button>
    </form>
  );
}
