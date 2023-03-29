import React from 'react'

const Inprogress = () => {
    const inProgress = [
        {
            name: 'Graphical DFA/NFA Simulator',
            description: 'Web Application'
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Work in Progress</h2>
                <ul className="list-inside">
                    {
                        inProgress.map((project, index) => (
                            <li key={index}>
                                <span className="font-medium">{project.name}</span> <span>({project.description})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Inprogress