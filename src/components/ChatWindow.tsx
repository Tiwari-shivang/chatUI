import { EllipsisVertical, Mic, PanelLeftClose, Paperclip, Phone, Send, Smile, Video } from "lucide-react";
import type React from "react";
import { chatData } from "../mocks/mocks";

export type propsConnectionTab = {
    name: string,
    initials: string,
    imgURL: string,
    lastMessage: string,
    isUnread: boolean,
    totalUnread: number,
    lastMessageTime: string,
    profileBgColor: string
}

export type messageType = {
    id: string,
    roomId: string,
    senderId: string,
    receiverId: string,
    content: string,
    deliveredAt: string
}

const ChatHeader: React.FC<propsConnectionTab> = ({
    name,
    initials,
    imgURL,
    lastMessage,
    isUnread,
    totalUnread,
    lastMessageTime,
    profileBgColor
}) => {
    return (
        <div className="h-[80px] border-b border-border w-full custom-grid px-6">
            <div className="col-span-6 flex items-center gap-6">
                <PanelLeftClose className="text-foreground" />
                <section className="flex items-center gap-2">
                    <span className="rounded-full h-15 w-15 relative centered-data font-medium text-foreground border border-border relative" style={{ background: profileBgColor }}>
                        {imgURL && imgURL.length ? <img src={imgURL} className="rounded-full h-15 w-15" /> : <>{initials}</>}
                        <span className="h-3 w-3 bg-green-500 absolute rounded-full bottom-0 right-0" />
                    </span>
                    <div>
                        <div className="text-foreground text-[18px] font-medium">{name}</div>
                        <div className="text-foreground text-[12px]">Online</div>
                    </div>
                </section>
            </div>
            <div className="col-span-6 flex justify-end items-center gap-6">
                <Phone className="text-mutedForeground h-5 w-5" />
                <Video className="text-mutedForeground h-5 w-5" />
                <EllipsisVertical className="text-mutedForeground h-5 w-5" />
            </div>
        </div>
    )
}

export const ChatWindow: React.FC<propsConnectionTab> = ({
    name,
    initials,
    imgURL,
    lastMessage,
    isUnread,
    totalUnread,
    lastMessageTime,
    profileBgColor
}) => {
    const handleExtractTime = (deliveredAt: string) => {
        const timeVal = deliveredAt.split('T')[1];
        return timeVal.substring(0, 5);
    }
    return (
        <section className="template">
            <ChatHeader name={name} initials={initials} imgURL={imgURL} lastMessage={lastMessage} isUnread={isUnread} totalUnread={totalUnread} lastMessageTime={lastMessageTime} profileBgColor={profileBgColor} />
            <div className="w-full px-6 py-4" style={{ height: 'calc(100vh - 160px)' }}>
                {chatData.map((message, index) => (
                    <div className="flex w-full items-center my-3" style={{ justifyContent: message.senderId === 'asdasdas09uashdoasdadshivang' ? 'end' : 'start' }} key={index}>
                        <div className={message.senderId === 'asdasdas09uashdoasdadshivang' ? 'max-w-[60%] text-foreground p-3 flex flex-col gap-2 rounded-br-md rounded-tr-radius rounded-tl-radius rounded-bl-radius btn-primary items-end' : 'max-w-[60%] text-foreground p-3 flex flex-col gap-2 border border-border rounded-br-radius rounded-tr-radius rounded-tl-radius rounded-bl-md'}>
                            <span className="text-accentForeground">{message.content}</span>
                            <span className="text-[13px] text-mutedForeground font-light">{handleExtractTime(message.deliveredAt)}</span>
                        </div>
                    </div>
                ))}
            </div>
            <section className="w-full h-[80px] border-t border-border px-6 flex items-center gap-4">
                <Paperclip className="text-foreground" />
                <div className="relative w-full">
                    <Smile className="absolute -translate-y-1/2 top-1/2 right-5 text-foreground cursor-pointer" />
                    <input className="input-auth pr-13" />
                </div>
                <Mic className="text-foreground"/>
                <span className="btn-primary p-3 rounded-radius">
                    <Send />
                </span>
            </section>
        </section>
    )
}