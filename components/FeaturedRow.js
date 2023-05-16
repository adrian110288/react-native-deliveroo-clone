import {ScrollView, Text, View} from 'react-native';
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import {urlFor} from '../sanity'

const FeaturedRow = ({id, title, description, restaurants}) => {
    return (
        <View>
            <View className="flex-row mt-4 items-center px-4">
                <Text className="flex-1 font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB"/>
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                className="pt-4"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}>

              { restaurants?.map((restaurant) => (
                <RestaurantCard
                  key={restaurant._id}
                  id={restaurant._id}
                  imgUrl={urlFor(restaurant.image).url()}
                  title={restaurant.name}
                  rating={restaurant.rating}
                  genre="£££££"
                  address={restaurant.address}
                  shortDescription={restaurant.description}
                  dishes={[]}
                  long={restaurant.long}
                  lat={restaurant.lat} />

              ))}

            </ScrollView>

        </View>
    )
};

export default FeaturedRow;