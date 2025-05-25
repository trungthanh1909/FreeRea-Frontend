import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { publicRoutes, privateRoutes } from "./routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthorizedRoute from "./routes/AuthorizedRoute";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                {/* Public Routes */}
                {publicRoutes.map(({ path, component: Component }, index) => (
                    <Route key={index} path={path} element={<Component />} />
                ))}

                {/* Private Routes */}
                <Route element={<ProtectedRoute />}>
                    {privateRoutes.map(({ path, component: Component, roles }, index) =>
                        roles ? (
                            <Route
                                key={index}
                                element={<AuthorizedRoute roles={roles} />}
                            >
                                <Route path={path} element={<Component />} />
                            </Route>
                        ) : (
                            <Route key={index} path={path} element={<Component />} />
                        )
                    )}
                </Route>

                {/* Fallback Route */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default App;
