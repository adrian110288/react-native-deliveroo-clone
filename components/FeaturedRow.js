import {ScrollView, Text, View} from 'react-native';
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({id, title, description}) => {
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

                <RestaurantCard
                    id={1234}
                    imgUrl="https://links.papareact.com/wru"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    shortDescription="This is test description"
                    dishes={[]}
                    long={20}
                    lat={0} />
                <RestaurantCard
                    id={1234}
                    imgUrl="https://links.papareact.com/wru"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    shortDescription="This is test description"
                    dishes={[]}
                    long={20}
                    lat={0} />
                <RestaurantCard
                    id={1234}
                    imgUrl="https://links.papareact.com/wru"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    shortDescription="This is test description"
                    dishes={[]}
                    long={20}
                    lat={0} />
                <RestaurantCard
                    id={1234}
                    imgUrl="https://links.papareact.com/wru"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    shortDescription="This is test description"
                    dishes={[]}
                    long={20}
                    lat={0} />


            </ScrollView>

        </View>
    )
};

export default FeaturedRow;