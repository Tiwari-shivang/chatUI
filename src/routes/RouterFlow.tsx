import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const SignupPage = React.lazy(() => import('../pages/SignupPage'));
const VerifyPage = React.lazy(() => import('../pages/VerifyEmail'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));


export const RouterFlow: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/verify-email" element={<VerifyPage/>} />
                <Route path="/" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}