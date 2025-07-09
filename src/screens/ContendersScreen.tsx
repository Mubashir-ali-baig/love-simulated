import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import ContenderCard from "../components/ContenderCard";

const ContendersScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contestants = [
    {
      id: 1,
      name: "Ava",
      rating: 5.0,
      topMatch: "Noah",
      matchPercent: 92,
      profileImage: require("../../public/Noah.png"),
      topMatchImage: require("../../public/image2.png"),
    },
    {
      id: 2,
      name: "Ava",
      rating: 5.0,
      topMatch: "Noah",
      matchPercent: 92,
      profileImage: require("../../public/Noah.png"),
      topMatchImage: require("../../public/image2.png"),
    },
    {
      id: 3,
      name: "Ava",
      rating: 5.0,
      topMatch: "Noah",
      matchPercent: 92,
      profileImage: require("../../public/Noah.png"),
      topMatchImage: require("../../public/image2.png"),
    },
    {
      id: 4,
      name: "Ava",
      rating: 5.0,
      topMatch: "Noah",
      matchPercent: 92,
      profileImage: require("../../public/Noah.png"),
      topMatchImage: require("../../public/image2.png"),
    },
    {
      id: 5,
      name: "Ava",
      rating: 5.0,
      topMatch: "Noah",
      matchPercent: 92,
      profileImage: require("../../public/Noah.png"),
      topMatchImage: require("../../public/image2.png"),
    },
    {
      id: 6,
      name: "Ava",
      rating: 5.0,
      topMatch: "Noah",
      matchPercent: 92,
      profileImage: require("../../public/Noah.png"),
      topMatchImage: require("../../public/image2.png"),
    },
  ];

  const SearchIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 24 24">
      <Path
        d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={0.6}
      />
    </Svg>
  );

  const FilterIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 24 24">
      <Path
        d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );

  const ChevronDownIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 24 24">
      <Path
        d="m6 9 6 6 6-6"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );

  const filteredContestants = contestants.filter((contestant) =>
    contestant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F4D2D7", "#F8E6E9", "#F4D2D7"]}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerTitle}>Meet</Text>
            <Text style={styles.headerSubtitle}>the Contestants</Text>
            <Text style={styles.headerDescription}>Find the perfect match</Text>
          </View>
          <View style={styles.tokenContainer}>
            <Image
              source={require("../../public/smirror_token.png")}
              style={styles.tokenIcon}
            />
            <Text style={styles.tokenText}>
              <Text style={styles.tokenAmount}>1,000</Text>
              <Text style={styles.tokenUnit}> SMIRROR</Text>
            </Text>
          </View>
        </View>

        {/* Search and Filter */}
        <View style={styles.searchFilterContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <View style={styles.searchIcon}>
                <SearchIcon />
              </View>
              <TextInput
                style={styles.searchInput}
                placeholder="Search contenders..."
                placeholderTextColor="rgba(186, 67, 95, 0.6)"
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>

            <TouchableOpacity style={styles.filterButton}>
              <FilterIcon />
            </TouchableOpacity>

            <TouchableOpacity style={styles.sortButton}>
              <Text style={styles.sortButtonText}>Sort</Text>
              <ChevronDownIcon />
            </TouchableOpacity>
          </View>
        </View>

        {/* Contestants Grid */}
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.gridContainer}>
            {filteredContestants.map((contestant, index) => (
              <View key={contestant.id} style={styles.gridItem}>
                <ContenderCard contestant={contestant} />
              </View>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4D2D7",
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  headerLeft: {
    width: 181,
    height: 73,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "normal",
    color: "#BA435F",
    fontFamily: "Georgia",
    lineHeight: 28,
  },
  headerSubtitle: {
    fontSize: 24,
    fontWeight: "normal",
    color: "#BA435F",
    fontFamily: "Georgia",
    lineHeight: 28,
    marginBottom: 4,
  },
  headerDescription: {
    color: "#BA435F",
    fontSize: 14,
    marginTop: 4,
  },
  tokenContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0D1D8",
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#BA435F",
    width: 169,
    height: 44,
    marginTop: -30,
  },
  tokenIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  tokenText: {
    color: "#BA435F",
  },
  tokenAmount: {
    fontWeight: "600",
    fontSize: 16,
  },
  tokenUnit: {
    fontWeight: "normal",
    fontSize: 14,
  },
  searchFilterContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
  },
  searchInputContainer: {
    flex: 1,
    position: "relative",
    maxWidth: "65%",
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    top: "50%",
    transform: [{ translateY: -8 }],
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderWidth: 1,
    borderColor: "#BA435F",
    borderRadius: 20,
    paddingLeft: 40,
    paddingRight: 16,
    paddingVertical: 10,
    color: "#BA435F",
    fontSize: 14,
    height: 40,
    width: "100%",
  },
  filterButton: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderWidth: 1,
    borderColor: "#BA435F",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  sortButton: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderWidth: 1,
    borderColor: "#BA435F",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 70,
    height: 40,
    paddingHorizontal: 10,
    flexShrink: 0,
  },
  sortButtonText: {
    color: "#BA435F",
    fontSize: 14,
    fontWeight: "500",
    marginRight: 4,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    marginBottom: 16,
    alignItems: "center",
  },
});

export default ContendersScreen;
