import type { JSX } from "react";
import { Outlet } from "react-router";

export const PersonalTrainingLayout = (): JSX.Element => {
    return (
        <div className="">
            <Outlet />
        </div>
    );
};