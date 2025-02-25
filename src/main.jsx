import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PostProvider } from "./context/PostContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </UserProvider>
  </StrictMode>
);
