// import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import { RouteNames, privateRoutes, publicRoutes } from "../router/index.ts";

// const AppRouter = () => {
//     const auth = true;
//     return auth ? (
//         <Switch>
//             {privateRoutes.map((route) => (
//                 <Route
//                     path={route.path}
//                     exact={route.exact}
//                     component={route.component}
//                     key={route.path}
//                 />
//             ))}
//             <Redirect to={RouteNames.EVENT} />
//         </Switch>
//     ) : (
//         <Switch>
//             {publicRoutes.map((route) => (
//                 <Route
//                     path={route.path}
//                     exact={route.exact}
//                     component={route.component}
//                     key={route.path}
//                 />
//             ))}
//             <Redirect to={RouteNames.LOGIN} />
//         </Switch>
//     );
// };

// export default AppRouter;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
            {/* <Route
                path="/"
                element={
                    <Navigate to={auth ? RouteNames.EVENT : RouteNames.LOGIN} />
                }
            /> */}
        </Routes>
    );
};

export default AppRouter;
