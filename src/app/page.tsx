import Image from 'next/image';
import type { Metadata } from 'next'
import Education from './components/education';
import Projects from './components/projects';
import Inprogress from './components/inprogress';
import Skills from './components/skills';
import Social from './components/social';

const Page = () => {

	return (
		<div className="flex flex-col gap-8 my-16 mx-4 md:mx-0">
			<div className="flex flex-col-reverse gap-8 md:flex-row">
				<div className="flex flex-col gap-4">
					<h1 className="font-medium text-4xl">
						Bhaskar <span className="text-primary">Rijal</span>
					</h1>
					<p>
						Software Engineer | <span className="font-bold">LinkBinary | Open Source</span> <span className="rounded-md text-primary px-2 py-1 text-xs bg-primary/10">
							<span>NEW</span>
						</span>
					</p>
					<p>Namaskar!</p>
					<p className="text-justify">
						My name is Bhaskar Rijal and I'm an undergraduate computer science student based in Jhapa. I enjoy developing
						web applications and, in my free time, I like to delve into the theories of space physics and spectroscopy.
						When I'm not coding or studying, I'm usually listening to heavy rock and heavy metal and playing guitar.
					</p>
				</div>
				<Image
					src={require('../../assets/sun.jpg')}
					alt="Bhaskar Rijal"
					className="object-cover h-32 w-auto md:w-32 md:h-auto grayscale"
					width={300}
					height={300}
				/>
			</div>
			<div className="flex gap-2">
				<div className="rounded-md text-primary px-2 text-sm bg-primary/10" aria-label="Blood group: O+VE">
					1999
				</div>
				<div className="rounded-md text-primary px-2 text-sm bg-primary/10" aria-label="Blood group: O+VE">
					O+VE
				</div>
				<div className="rounded-md text-primary px-2 text-sm bg-primary/10" aria-label="Height: 5 feet 8 and a half inches">
					<span>5'8½</span>
				</div>
			</div>

			<Education />

			<Projects />

			<Inprogress />

			<Skills />

			<Social />

			<div className="flex flex-col gap-4">
				<h2 className="font-medium text-2xl">Contact</h2>
				<ul className="list-inside">
					<li>
						<span>{'email: '}</span>
						<a href="mailto:mail@bhaskarrijal.me" className="text-primary underline italic">
							mail@bhaskarrijal.me
						</a>
					</li>
					<li>
						<span>{'full website: '}</span>
						<a href="https://bhaskarrijal.me" target="_blank" className="text-primary underline italic">
							bhaskarrijal.me
						</a>
					</li>
				</ul>
			</div>

			<p className="text-xs">
				{'Bhaskar Rijal ' + new Date().getFullYear()}
			</p>
		</div>
	);
};

export default Page;