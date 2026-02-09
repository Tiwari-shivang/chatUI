import type React from "react";
import { Sidebar } from "../components/Sidebar";
import { ChatList } from "../components/ChatList";
import { ChatWindow } from "../components/ChatWindow";

export const Dashboard: React.FC = () => {
    return (
        <div>
            <Sidebar />
            <div className="ml-[70px] h-[100vh] custom-grid">
                <div className="col-span-3 border-r border-border">
                    <ChatList />
                </div>
                <div className="col-span-9">
                    <ChatWindow
                        name="Ankit Agarwal"
                        initials="AA"
                        imgURL="https://media.licdn.com/dms/image/v2/C4D03AQFySpKPbJat8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516492466817?e=1772064000&v=beta&t=NnCTcUSARYqNLdDTktLx-6IyxYaUUaW_lWxaD8YcZZ0"
                        lastMessage="Chud gya bhai mai aaj fir se."
                        isUnread={true}
                        totalUnread={4}
                        lastMessageTime="2026-02-08T10:30:00"
                        profileBgColor="#F97316"
                    />
                </div>
            </div>
        </div>
    )
}