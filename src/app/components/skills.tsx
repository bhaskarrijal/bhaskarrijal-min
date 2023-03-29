import React from 'react'

const Skills = () => {
    const skills = [
        {
            name: 'Frontend with React (Next.js)',
            description: 'Unconscious Competence'
        },
        {
            name: 'Backend with Node.js',
            description: 'Unconscious Competence'
        },
        {
            name: 'Backend with Python',
            description: 'Unconscious Competence'
        },
        {
            name: 'Cloud with AWS',
            description: 'Unconscious Competence'
        },
        {
            name: 'System Development with C',
            description: 'Conscious Competence'
        },
        {
            name: 'Graphics Design',
            description: 'Unconscious Competence'
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Skills</h2>
                <ul className="list-inside">
                    {
                        skills.map((skill, index) => (
                            <li key={index}>
                                <span className="font-medium">{skill.name}</span> <span>({skill.description})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Skills