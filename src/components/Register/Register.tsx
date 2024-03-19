"use client";
import * as yup from "yup";
import { Button } from "@nextui-org/react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

interface LoginData {
  nome: string;
  telefone: string;
  cpf: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  nome: yup.string().required("Requer nome completo"),
  email: yup.string().required("Requer email").email("Insira um email válido"),
  password: yup.string().required("Requer senha"),
  passwordConfirmation: yup
    .string()
    .required("Requer confirmação de senha")
    .oneOf([yup.ref("password")], "Senhas devem ser compatíveis"),
  telefone: yup.string().required("Requer telefone"),
  cpf: yup.string().required("Requer CPF"),
});

const FormRegister: React.FC = () => {
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
      <h1 className="-mt-14 lg:mt-0 mb-6 font-bold text-2xl lg:text-white">
        Register
      </h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full flex flex-col gap-4 lg:px-5"
      >
        <div>
          <Label className="lg:text-white flex mb-2">Nome</Label>
          <Input type="text" {...register("nome")} />
          {errors.nome && (
            <p className="text-red-600 text-xs mt-1 font-medium">
              {errors.nome.message}
            </p>
          )}
        </div>
        <div className="flex gap-4">
          <div>
            <Label className="lg:text-white flex mb-2">Telefone</Label>
            <Input type="text" {...register("telefone")} />
            {errors.telefone && (
              <p className="text-red-600 text-xs mt-1 font-medium">
                {errors.telefone.message}
              </p>
            )}
          </div>
          <div>
            <Label className="lg:text-white flex mb-2">CPF</Label>
            <Input type="text" {...register("cpf")} />
            {errors.cpf && (
              <p className="text-red-600 text-xs mt-1 font-medium">
                {errors.cpf.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <Label className="lg:text-white flex mb-2">Email</Label>
          <Input type="text" {...register("email")} />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex gap-4">
          <div>
            <Label className="lg:text-white flex mb-2">Senha</Label>
            <Input type="password" {...register("password")} />
            {errors.password && (
              <p className="text-red-600 text-xs mt-1 font-medium">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <Label className="lg:text-white flex mb-2">Confirmar senha</Label>
            <Input type="password" {...register("passwordConfirmation")} />
            {errors.passwordConfirmation && (
              <p className="text-red-600 text-xs mt-1 font-medium">
                {errors.passwordConfirmation.message}
              </p>
            )}
          </div>
        </div>
        <Button
          className="w-full bg-purple text-white font-semibold mt-3"
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
      <div className="mt-7">
        <span className="text-slate-500 lg:text-white text-sm">
          Já possui cadastro?{" "}
          <Link
            href="/"
            className="font-semibold text-purple hover:text-white duration-400"
          >
            Faça login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FormRegister;
