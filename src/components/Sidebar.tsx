import type React from "react";
import { Bell, Bolt, Cable, House, MessageCircle, Search } from "lucide-react";

export const Sidebar: React.FC = () => {
    return (
        <div className="w-[70px] h-full fixed">
            <div className="relative w-full h-full flex flex-col items-center py-5">
                <span className="btn-primary p-3 h-12 w-12 rounded-xl">
                    <MessageCircle className="w-6 h-6" />
                </span>
                <section className="mt-12 flex flex-col gap-8">
                    <div> <House className="text-mutedForeground cursor-pointer" /> </div>
                    <div> <Search className="text-mutedForeground cursor-pointer" /> </div>
                    <div> <Cable className="text-mutedForeground cursor-pointer" /> </div>
                    <div> <Bell className="text-mutedForeground cursor-pointer" /> </div>
                </section>
                <section className="flex flex-col items-center gap-8 py-6 absolute bottom-0">
                    <div>
                        <img className="rounded-full w-10 h-10" src="https://media.licdn.com/dms/image/v2/D5635AQGAplWfjqFtlg/profile-framedphoto-shrink_400_400/B56ZvBp9cEIQAc-/0/1768480561123?e=1771160400&v=beta&t=3I0OmWRSPnAMT2bbLID8ZyfqJI9l-oTu15JXdLF_cIQ" />
                    </div>
                    <div> <Bolt className="text-mutedForeground" /> </div>
                </section>
            </div>
        </div>
    )
}