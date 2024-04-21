import React from "react";

export default function Nav() {
    return (
        <>
            <nav className="bg-gray-100  border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Form</span>
                    </a>
                </div>
            </nav>
        </>
    )
}