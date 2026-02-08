import type React from "react";
import { AuthLeftSection } from "../components/AuthLeftSection";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";

export const LoginPage: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <div className="custom-grid template">
            <div className="col-span-6">
                <AuthLeftSection />
            </div>
            <div className="col-span-6 flex justify-center items-center">
                <section className="template flex justify-center items-center">
                    <div className="custom-grid gap-vertical max-w-[95%]">
                        <div className="col-span-12 text-mutedForeground text-center">
                            <h2 className="text-3xl text-foreground font-medium">Welcome back</h2>
                            <label className="text-mutedForeground"> Sign in to continue your conversations </label>
                        </div>
                        <div className="col-span-12">
                            <form>
                                <label htmlFor="email" className="lable-auth"> Email address </label>
                                <div className="relative mb-4 py-2">
                                    <Mail className="absolute text-mutedForeground top-1/2 left-4 -translate-y-1/2 w-5 h-5" />
                                    <input name="email" className="input-auth pl-12" placeholder="you@example.com" />
                                </div>
                                <label htmlFor="email" className="lable-auth mb-2"> Password </label>
                                <div className="relative py-2">
                                    <Lock className="text-mutedForeground w-5 h-5 -translate-y-1/2 absolute top-1/2 left-4" />
                                    <input className="input-auth pl-12 pr-12" type={isPasswordVisible ? "text" : "password"} placeholder="Password" />
                                    {isPasswordVisible ?
                                        <button type="button" onClick={() => { setIsPasswordVisible(false) }}><EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-mutedForeground w-5 h-5 cursor-pointer" /></button> :
                                        <button type="button" onClick={() => { setIsPasswordVisible(true) }}><Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-mutedForeground w-5 h-5 cursor-pointer" /></button>
                                    }
                                </div>
                                <div className="py-2">
                                    <button className="btn-primary font-medium w-full py-3 rounded-xl">
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-span-12 text-mutedForeground">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-border" />
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-4 bg-background text-muted-foreground">
                                        or continue with
                                    </span>
                                </div>
                            </div>
                            <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=327042154483-9rvi6lau4heiom252kn6b4vc0h0j1dr0.apps.googleusercontent.com&redirect_uri=http://localhost:8080/oauth/google&response_type=code&scope=email%20profile">
                                <button type="button" className="btn-sso mt-10">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                    Continue with Google
                                </button>
                            </a>
                        </div>
                        <div className="col-span-12 text-center">
                            <label className="text-mutedForeground ">
                                Don't have an account?
                                <span className="text-primary">{` Sign up for free`}</span>
                            </label>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}