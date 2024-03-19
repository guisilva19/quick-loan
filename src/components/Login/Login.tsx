"use client";
import * as yup from "yup";
import { Button } from "@nextui-org/react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

interface LoginData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Requer email").email("Insira um email válido"),
  password: yup.string().required("Requer senha"),
});

const FormLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: LoginData) => {
    console.log(data);
  };

  return (
    <div className="w-11/12 flex flex-col items-center">
      <h1 className="-mt-14 lg:mt-0 mb-8 font-bold text-2xl lg:text-white">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full flex flex-col gap-4 lg:px-5"
      >
        <div>
          <Label className="lg:text-white flex mb-2">Email</Label>
          <Input type="text" {...register("email")} />
          {errors.email && (
            <p className="text-red-600 text-sm mt-2 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label className="lg:text-white flex mb-2">Senha</Label>
          <Input type="password" {...register("password")} />
          <div className="flex justify-between items-center mt-2">
            <p className="text-red-600 text-sm font-medium">
              {errors.password?.message ? errors.password.message : ""}
            </p>
            <Link
              href="#"
              className="text-xs flex lg:text-white hover:text-purple font-medium duration-400"
            >
              Esqueceu sua senha?
            </Link>
          </div>
        </div>
        <Button
          className="w-full bg-purple text-white font-semibold mt-3"
          type="submit"
        >
          Entrar
        </Button>
      </form>
      <div className="mt-7">
        <span className="text-slate-500 lg:text-white text-sm">
          Ainda não possui cadastro?{" "}
          <Link
            href="/cadastrar"
            className="font-semibold text-purple hover:text-white duration-400"
          >
            Cadastrar-se
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FormLogin;
