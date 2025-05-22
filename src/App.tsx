import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { publicRoutes, privateRoutes } from "./routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthorizedRoute from "./routes/AuthorizedRoute";

const App: React.FC = () => {
    return (
        <>r
            <Routes>
                {/* Public Routes */}
                {publicRoutes.map(({ path, component: Component }, index) => (
                    <Route key={index} path={path} element={<Component />} />
                ))}

                {/* Private Routes */}
                <Route element={<ProtectedRoute />}>
                    {privateRoutes.map(({ path, component: Component, roles, permissions }, index) => {
                        if (roles || permissions) {
                            return (
                                <Route
                                    key={index}
                                    element={<AuthorizedRoute roles={roles} permissions={permissions} />}
                                >
                                    <Route path={path} element={<Component />} />
                                </Route>
                            );
                        }

                        return <Route key={index} path={path} element={<Component />} />;
                    })}
                </Route>
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
