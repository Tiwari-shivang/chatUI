import { Mail } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VerifyEmail: React.FC = () => {
    const [isActiveBtn, setIsActiveBtn] = useState<boolean>(true);
    const [timeLeft, setTimeLeft] = useState<number>(0);

    const handleSend = () => {
        if (isActiveBtn) {
            setTimeLeft(60);
            setIsActiveBtn(false);
        }
    }

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsActiveBtn(true);
            return;
        }
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [timeLeft])

    return (
        <div className="template bg-background centered-data flex-col gap-5">
            <div className="bg-secondary/30 h-100 w-100 absolute rounded-full blur-3xl animation-pulse pointer-events-none" />
            <Mail className="text-mutedForeground h-10 w-10" />
            <h1 className="text-foreground text-3xl">Verify your email</h1>
            <span className="text-mutedForeground text-sm">Thanks for signing up! Please click the button below to verify your email address and activate your account</span>
            <button
                className={`centered-data gap-2 px-6 py-4 rounded-radius z-10 ${isActiveBtn ? 'btn-primary' : 'btn-disabled'}`}
                onClick={handleSend}
            >
                {isActiveBtn ? 'Send verification link' : `Resend in ${timeLeft} sec`}
            </button>
            <Link to="/signup">
                <span className="text-primary/70 text-sm mt-4 cursor-pointer z-10"> Get back to signup ? </span>
            </Link>
        </div>
    )
}

export default VerifyEmail;