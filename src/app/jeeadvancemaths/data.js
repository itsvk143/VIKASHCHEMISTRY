
export const mathsChapters = {
    "Algebra": [
        "Quadratic Equations",
        "Complex Numbers",
        "Sequences & Series",
        "Binomial Theorem",
        "Permutation & Combination",
        "Probability",
        "Matrices & Determinants"
    ],
    "Calculus": [
        "Functions",
        "Limits, Continuity & Differentiability",
        "Application of Derivatives",
        "Indefinite Integration",
        "Definite Integration",
        "Differential Equations"
    ],
    "Coordinate Geometry": [
        "Straight Lines",
        "Circle",
        "Parabola",
        "Ellipse",
        "Hyperbola"
    ],
    "Trigonometry & Vectors": [
        "Trigonometry",
        "Vectors",
        "3D Geometry"
    ],
    Other: [
        "IMPORTANT BOOK",
        "TEST PAPERS",
        "PRACTICE QUESTION"
    ]
};

export const importantBooks = {
    Maths: {
        "Algebra": [
            { name: "Cengage Algebra", link: "#", downloadLink: "#" },
            { name: "Higher Algebra (Hall & Knight)", link: "#", downloadLink: "#" }
        ],
        "Calculus": [
            { name: "Cengage Calculus", link: "#", downloadLink: "#" },
            { name: "Sameer Bansal Calculus", link: "#", downloadLink: "#" }
        ],
        "Coordinate Geometry": [
            { name: "Cengage Coordinate Geometry", link: "#", downloadLink: "#" },
            { name: "S.L. Loney", link: "#", downloadLink: "#" }
        ],
        "Trigonometry & Vectors": [
            { name: "S.L. Loney Plane Trigonometry", link: "#", downloadLink: "#" }
        ],
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

export const mathsResources = {};
Object.values(mathsChapters).flat().forEach(chapter => {
    mathsResources[chapter] = commonResources;
});
