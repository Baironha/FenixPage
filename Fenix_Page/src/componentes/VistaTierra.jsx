import React from "react";
import '../style/VistaTierraStyle.css'
function EarthLiveView() {
    const issLive = "https://www.nasa.gov/content/live-iss-stream";

    return (
        <div id="padre">
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
            <h1 className="text-3xl font-extrabold mb-6 text-blue-400 drop-shadow-lg">Live View of Earth from Space</h1>
            <div className="w-full max-w-4xl aspect-video border-4 border-blue-500 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                src={issLive}
                title="Live Earth View"
                className="w-full h-full"
                allowFullScreen
                ></iframe>
            </div>
            <p className="mt-4 text-md text-gray-300 italic">Source: NASA ISS Live Stream</p>
            </div>
        </div>
    );
};

export default EarthLiveView;

