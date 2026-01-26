'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { entranceExams, topColleges } from './data';

const MedicalPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
                    Medical Career Pathway
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore the top entrance exams and premier medical institutes in India to kickstart your journey in medicine and healthcare.
                </p>
            </motion.div>

            {/* Entrance Exams Section */}
            <div className="max-w-7xl mx-auto mb-20">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4"
                >
                    Top Medical Entrance Exams
                </motion.h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {entranceExams.map((exam, index) => (
                        <motion.div
                            key={exam.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{exam.name}</h3>
                                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded mt-1 inline-block">
                                            {exam.tentativeDate}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-gray-500 mb-2">{exam.fullName}</p>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                                    {exam.description}
                                </p>
                                <a
                                    href={exam.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark group"
                                >
                                    Visit Website
                                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Top Medical Colleges Section */}
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4"
                >
                    Top Medical Colleges in India
                </motion.h2>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Institute Name
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Admission Exam
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Location
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {topColleges.map((college, index) => (
                                    <motion.tr
                                        key={college.id}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.01 }} // Fast stagger for basic fade in
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                            <a
                                                href={college.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-primary hover:underline underline-offset-2 transition-all cursor-pointer flex items-center gap-1 group"
                                            >
                                                {college.name}
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold border border-blue-100">
                                                {college.exam}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {college.location}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalPage;
