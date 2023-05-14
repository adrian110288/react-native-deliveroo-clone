import {ScrollView} from 'react-native';
import CategoryCard from "./CategoryCard";

const Categories = ({}) => {
    return (
        <ScrollView
            horizontal
            overScrollMode="never"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        </ScrollView>
    )
};

export default Categories;