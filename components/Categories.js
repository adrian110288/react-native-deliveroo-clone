import {ScrollView} from 'react-native'
import CategoryCard from './CategoryCard'
import {urlFor} from '../sanity'

const Categories = ({categories}) => {
  return (
    <ScrollView
      horizontal
      overScrollMode='never'
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}>

      {
        categories?.map((category) => (
          <CategoryCard
            key={category._id}
            imgUrl={urlFor(category.image).url()}
            title={category.name} />
        ))
      }

    </ScrollView>
  )
}

export default Categories