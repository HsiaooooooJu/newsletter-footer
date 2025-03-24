export default function Button({ text, textSize = 'text-base' }) {
	return (
		<button className="gradient-border rotate-gradient">
			<div className={`gradient-inner ${textSize}`}>
				{text}
			</div>
		</button>
	)
}