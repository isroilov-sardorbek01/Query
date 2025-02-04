import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <QueryClientProvider client={client}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>
);
