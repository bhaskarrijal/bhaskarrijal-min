import React from 'react'

const Education = () => {
    const education = [
        {
            degree: 'Bachelors',
            institution: 'Tribhuvan University IOST, BSc. CSIT',
            date: '2021 - Present'
        },
        {
            degree: 'Higher Secondary Education',
            institution: 'National Examination Board',
            date: '2018 - 2020'
        },
        {
            degree: 'SEE',
            institution: 'National Examination Board',
            date: '2018'
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Education</h2>
                <ul className="list-inside">
                    {
                        education.map((degree, index) => (
                            <li key={index}>
                                <span className="font-medium">{degree.degree}</span> | <span>{degree.institution}</span> | <span>{degree.date}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Education