"use client"; // Client component banana zaroori hai useState ke liye

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [layoutCount, setLayoutCount] = useState(0);

  return (
    <html lang="en">
      <body>
        <div style={{ border: "3px solid blue", padding: "20px", margin: "10px" }}>
          <h2>🔵 Layout Area (State persists)</h2>
          <p>Layout Counter: {layoutCount}</p>
          <button onClick={() => setLayoutCount(layoutCount + 1)}>
            Increment Layout
          </button>

          {/* Yahan pe template aur pages render honge */}
          <div style={{ marginTop: "20px" }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}