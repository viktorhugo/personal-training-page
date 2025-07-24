import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { PersonalTrainingLayout } from './personal-training/layout/layout';
import HomePage from './personal-training/pages/page';
import HomePage2 from './personal-training/pages/page2';
export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/home" element={<PersonalTrainingLayout />}> {/* default path (index) */}
                    {/* <Route index element={<HomePage />} /> */}
                    <Route index element={<HomePage2 />} />
                    {/* <Route path="/auth/register" element={<RegisterPage />} /> */}
                </Route>


                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}