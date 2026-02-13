import type React from "react";
import { useSelector } from "react-redux";
import type { appState } from "../store/store";

export const FullScreenLoader: React.FC = () => {
    const isLoading = useSelector((state: appState) => state.helper.loader)
    return (
        <>
            {isLoading &&
                <div className="template absolute bg-background/70 centered-data flex-col gap-2">
                    <span className="border-8 border-border border-t-secondary/80 h-20 w-20 rounded-full animation-loader" />
                </div>
            }
        </>
    )
}