import LayoutProvider from "../store/LayoutProvider"
import BgCache from "./ui/BgCache"
import Sidebar from "./ui/Sidebar"
import Cart from "./ui/Cart"
import Header from "./ui/Header"
import Nav from "./ui/Nav"
import Footer from "./ui/Footer"
import "./globals.css"
import AuthProvider from "../store/AuthProvider"
import { headers } from "next/headers"
import type { Session } from "next-auth"

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js 13 STore by Thomas Savournin",
}
async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.LOCAL_AUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  })

  const session = await response.json()

  return Object.keys(session).length > 0 ? session : null
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession(headers().get("cookie") ?? "")

  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />{" "}
      </head>

      <body>
        <AuthProvider session={session}>
          <LayoutProvider>
            <BgCache />
            <Sidebar />
            <Cart />
            <Header />
            <Nav />
            <main>{children}</main>
            <Footer />
          </LayoutProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
