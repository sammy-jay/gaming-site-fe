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
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

const defaultValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};
const SignupForm = () => {
  const [, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const router = useRouter();

  async function OnSubmit({
    email,
    username,
    password,
    confirmPassword,
  }: z.infer<typeof formSchema>) {
    setLoading(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    };

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, options);

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
    <div className="flex-1 mt-36 text-white">
      <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-3 ">
        <div className="bg-[#313144] rounded-lg p-8 flex items-center gap-2 flex-col w-[500px] mx-auto">
          <h2 className="font-bold text-[32px]">Welcome</h2>
          <p className="text-[16px] mb-8">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-[#FFCC00]">
              Sign In
            </Link>
          </p>

          <input
            type="email"
            placeholder="Email Address"
            {...form.register("email")}
            className="outline-none border-[1px] bg-[#3C3C54] border-[#3C3C54] w-full mt-4 rounded-md text-[16px] py-3 px-4"
          />
          <input
            type="text"
            placeholder="Username"
            {...form.register("username")}
            className="outline-none border-[1px] bg-[#3C3C54] border-[#3C3C54] w-full mt-4 rounded-md text-[16px] py-3 px-4"
          />
          <input
            type="password"
            placeholder="Password"
            {...form.register("password")}
            className="outline-none border-[1px] bg-[#3C3C54] border-[#3C3C54] w-full mt-4 rounded-md text-[16px] py-3 px-4"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            {...form.register("confirmPassword")}
            className="outline-none border-[1px] bg-[#3C3C54] border-[#3C3C54] w-full mt-4 rounded-md text-[16px] py-3 px-4"
          />

          <button className="bg-[#FFCC00] leading-[8px] w-full rounded-md  text-black font-semibold py-4 mt-4">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
