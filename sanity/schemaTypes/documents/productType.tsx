import { defineArrayMember, defineField, defineType } from 'sanity'
// import accessibleImage from '../objects/accessibleImage'


export const productType = defineType({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField({
            name: 'productName',
            type: 'string',
            title: 'Product Name',
            validation: rule =>  rule.required().error('This Field is Required')
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'slug',
            options: {
                source: 'productName'
            },
            validation: rule =>  rule.required().error('This Field is Required')
        }),
        defineField({
            name: 'productImage',
            title: 'Product Image',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'image',
                    fields: [{
                        name: 'alt',
                        title: 'Alternative Text',
                        type: 'string',
                        description: 'Important for SEO and accessibility.',
                        options: {
                            hotspot: true,
                        } 
                      }],
                })
            ],
            validation: (rule) => [
                rule.required().error('This Field is Required'),
                rule.min(1).error('add at least one image'),
                rule.max(5)

            ]
        }),
        defineField({
            name: 'productPrice',
            type: 'number',
            title: 'Product Price',
            validation: rule =>  rule.required().error('This Field is Required')
        }),
        defineField({
            name: 'promoPrice',
            type: 'number',
            title: 'Promo Price',
        }),
        defineField({
            name: 'percentOff',
            type: 'number',
            title: 'Percent Off', 
            description: 'This is the percentage of the discount '
        }), 
        defineField({
            name: 'about',
            type: 'array',
            title: 'Product Detail',
            of: [{
                type:'block',
            }]
        }),
        defineField({
            name: 'productTag',
            type: 'array',
            title: 'Tag',
            of: [
                {
                    type:'reference',
                    to: [
                        {type: 'tags'}
                    ]
                }
            ]
        }), 
        defineField({
            name: 'createdAt',
            type: 'datetime',
            title: 'Created At',
            description: 'Timestamp of the data and time the product is published',
            initialValue: () => new Date().toISOString()

        })
    ]
})