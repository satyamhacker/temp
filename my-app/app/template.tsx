"use client";

import { useState } from "react";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
    const [templateCount, setTemplateCount] = useState(0);

    return (
        <div style={{ border: "3px solid green", padding: "20px", margin: "10px" }}>
            <h2>🟢 Template Area (Remounts on navigation)</h2>
            <p>Template Counter: {templateCount}</p>
            <button onClick={() => setTemplateCount(templateCount + 1)}>
                Increment Template
            </button>

            {/* Yahan actual page content aayega */}
            <div style={{ marginTop: "20px" }}>
                {children}
            </div>
        </div>
    );
}