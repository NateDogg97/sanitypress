import { defineField, defineType } from 'sanity'
import { VscSymbolClass } from 'react-icons/vsc'
import { count } from '@sanity/src/utils'

export default defineType({
	name: 'navigation',
	title: 'Navigation',
	icon: VscSymbolClass,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'items',
			type: 'array',
			of: [{ type: 'link' }, { type: 'link.list' }],
		}),
		defineField({
			name: 'displayThemeToggle',
			title: 'Display Theme Toggle',
			type: 'boolean',
			description: 'Enable to show a theme toggle in the navigation',
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: 'title',
			items: 'items',
		},
		prepare: ({ title, items }) => ({
			title,
			subtitle: count(items),
		}),
	},
})
