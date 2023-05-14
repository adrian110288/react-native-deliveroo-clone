import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Lat'
    },
    {
      name: 'long',
      type: 'number',
      title: 'Long'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating 1-5 stars',
      validation: (Rule) => Rule.required().min(1).max(5).error('Value between 1 and 5')
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}]
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}]
    }


  ]
})
