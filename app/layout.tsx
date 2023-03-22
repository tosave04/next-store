import LayoutProvider from "../store/LayoutProvider"
import BgCache from "./ui/BgCache"
import Sidebar from "./ui/Sidebar"
import Cart from "./ui/Cart"
import Header from "./ui/Header"
import Nav from "./ui/Nav"
import Footer from "./ui/Footer"
import "./globals.css"

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js 13 STore by Thomas Savournin",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />{" "}
      </head>

      <body>
        <LayoutProvider>
          <BgCache />
          <Sidebar />
          <Cart />
          <Header />
          <Nav />
          <main>{children}</main>
          <Footer />
        </LayoutProvider>
      </body>
    </html>
  )
}
