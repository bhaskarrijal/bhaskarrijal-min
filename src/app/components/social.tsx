import React from 'react'

const Social = () => {
    const social = [
        {
            name: 'Github',
            link: 'https://github.com/pukarbajgain'
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/ipukarbajgain',
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/pukarbajgain',
        },
        {
            name: 'Instagram',
            link: 'https://instagram.com/_realpucarbajgain',
        },
        {
            name: 'Facebook',
            link: 'https://facebook.com/pucarbajgain',
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Social</h2>
                <ul className="list-inside">
                    {
                        social.map((social, index) => (
                            <li key={index}>
                                <a href={social.link} target='_blank' className='italic underline text-primary'>
                                    <span>{social.link}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Social