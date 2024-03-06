// GlobalApp component is a placeholder for the entire application.
// It is the root component of the application and is responsible for
// setting up the application context and routing.

import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { PathProvider } from "./providers/pathProvider";
import { ROUTES } from "./routes";

// It is also the place to add global providers and context.
type GlobalAppProps = {
    appPath: string;
};

const GlobalApp = ({ appPath }: GlobalAppProps) => {
    return (
        <PathProvider path={appPath}>
            {/* // TODO Make sure to append app path when navigating `${appPath}/your-destination` */}
            <Navigation />
            <div>GlobalApp</div>
            <Routes>
                <Route path={ROUTES.HOME} element={<div>Home</div>} />
                <Route path={ROUTES.ABOUT} element={<div>About</div>} />
                <Route path={ROUTES.CONTACTS} element={<div>Contact</div>} />
                <Route path={'/'} element={<Navigate to={`${appPath}${ROUTES.HOME}`} />} />
            </Routes>
        </PathProvider> 
    );
};

export default GlobalApp;
