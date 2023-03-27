import React from 'react'

const Projects = () => {
    const projects = [
        {
            name: 'Image Compressor',
            link: 'https://bhaskarrijal.me/tools/image-compressor',
            description: 'Web Application'
        },
        {
            name: 'Byte Converter',
            link: 'https://bhaskarrijal.me/tools/byte-converter',
            description: 'Web Application'
        },
        {
            name: 'Password Generator',
            link: 'https://bhaskarrijal.me/tools/password-generator',
            description: 'Web Application'
        },
        {
            name: 'Weather',
            link: 'https://bhaskarrijal.me/tools/weather',
            description: 'Web Application'
        },
        {
            name: 'Weight on Mars',
            link: 'https://bhaskarrijal.me/tools/weight-on-mars',
            description: 'Web Application'
        },
        {
            name: 'QR Code Generator',
            link: 'https://bhaskarrijal.me/tools/qr-generator',
            description: 'Web Application'
        },
        {
            name: 'Basic Neural',
            link: 'https://github.com/bhaskarrijal/neural',
            description: 'Unpublished'
        },
        {
            name: 'DFA Password Validator',
            link: 'https://github.com/bhaskarrijal/dfa-password-validator',
            description: 'Unpublished'
        },
        {
            name: 'DFA Tokenizer',
            link: 'https://github.com/bhaskarrijal/dfa-tokenizer',
            description: 'Unpublished'
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="font-medium text-2xl">Projects</h2>
                <ul className="ist-inside">
                    {
                        projects.map((project, index) => (
                            <li key={index}>
                                <a href={project.link} target='_blank' className='text-primary underline italic'>
                                    <span>{project.name}</span>
                                </a> | <span>{project.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Projects