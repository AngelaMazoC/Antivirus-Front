import { 
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { 
    rel: "stylesheet", 
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@100..900&family=Raleway:wght@100..900&family=Nunito:wght@100..900&family=Montserrat:wght@100..900&family=Reddit+Sans:wght@100..900&display=swap" 
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body 
        className="bg-cover bg-center bg-fixed min-h-screen h-full text-white"
        style={{ backgroundImage: 'url("/Images/background.webp")' }}// verificar si esto va aquí
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}