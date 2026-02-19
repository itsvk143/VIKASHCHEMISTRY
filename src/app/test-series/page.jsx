'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Construction } from 'lucide-react';
import Link from 'next/link';

const TestSeriesPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
            <div className="p-8 rounded-2xl bg-white shadow-xl border border-slate-100 max-w-lg w-full">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-50 rounded-full">
                        <Construction className="w-12 h-12 text-blue-500" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-3">Test Series Coming Soon</h1>
                <p className="text-slate-600 mb-8">
                    We are currently building comprehensive test series for JEE and NEET aspirants. Check back later!
                </p>
                <Link href="/">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Return Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default TestSeriesPage;
