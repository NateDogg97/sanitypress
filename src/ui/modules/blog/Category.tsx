export default function Category({
	value,
	label,
}: {
	value?: Sanity.BlogCategory
	label?: string
}) {
	return (
		<>
			<span className="text-accent-foreground/40">#</span>
			{label || value?.title}
		</>
	)
}
