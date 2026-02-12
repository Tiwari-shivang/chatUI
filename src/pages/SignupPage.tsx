import type React from "react";
import { AuthLeftSection } from "../components/AuthLeftSection";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Calendar, Users } from "lucide-react";

const Page0: React.FC = () => {
    return (
        <form>
            <div className="custom-grid gap-3">
                <div className="col-span-6">
                    <label className="lable-auth">First name</label>
                    <div className="relative py-2">
                        <User className="absolute top-1/2 -translate-y-1/2 left-4 text-mutedForeground" />
                        <input placeholder="Shivang" name="firstName" className="input-auth pl-12" />
                    </div>
                </div>
                <div className="col-span-6">
                    <label className="lable-auth">Last name</label>
                    <div className="relative py-2">
                        <input placeholder="Tiwari" name="lastName" className="input-auth" />
                    </div>
                </div>
                <div className="col-span-12">
                    <label className="lable-auth">Username</label>
                    <div className="relative py-2">
                        <span className="absolute text-[20px] top-1/2 -translate-y-1/2 left-4 text-mutedForeground">@</span>
                        <input name="userName" className="input-auth pl-10" placeholder="shivang424" />
                    </div>
                </div>
                <div className="col-span-12">
                    <button type="submit" className="btn-primary py-3 rounded-xl w-full font-medium">Continue</button>
                </div>
                <div className="col-span-12 mt-5 text-mutedForeground">
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
                </div>
                <div className="col-span-12 text-center">
                    <label className="text-mutedForeground ">
                        Already have an account?
                        <span className="text-primary">{` Sign in`}</span>
                    </label>
                </div>
                <div className="col-span-12 text-center">
                    <label className="text-mutedForeground text-sm">
                        By signing up, you agree to our
                        <span className="text-primary">{` Terms of services `}</span>
                        and 
                        <span className="text-primary">{` privacy policy.`}</span>
                    </label>
                </div>
            </div>
        </form>
    )
}

const Page1: React.FC = () => {
    return (
        <form>
            <div className="custom-grid gap-3">
                <div className="col-span-12">
                    <label className="lable-auth">Email</label>
                    <div className="relative py-2">
                        <Mail className="absolute top-1/2 -translate-y-1/2 left-4 text-mutedForeground" />
                        <input placeholder="Shivang" name="firstName" className="input-auth pl-12" />
                    </div>
                </div>
                <div className="col-span-12">
                    <label className="lable-auth">Password</label>
                    <div className="relative py-2">
                        <Lock className="absolute top-1/2 -translate-y-1/2 left-4 text-mutedForeground" />
                        <input placeholder="Enter password" name="lastName" className="input-auth pl-12" />
                    </div>
                </div>
                <div className="col-span-12">
                    <label className="lable-auth">Confirm password</label>
                    <div className="relative py-2">
                        <Lock className="absolute top-1/2 -translate-y-1/2 left-4 text-mutedForeground" />
                        <input placeholder="Enter password" name="lastName" className="input-auth pl-12" />
                    </div>
                </div>
                <div className="col-span-6">
                    <label className="lable-auth">Gender</label>
                    <div className="relative py-2">
                        <Users className="absolute top-1/2 -translate-y-1/2 left-4 text-mutedForeground" />
                        <input placeholder="Shivang" name="firstName" className="input-auth pl-12" />
                    </div>
                </div>
                <div className="col-span-6">
                    <label className="lable-auth">Date of birth</label>
                    <div className="relative py-2">
                        <Calendar className="absolute top-1/2 -translate-y-1/2 left-4 text-mutedForeground" />
                        <input placeholder="Shivang" name="firstName" className="input-auth pl-12" />
                    </div>
                </div>
                <div className="col-span-6">
                    <button type="button" className="btn-secondary py-3 rounded-xl w-full font-medium">Back</button>
                </div>
                <div className="col-span-6">
                    <button type="button" className="btn-primary py-3 rounded-xl w-full font-medium">Create Account</button>
                </div>
            </div>
        </form>
    )
}

const SignUp: React.FC = () => {
    const [pageNo, setPageNo] = useState(0);
    const [formValues, setFormValues] = useState(null);
    return (
        <div className="custom-grid template">
            <div className="col-span-0 md:col-span-6 hidden md:block">
                <AuthLeftSection />
            </div>
            <div className="col-span-12 p-4 md:col-span-6 flex items-center justify-center">
                <div className="custom-grid gap-vertical min-w-[70%]">
                    <div className="col-span-12 text-mutedForeground text-center">
                        <h2 className="text-3xl text-foreground font-medium">Create your account</h2>
                        <label className="text-mutedForeground"> Join millions of people connecting on ChatFlow </label>
                    </div>
                    <div className="col-span-12">
                        <section className="flex justify-center items-center gap-2">
                            <div className={pageNo === 0 ? "w-4 h-4 rounded-full bg-primary" : "w-3 h-3 rounded-full bg-primary/50"}
                                onClick={() => setPageNo(0)}
                            />
                            <div className="w-20 h-0.5 bg-primary/60" />
                            <div className={pageNo === 1 ? "w-4 h-4 rounded-full bg-primary" : "w-3 h-3 rounded-full bg-primary/50"}
                                onClick={() => setPageNo(1)}
                            />
                        </section>
                    </div>
                    <div className="col-span-12">
                        {pageNo === 0 ? <Page0 /> : <Page1 />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;