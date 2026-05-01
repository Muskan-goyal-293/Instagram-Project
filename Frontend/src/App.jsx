import "./style.scss";
import Routers from "./Routers.jsx"
import { AuthProvider } from "./feature/auth/services/authstate.jsx";
function App() {

  return (
    <>
    <AuthProvider>
    <Routers/>
    </AuthProvider>
    </>
  )
}

export default App
