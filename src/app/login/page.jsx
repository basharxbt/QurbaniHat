"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { Slide, toast } from "react-toastify";
import Link from "next/link";
const LoginPage = () => {
  const singIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData);
    const { email, password } = userInfo;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(`Invalid Email And Password`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      return;
    }
    toast.success(`Login Success`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };
  return (
    <div className="h-screen ">
      <div className="flex p-10 flex-col items-center justify-center ">
        <div className="my-5 text-center space-y-2">
          <p className="font-semibold text-gray-500 mt-1 text-xl ">
            Welcome Back !
          </p>
        </div>
        <div className="p-5 rounded-2xl border border-gray-200 flex flex-col items-center w-full md:w-120 ">
          <h2 className="font-semibold mb-5 text-2xl">Login In your account</h2>
          <Form className="flex  flex-col gap-4 w-full" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="Enter Your Email Address" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={4}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 4) {
                  return "Password must be at least 4 characters";
                }

                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>Must be at least 4 characters</Description>
              <FieldError />
            </TextField>

            <Button
              className="btn w-full bg-amber-600 text-white"
              type="submit"
            >
              Login
            </Button>
            <h2 className="text-amber-600 font-bold text-center">OR</h2>

            <div className="w-full">
              <button
                type="button"
                onClick={singIn}
                className="btn bg-white text-black border-[#e5e5e5] w-full"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Continue with Google
              </button>
            </div>

            <p>
              Don’t have an account?
              <span>
                {" "}
                <Link
                  className="text-amber-700 hover:underline"
                  href="/register"
                >
                  Register
                </Link>
              </span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
