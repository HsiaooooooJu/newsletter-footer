export default function Button({ text, textSize = 'text-base' }) {
	return (
		<button className="gradient-border">
			<div className={`gradient-inner ${textSize}`}>
				{text}
			</div>
		</button>
	)
}