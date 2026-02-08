import type React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { Dashboard } from "../pages/Dashboard";

export const RouterFlow: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/signup" element={<LoginPage/>} />
                <Route path="/" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}