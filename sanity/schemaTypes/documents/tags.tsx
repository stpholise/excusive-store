import { defineField, defineType } from 'sanity'

export const tags = defineType({
    name: 'tags',
    title: 'Tags',
    type: 'document',
    fields: [
        defineField({
            name: 'tagTitle',
            type: 'string',
            title: 'Tag'
        }),
        defineField({
            name: 'lable',
            type: 'string',
            title: 'lable'
        }), 
    ]
})