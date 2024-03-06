// GlobalApp component is a placeholder for the entire application.
// It is the root component of the application and is responsible for
// setting up the application context and routing.

import { PathProvider } from "./providers/pathProvider";

// It is also the place to add global providers and context.
type GlobalAppProps = {
    appPath: string;
  };

const GlobalApp = ({ appPath }: GlobalAppProps) => {
  return (
    <PathProvider path={appPath}>
        {/* // TODO Make sure to append app path when navigating `${appPath}/your-destination` */}
      <div>GlobalApp</div>
    </PathProvider>
  );
};

export default GlobalApp;
