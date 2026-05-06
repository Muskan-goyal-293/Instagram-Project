import "./style.scss";
import Routers from "./Routers.jsx";
import { AuthProvider } from "./feature/auth/services/authstate.jsx";
import { PostState } from "./feature/post/services/postState.jsx";
import { FollowerState } from "./feature/follower/context/FollowerState.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <PostState>
          <FollowerState>
            <Routers />
          </FollowerState>
        </PostState>
      </AuthProvider>
    </>
  );
}

export default App;
