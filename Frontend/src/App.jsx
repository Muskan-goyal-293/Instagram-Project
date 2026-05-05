import "./style.scss";
import Routers from "./Routers.jsx";
import { AuthProvider } from "./feature/auth/services/authstate.jsx";
import { PostState } from "./feature/post/services/postState.jsx";
function App() {
  return (
    <>
      <AuthProvider>
        <PostState>
          <Routers />
        </PostState>
      </AuthProvider>
    </>
  );
}

export default App;
