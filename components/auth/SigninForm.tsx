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
    console.log("first")
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
      router.replace("/user/dashboard");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <form
      className="account-form verify-gcaptcha"
      onSubmit={form.handleSubmit(OnSubmit)}
    >
      <div className="cmn--form--group form-group">
        <label htmlFor="email" className="cmn--label text--white">
          Email Address
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="las la-user"></i>
          </span>
          <input
            type="email"
            id="email"
            className="form-control cmn--form--control"
            required
            {...form.register("email")}
          />
        </div>
      </div>
      <div className="cmn--form--group form-group">
        <label htmlFor="password" className="cmn--label text--white">
          Password
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="las la-key"></i>
          </span>
          <input
            type="password"
            id="password"
            className="form-control cmn--form--control"
            {...form.register("password")}
            required
          />
        </div>
      </div>
      <div className="cmn--form--group form-group">
        <input
          className="form-check-input"
          type="checkbox"
          name="remember"
          id="remember"
        />
        <label className="form-check-label" htmlFor="remember">
          Remember Me
        </label>
      </div>
      <div className="cmn--form--group form-group">
        <button type="submit" disabled={loading} className="cmn--btn btn-block">
          Sign In
        </button>
      </div>
      <div className="cmn--form--group form-group">
        <div className="d-flex flex-wrap justify-content-between">
          <div className=" text--white d-flex align-items-center">
            <Link href="/user/password/reset" className="text--base">
              Forget Password?
            </Link>
          </div>
          <div className="text--white">
            Don&apos;t have an account?
            <Link href="/auth/sign-up" className="text--base">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SigninForm;
