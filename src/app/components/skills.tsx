import React from 'react'

const Skills = () => {
    const skills = [
        {
            name: 'React (Next.js)',
            description: 'Intermediate'
        },
        {
            name: 'Node.js',
            description: 'Intermediate'
        },
        {
            name: 'Python',
            description: 'Intermediate'
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Skills</h2>
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