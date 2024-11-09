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
  confirmPassword: z.string(),
  username: z.string(),
  mobile: z.string(),
});

const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
  username: "",
  mobile: "",
};

const SignupForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const router = useRouter();

  async function OnSubmit({ email, username, password, mobile, confirmPassword }: z.infer<typeof formSchema>) {
    console.log("first");
    setLoading(true);
    if (password!== confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password, mobile }),
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
      
      
      const mutations = [
        {
          create: {
            _type: "userProfile",
            userId: data.user.id,
            email,
            username,
            mobile,
          },
        },
        {
          create: {
            _type: "account",
            userId: data.user.id,
            email,
            username,
            deposit: 0,
            interest: 0,
            totalBalance: 0
          },
        },
      ];

      fetch(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-01-01/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
          },
          body: JSON.stringify({ mutations }),
        }
      )
        .then((response) => console.log(response))
        .then((result) => {
          console.log(result);
          setLoading(false);
          router.replace("/user/user-data");
        })
        .catch((error) => console.error(error));
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
            autoComplete="off"
            {...form.register("email")}
          />
        </div>
      </div>
      <div className="cmn--form--group form-group">
        <label htmlFor="username" className="cmn--label text--white">
          Username
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="las la-at"></i>
          </span>
          <input
            type="text"
            id="username"
            autoComplete="off"
            className="form-control cmn--form--control"
            required
            {...form.register("username")}
          />
        </div>
      </div>
      <div className="cmn--form--group form-group">
        <label htmlFor="mobile" className="cmn--label text--white">
          Mobile Number
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="las la-phone"></i>
          </span>
          <input
            type="text"
            id="mobile"
            autoComplete="off"
            className="form-control cmn--form--control"
            required
            {...form.register("mobile")}
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
            autoComplete="off"
            className="form-control cmn--form--control"
            {...form.register("password")}
            required
          />
        </div>
      </div>

      <div className="cmn--form--group form-group">
        <label htmlFor="password" className="cmn--label text--white">
          Confirm Password
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="las la-key"></i>
          </span>
          <input
            type="password"
            id="confirmPassword"
            className="form-control cmn--form--control"
            {...form.register("confirmPassword")}
            required
          />
        </div>
      </div>

      <div className="cmn--form--group form-group">
        <input
          className="form-check-input"
          type="checkbox"
          name="agree"
          id="agree"
        />
        <label className="form-check-label" htmlFor="agree">
          I agree to the terms and conditions
        </label>
      </div>
      <div className="cmn--form--group form-group">
        <button type="submit" disabled={loading} className="cmn--btn btn-block">
          Sign Up
        </button>
      </div>
      <div className="cmn--form--group form-group">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="text--white">
            Already have an account?
            <Link href="/auth/sign-in" className="text--base">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
