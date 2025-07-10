// import { AuthProvider } from "./context/AuthContext";
// import MainApp from "./components/MainApp";

// export default function App3() {
//   return (
//     <AuthProvider>
//       <MainApp />
//     </AuthProvider>
//   );
// }

import { AuthProvider } from "./context/AuthContext";
import MainApp from "./components/MainApp";

export default function App3() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
