// app/components/HirePopup.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function HirePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // show after 4 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-5 right-5 p-4 rounded-lg border border-gray-700 bg-gray-900/70 backdrop-blur-md shadow-lg max-w-xs z-50">
            <button
                aria-label="Close popup"
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-300"
            >
                <X size={20} />
            </button>

            <h3 className="text-gray-50 font-semibold mb-2">
                Want to launch your online presence?
            </h3>
            <p className="text-gray-400 mb-4">
                Let&apos;s collaborate and build a website that truly represents you.
            </p>

            <a
                href="#contact"
                className="inline-flex items-center px-3 py-2 rounded-md bg-rose-500 hover:bg-rose-600 transition-colors font-semibold text-gray-50"
            >
                Get in Touch
            </a>
        </div>
    );
}
