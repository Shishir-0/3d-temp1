import type { ReactNode } from "react";

export const metadata = { title: "Atelier 3d — preview" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
