"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_URL } from "@/utils/constants";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const defaultValues = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const router = useRouter();

  async function OnSubmit({ email, password }: z.infer<typeof formSchema>) {
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, options);

      if (!response.ok) {
        console.log("Error");
        setLoading(false);
        return;
      }

      const data = await response.json();
      localStorage.setItem("auth-info", JSON.stringify(data));
      setLoading(false);
      router.replace("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div className="flex-1 mt-36  text-white">
      <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-3 ">
        <div className="bg-[#313144] rounded-lg p-8 flex items-center flex-col gap-4` w-[500px] mx-auto">
          <h2 className="font-bold text-[32px]">Welcome Back</h2>
          <p className="text-[16px] mb-8">
            Dont have an account?{" "}
            <Link href="/sign-up" className="text-[#FFCC00]">
              Sign Up
            </Link>
          </p>

          <input
            type="email"
            placeholder="Email"
            {...form.register("email")}
            className="outline-none border-[1px] bg-[#3C3C54] border-[#3C3C54] w-full mt-4 rounded-md text-[16px] py-3 px-4"
          />
          <input
            type="password"
            {...form.register("password")}
            placeholder="Password"
            className="outline-none border-[1px] bg-[#3C3C54] border-[#3C3C54] w-full mt-4 rounded-md text-[16px] py-3 px-4"
          />
          <div className="flex flex-row justify-start w-full my-2">
            <input type="checkbox" className="mr-2" />
            <p className="text-[16px] my-2 text-start ">Remember me</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#FFCC00] leading-[8px] w-full rounded-md  text-black font-semibold py-4 mt-4"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
