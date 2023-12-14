import { Route, Routes, useLocation } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes, privateRoutes } from './routes';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <div className="App">
            <Suspense fallback={<Loader />}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute user={user} children={<Page />}>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            />
                        );
                    })}
                </Routes>
            </Suspense>
            <ToastContainer autoClose={2000} />
        </div>
    );
}

export default App;
