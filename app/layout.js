import "./globals.css";

export const metadata = {
  title: "Study Planner",
  description: "Task management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}