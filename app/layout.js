export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import Nav from "./components/nav/nav";
import HeadComponent from "./components/nav/head-component/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeadComponent></HeadComponent>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}