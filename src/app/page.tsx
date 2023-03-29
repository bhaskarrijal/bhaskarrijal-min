import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';
import Avatar from '../../assets/pussy.jpg';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-medium">
						Pukar <span className="text-primary">Bajgain</span>
					</h1>
					<p>
						CMO | <span className="font-bold">LinkBinary</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
						I am a computer Science student at the Institute of Science and Technology (IOST) at Tribhuvan University. In addition to my studies, I am also  a Chief Management Officer at Linkbinary. My passion for technology has driven me to learn new things have led me to pursue a career in the Computer Science field.
					</p>
				</div>
				<Image
					src={Avatar}
					alt="Pukar Bajgain"
					className="object-cover object-top w-auto h-full md:w-32 md:h-auto grayscale"
					width={300}
					height={300}
				/>
			</div>
			<div className="flex gap-2">
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Blood group: O+VE">
					2002
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Blood group: O+VE">
					O+VE
				</div>
				<div className="px-2 text-sm rounded-md text-primary bg-primary/10" aria-label="Height: 5 feet 8 and a half inches">
					<span>5'6</span>
				</div>
			</div>

			<Education />

			{/* <Projects /> */}

			{/* <Inprogress /> */}

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-medium">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:mail@bhaskarrijal.me" className="italic underline text-primary">
							mail@pukarbajgai.info.np
						</a>
					</li>
					<li>
						<span>{'full website: '}</span>
						<a href="https://pukarbajgai.info.np" target="_blank" className="italic underline text-primary">
							pukarbajgai.info.np
						</a>
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Pukar Bajgain ' + new Date().getFullYear()}, <a href='https://github.com/bhaskarrijal/bhaskarrijal-min' target='_blank' className='italic underline text-primary'>edit this site</a>
			</p>
		</div>
	);
};

export default Page;