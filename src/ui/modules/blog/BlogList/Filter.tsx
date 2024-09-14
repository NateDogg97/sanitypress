'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { categoryStore } from '../store'
import { Button } from '@/ui/components/button'
import Category from '../Category'
import { cn } from '@/lib/utils'
import css from './FilterList.module.css'

export default function Filter({
	label,
	value = 'All',
}: {
	label: string
	value?: 'All' | string
}) {
	const { selected, setSelected, reset } = categoryStore()

	useEffect(reset, [usePathname()])

	return (
		<Button
			variant={selected === value ? "default" : "ghost"}
			className={cn(
				css.filter,
				'!py-1',
				'font-light',
				selected === value && '*:text-primary-foreground'
			)}
			onClick={() => setSelected(value)}
		>
			<Category label={label} />
		</Button>
	)
}
