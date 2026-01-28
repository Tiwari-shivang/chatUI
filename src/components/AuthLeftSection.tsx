import { MessageCircle } from "lucide-react";
import type React from "react";

export const AuthLeftSection: React.FC = () => {
    const features: string[] = [
        "End-to-end encryption",
        "Real-time sync",
        "Cross-platform"
    ]
    return (
        <section className="template relative">
            <div className="absolute bg-secondary/50 rounded-full bottom-30 right-30 h-[30%] w-[30%] animation-pulse blur-3xl" />
            <div className="absolute bg-primary/50 rounded-full top-30 left-30 h-[20%] w-[20%] animation-pulse blur-3xl" style={{ animationDelay: '2s' }} />
            <section className="p-12">
                <div className="custom-grid gap-vertical">
                    <div className="col-span-12 flex items-center gap-3">
                        <span className="btn-primary p-3 rounded-xl">
                            <MessageCircle className="w-6 h-6" />
                        </span>
                        <h3 className="text-2xl font-medium text-foreground">ChatFlow</h3>
                    </div>
                    <div className="col-span-12">
                        <h1 className="text-foreground text-5xl font-bold">
                            Connect with
                            <br />
                            <span className="gradient-text">
                                anyone, anywhere
                            </span>
                        </h1>
                    </div>
                    <div className="col-span-12">
                        <span className="text-mutedForeground">
                            Experience seamless conversations with crystal-clear messaging, real-time collaboration, and unmatched privacy.
                        </span>
                    </div>
                    <div className="col-span-12 flex gap-2">
                        {
                            features.map((feature, index) => (
                                <span className="bg-accent text-mutedForeground py-2 px-4 rounded-full text-sm" key={index}>
                                    {feature}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}