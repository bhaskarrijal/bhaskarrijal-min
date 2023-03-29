import React from 'react'

const Skills = () => {
    const skills = [
        {
            name: 'Frontend with React (Next.js)',
            description: 'Intermediate'
        },
        {
            name: 'Backend with Node.js',
            description: 'Intermediate'
        },
        {
            name: 'Backend with Python',
            description: 'Intermediate'
        },
        {
            name: 'Cloud with AWS',
            description: 'Intermediate'
        },
        {
            name: 'System Development with C',
            description: 'Beginner'
        },
        {
            name: 'Graphics Design',
            description: 'Intermediate'
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