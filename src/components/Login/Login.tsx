"use client";
import { Button } from "@nextui-org/react";
import { Button as ButtonCDN } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
        className="w-full flex flex-col gap-4"
      >
        <div>
          <Label className="lg:text-white">Email</Label>
          <Input type="text" {...register("email")} />
          {errors.email && (
            <p className="text-red-600 text-xs mt-3 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label className="lg:text-white">Senha</Label>
          <Input type="password" {...register("password")} />
          <div className="flex justify-between items-center mt-3">
            <p className="text-red-600 text-xs font-medium">
              {errors.password?.message ? errors.password.message : ""}
            </p>
            <Link
              href="#"
              className="text-xs flex lg:text-white hover:text-purple font-medium"
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
      <ButtonCDN
        className="w-full font-semibold mt-5 lg:text-white text-purple border-2 border-purple lg:border-white hover:text-purple hover:bg-[#5824a659] hover:border-none rounded-xl hover:duration-500"
        variant="ghost"
        type="button"
      >
        Cadastrar
      </ButtonCDN>{" "}
    </div>
  );
};

export default FormLogin;
