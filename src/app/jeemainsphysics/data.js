
export const physicsChapters = {
    "Mechanics": [
        "Units & Dimensions",
        "Kinematics",
        "Laws of Motion",
        "Work, Power & Energy",
        "Rotational Motion",
        "Gravitation",
        "Properties of Solids & Liquids"
    ],
    "Electrodynamics": [
        "Electrostatics",
        "Current Electricity",
        "Capacitance",
        "Magnetic Effects of Current",
        "EMI & AC"
    ],
    "Modern Physics": [
        "Dual Nature of Radiation",
        "Atoms & Nuclei",
        "Semiconductor Devices"
    ],
    "Optics & Waves": [
        "Ray Optics",
        "Wave Optics",
        "SHM & Waves"
    ],
    "Thermal Physics": [
        "Thermal Properties of Matter",
        "Thermodynamics",
        "KTG"
    ],
    Other: [
        "IMPORTANT BOOK",
        "TEST PAPERS",
        "PRACTICE QUESTION"
    ]
};

export const importantBooks = {
    Physics: {
        "Mechanics": [
            { name: "Concepts of Physics (H.C. Verma)", link: "#", downloadLink: "#" },
            { name: "Problems in General Physics (I.E. Irodov)", link: "#", downloadLink: "#" }
        ],
        "Electrodynamics": [
            { name: "Understanding Physics for JEE Main & Advanced", link: "#", downloadLink: "#" }
        ],
        "Modern Physics": [],
        "Optics & Waves": [],
        "Thermal Physics": [],
        Other: []
    }
};

const commonResources = [
    { name: "Handwritten Notes", link: "#", downloadLink: "#" },
    { name: "Printed Notes", link: "#", downloadLink: "#" },
    { name: "PYQ", link: "#", downloadLink: "#" },
    { name: "Important Questions", link: "#", downloadLink: "#" },
    { name: "DPP 1", link: "#", downloadLink: "#" },
    { name: "DPP 2", link: "#", downloadLink: "#" },
];

export const physicsResources = {};
Object.values(physicsChapters).flat().forEach(chapter => {
    physicsResources[chapter] = commonResources;
});
