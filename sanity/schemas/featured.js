import {defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'restaurant',
      type: 'array',
      title: 'Restaurants',
      of: [{
        type: "reference",
        to: [{
          type: "restaurant"
        }]
      }]
    }
  ]
})
