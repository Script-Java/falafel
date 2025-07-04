"use client";
import { useEffect } from "react";

export default function SetmoreCalendar() {
  // Optionally load Setmore script if needed
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "setmore_script";
    script.src = "https://assets.setmore.com/integration/static/setmoreIframeLive.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.getElementById("setmore_script")?.remove();
    };
  }, []);

  return (
    <div className="max-w-7xl flex justify-center items-center mx-auto my-10 p-4">
      <iframe
        src="https://salomeamama.setmore.com/" // replace with your Booking Page URL
        width="100%"
        height="700"
        frameBorder="0"
        scrolling="yes"
        style={{ maxWidth: "100%" }}
        title="Booking Calendar"
        allow="web-share"
      />
    </div>
  );
}
