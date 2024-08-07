"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider, metamaskWallet, embeddedWallet, smartWallet,rabbyWallet,walletConnect } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThirdwebProvider
      // activeChain="ethereum"
      // clientId="a8dfd2be8aa506cd6410ff1ea3de797f"
      // supportedWallets={[
      //   embeddedWallet({   
      //     auth: {options: ["email", "google", "facebook", "apple"],},   
      //     recommended: true, }),
      //   // metamaskWallet({
 
      //   // }),
          
          
          
      //     // walletConnect({
      //     //   projectId: "your_project_id",
      //     //   qrModal: "custom", // or "walletConnect"
      //     //   qrModalOptions: {
      //     //     themeMode: "dark",
      //     //   },
      //     //   recommended: true,
      //     // }),
      // //     rabbyWallet({}),
         
      //   ]}
    >
      <body className={inter.className}>{children}</body>
      </ThirdwebProvider>
    </html>
  );
}
