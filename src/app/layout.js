import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./utils/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gurukul skills",
  description: "Welcome to Gurukul skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthProvider>
             
          <div className="relative bg-gray-900 min-h-screen text-white ">
            <div className="absolute z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-yellow-300 rounded-full"
                  style={{
                    width: `${Math.random() * 10}px`,
                    height: `${Math.random() * 10}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `translate(-50%, -50%)`,
                  }}
                  ></div>
                ))}
            </div>
            <div className="relative">{children}</div>
          </div>
                </AuthProvider>
                </main>
      </body>
    </html>
  );
}
