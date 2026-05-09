// app/home/HomeScreen.tsx
import { ScrollView, View } from "react-native";

import BottomNav from "../../components/BottomNav";
import CategoryItem from "../../components/CategoryItem";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import SectionHeader from "../../components/SectionHeader";
import VenueCard from "../../components/VenueCard";

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: "#F8F9FB" }}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>

                    {/* Header */}
                    <Header />

                    {/* Search */}
                    <SearchBar />

                    {/* Categories */}
                    <SectionHeader title="Categories" />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CategoryItem title="Halls" icon="business" />
                        <CategoryItem title="Catering" icon="restaurant" />
                        <CategoryItem title="Decor" icon="flower" />
                        <CategoryItem title="Photo" icon="camera" />
                        <CategoryItem title="Bridal" icon="camera" />
                    </ScrollView>

                    {/* Top Picks */}
                    <SectionHeader title="Top Picks for You" />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <VenueCard
                            title="Royal Palace"
                            location="Bangalore"
                            price="₹50,000"
                            rating="4.6"
                            image="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                        />
                        <VenueCard
                            title="Royal Palace"
                            location="Bangalore"
                            price="₹50,000"
                            rating="4.6"
                            image="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                        />
                    </ScrollView>

                    {/* Near You */}
                    <SectionHeader title="Near You" />

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <VenueCard
                            title="Green Valley"
                            location="2.1 km away"
                            price="₹28,000"
                            image="https://source.unsplash.com/300x200/?garden"
                        />
                    </ScrollView>

                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <BottomNav />
        </View>
    );
}