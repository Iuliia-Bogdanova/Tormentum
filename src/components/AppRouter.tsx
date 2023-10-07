import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../router/index.ts";

const AppRouter = () => {
    const auth = true;
    return (
        <Routes>
            {auth
                ? privateRoutes.map((route) => (
                    <Route
                        path={route.path}
                        element={<route.component />}
                        key={route.path}
                    />
                ))
            : publicRoutes.map((route) => (
                    <Route
                        path={route.path}
                        element={<route.component />}
                        key={route.path}
                    />
                ))}
        </Routes>
    );
};

export default AppRouter;
