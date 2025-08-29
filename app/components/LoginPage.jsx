"use client";

import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

/**
 * LoginPage component
 * A Tailwind-styled login screen inspired by the provided mockup.
 * Drop this component into any page and it will render a centered card.
 */
export default function LoginPage({ mode = "login" }) {
  const isRegister = mode === "register";
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-lg p-6 sm:p-8">
        {/* Decorative circles */}
        {/* <div className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full bg-yellow-200/70" />
        <div className="pointer-events-none absolute -top-2 -right-2 h-16 w-16 rounded-full bg-yellow-400" /> */}

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-md font-bold text-gray-600">{isRegister ? "Create Account" : "Login Account"}</p>
            <p className="mt-0.5 text-xs text-gray-400">{isRegister ? "Join tutorsLab to start your journey." : "Welcome back! We missed you."}</p>
          </div>
        </div>

        {/* Brand */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          <span className="text-gray-900">tutors</span>
          <span className="text-yellow-500">Lab</span>
        </h1>

        {/* Form */}
        <form className="mt-6 space-y-3">
          <div>
            <input
              type="email"
              placeholder="Enter email id"
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            />
          </div>
          {isRegister && (
            <div>
              <input
                type="text"
                placeholder="Your full name"
                className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              />
            </div>
          )}
          <div>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            />
          </div>
          {!isRegister && (
            <div className="flex items-center justify-between">
              <Link href="#" className="ml-auto text-xs text-gray-500 hover:text-gray-700">
                Forget Password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-yellow-500 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            {isRegister ? "Create account" : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-500">Or sign up with</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-200 bg-white py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            aria-label="Continue with Google"
          >
            <FcGoogle className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-200 bg-white py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            aria-label="Continue with Facebook"
          >
            <FaFacebookF className="h-5 w-5 text-[#1877F2]" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center rounded-md border border-gray-200 bg-white py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            aria-label="Continue with Apple"
          >
            <FaApple className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-gray-800 hover:underline">Login</Link>
            </>
          ) : (
            <>
              Not registered yet?{" "}
              <Link href="/register" className="font-semibold text-gray-800 hover:underline">Create Account</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}


