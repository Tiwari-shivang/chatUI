import { Search } from "lucide-react"
import type React from "react"
import { chatList } from "../mocks/mocks"

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

const ConnectionTab: React.FC<propsConnectionTab> = ({
    name,
    initials,
    imgURL,
    lastMessage,
    isUnread,
    totalUnread,
    lastMessageTime,
    profileBgColor
}) => {

    const handleLastMessageTime = (dateString: string) => {
        const now = new Date()
        const past = new Date(dateString)

        const diffMs = now.getTime() - past.getTime()
        const diffMin = Math.floor(diffMs / (1000 * 60))

        if (diffMin < 1) return "just now"
        if (diffMin < 60) return `${diffMin}m`

        const diffHr = Math.floor(diffMin / 60)
        if (diffHr < 24) return `${diffHr}h`

        const diffDay = Math.floor(diffHr / 24)
        return `${diffDay}d`
    }
    return (
        <div className="custom-grid h-[80px] border border-border rounded-radius mb-2 cursor-pointer">
            <div className="col-span-3 centered-data">
                <span className="rounded-full h-15 w-15 centered-data font-medium text-foreground border border-border" style={{background: profileBgColor}}>
                    {imgURL.length ? <img src={imgURL} className="rounded-full h-15 w-15" /> : <>{initials}</>}
                </span>
            </div>
            <div className="col-span-7 flex flex-col justify-center">
                <span className="text-foreground">{name}</span>
                <span className="text-mutedForeground font-light truncate">{lastMessage}</span>
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center gap-2">
                <span className="text-mutedForeground text-[12px]">{handleLastMessageTime(lastMessageTime)}</span>
                {isUnread && <span className="bg-primary text-[10px] rounded-full centered-data h-6 w-6 text-accentForeground">{totalUnread}</span>}
            </div>
        </div>
    )
}

export const ChatList: React.FC = () => {
    return (
        <section className="template">
            <div className="h-[80px] px-3 flex items-center relative">
                <Search className="absolute text-mutedForeground top-1/2 left-6 -translate-y-1/2 w-5 h-5" />
                <input className="input-auth pl-10" placeholder="Search your chats" />
            </div>
            <div style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }} className="px-3 py-2">
                {chatList.map((chat, index) => (
                    <ConnectionTab key={index} name={chat.name} initials={chat.initials} imgURL={chat.imgURL} lastMessage={chat.lastMessage} isUnread={chat.isUnread} totalUnread={chat.totalUnread} lastMessageTime={chat.lastMessageTime} profileBgColor={chat.profileBgColor} />
                ))}
            </div>
        </section>
    )
}