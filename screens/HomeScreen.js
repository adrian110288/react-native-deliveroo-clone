import {Image, ScrollView, Text, TextInput, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'
import {useEffect, useLayoutEffect, useState} from 'react'
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = ({}) => {
  const navigation = useNavigation()
  const [categories, setCategories] = useState([])
  const [featured, setFeatured] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  useEffect( () => {

    sanityClient.fetch(`
      *[_type == "featured"] {
        ...,
        restaurant[]->{
          ...,
          dishes[]->
        }
      }
    `)
      .then((data)=> setFeatured(data))
  }, [])

  useEffect( () => {

    sanityClient.fetch(`
      *[_type == "category"] {
        ...,
      }
    `)
      .then((data)=> setCategories(data))
  }, [])

  console.log(categories)

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/*Header*/}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full' />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/*Search*/}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 items-center space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>

      <ScrollView className='bg-gray-100'>

        <Categories categories={categories} />

        {
          featured?.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.description}
              restaurants={category.restaurant} />
          ))
        }

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen