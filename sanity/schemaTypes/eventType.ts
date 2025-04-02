import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio',
        direction: 'horizontal'
      }
    }),
    defineField({
      name: 'doorsOpen',
      type: 'number',
      description: 'number of munits before the event starts ',
      title: 'doors Open',
      initialValue: 60,
      validation: (rule) => rule.required().error(`Required to generate a page on the website`).error(`Required to generate a page on the website`),
    })
  ],
  
})