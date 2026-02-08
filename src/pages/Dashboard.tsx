import type React from "react";
import { Sidebar } from "../components/Sidebar";
import { ChatList } from "../components/ChatList";

export const Dashboard:React.FC = () => {
    return (
        <div>
            <Sidebar/>
            <div className="ml-[70px] h-[100vh] custom-grid">
                <div className="col-span-3 border-r border-border">
                    <ChatList/>
                </div>
                <div className="col-span-9">
                    sdsd
                </div>
            </div>
        </div>
    )
}