import Button from './ui/Button'
import Wave from '../assets/wave.svg'

export default function Footer() {
	return (
		<footer className='text-center'>
			<img src={Wave} className="w-full h-20 object-cover" alt="wave" />
			<div className="py-22 grid-bg">
				<h2 className="text-5xl font-bold text-center text-black">DON’T MISS OUT</h2>
				<p className="text-[#494706] mt-2 mb-8 text-2xl font-normal">
					Get the latest news and updates delivered straight to your inbox.
				</p>

				<div className="relative flex w-[688px] items-center m-auto p-2 border-y-2 border-x-6 border-black rounded-full bg-white">
					<input
						type="email"
						placeholder="your email address"
						className="size-full p-6 text-xl placeholder:font-extrabold placeholder:text-2xl focus:outline-none focus:placeholder-transparent"
					/>
					<Button text='SUBSCRIBE' />
				</div>

			</div>
			<img src={Wave} className="w-full h-24 object-cover rotate-180" alt="wave" />
		</footer>
	);
}