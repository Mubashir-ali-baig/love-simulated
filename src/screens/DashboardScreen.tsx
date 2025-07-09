import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");

const DashboardScreen = () => {
  const [highlightsExpanded, setHighlightsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const confessions = [
    { id: 1, name: "Peter", image: require("../../public/Ava.png") },
    { id: 2, name: "Jenisha", image: require("../../public/Ava.png") },
    { id: 3, name: "Alisha", image: require("../../public/Ava.png") },
    { id: 4, name: "Melisha", image: require("../../public/Ava.png") },
    { id: 5, name: "John", image: require("../../public/Ava.png") },
    { id: 6, name: "John", image: require("../../public/Ava.png") },
  ];

  const StarRating = ({
    rating,
    interactive = false,
    onRate,
  }: {
    rating: number;
    interactive?: boolean;
    onRate?: (rating: number) => void;
  }) => (
    <View style={styles.starContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => interactive && onRate && onRate(star)}
          style={styles.starButton}
        >
          <Text
            style={[
              styles.star,
              { color: star <= rating ? "#BA435F" : "#F0C4C9" },
            ]}
          >
            ⭐
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const ProgressBar = ({
    label,
    percentage,
  }: {
    label: string;
    percentage: number;
  }) => (
    <View style={styles.progressItem}>
      <Text style={styles.progressLabel}>{label}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );

  const DateCard = () => (
    <View style={styles.dateCard}>
      {/* Beach Sunset Image with Overlays */}
      <View style={styles.dateImageContainer}>
        <Image
          source={require("../../public/image1.png")}
          style={styles.dateImage}
          contentFit="cover"
        />
        <Image
          source={require("../../public/Overlay.png")}
          style={styles.overlayImage}
          contentFit="cover"
        />

        {/* Date Type Tag */}
        <View style={styles.dateTypeTag}>
          <Text style={styles.dateTypeText}>1-on-1 Date</Text>
        </View>

        {/* Timestamp */}
        <View style={styles.timestampContainer}>
          <Text style={styles.timestampText}>🕒 2 hours ago</Text>
        </View>

        {/* Profile Info Overlay */}
        <View style={styles.profileInfoOverlay}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../../public/image2.png")}
              style={styles.profileImage}
              contentFit="cover"
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Peter and Alisha</Text>
            <Text style={styles.profileDate}>1st Date</Text>
          </View>
        </View>
      </View>

      {/* Card Content */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Beach Sunset Date</Text>

        {/* Profile Initials */}
        <View style={styles.profileInitialsContainer}>
          <View style={styles.initialsContainer}>
            <View style={styles.initialCircle}>
              <Text style={styles.initialText}>P</Text>
            </View>
            <View style={[styles.initialCircle, { marginLeft: -8 }]}>
              <Text style={styles.initialText}>A</Text>
            </View>
          </View>
          <Text style={styles.profileNamesText}>Peter • Alisha</Text>
        </View>

        {/* Progress Bars */}
        <View style={styles.progressContainer}>
          <ProgressBar label="Trust" percentage={85} />
          <ProgressBar label="Flirtation" percentage={95} />
          <ProgressBar label="Awkwardness" percentage={20} />
        </View>

        {/* Match Score */}
        <View style={styles.matchScoreContainer}>
          <Text style={styles.matchScoreLabel}>Match Score</Text>
          <Text style={styles.matchScoreValue}>96%</Text>
        </View>

        {/* Social Rating, Rate This Date, and Share Button */}
        <View style={styles.socialSection}>
          {/* Social Rating */}
          <View style={styles.socialRatingContainer}>
            <Text style={styles.socialRatingTitle}>Social Rating</Text>
            <View style={styles.socialRatingContent}>
              <View style={styles.svgStarContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <View key={star} style={styles.svgStar}>
                    <Svg width={20} height={20} viewBox="0 0 20 20">
                      <Path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        fill="#BA435F"
                      />
                    </Svg>
                  </View>
                ))}
              </View>
              <Text style={styles.socialRatingValue}>5.0</Text>
            </View>
          </View>

          {/* Rate This Date */}
          <View style={styles.rateThisDateContainer}>
            <View style={styles.rateThisDateHeader}>
              <Text style={styles.rateThisDateText}>Rate this date:</Text>
              <View style={styles.earnSmirrorContainer}>
                <Image
                  source={require("../../public/smirror-coin-icon.png")}
                  style={styles.smirrorIcon}
                />
                <Text style={styles.earnSmirrorText}>Earn SMIRROR</Text>
              </View>
            </View>
            <View style={styles.interactiveStarContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  style={styles.interactiveStarButton}
                  onPress={() => console.log("Rated:", star)}
                >
                  <Svg width={24} height={24} viewBox="0 0 20 20">
                    <Path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      stroke="#BA435F"
                      strokeWidth="1"
                      fill="none"
                    />
                  </Svg>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Share Button */}
          <View style={styles.shareButtonContainer}>
            <TouchableOpacity style={styles.shareButton}>
              <Svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                style={styles.shareIcon}
              >
                <Path
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  stroke="#BA435F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </Svg>
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F4D2D7", "#F8E6E9", "#F4D2D7"]}
        style={styles.gradient}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.headerTitle}>Daily</Text>
              <Text style={styles.headerSubtitle}>Heat Check</Text>
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

          {/* Promotional Banner */}
          <View style={styles.bannerContainer}>
            <View style={styles.banner}>
              <Text style={styles.bannerText}>
                Which couples clicked? Who ghosted who?
              </Text>
              <Text style={styles.bannerSubtext}>Get the full download.</Text>
            </View>
          </View>

          {/* Black Mirror Character Image with Today's Highlights Card */}
          <View style={styles.highlightsContainer}>
            <View style={styles.highlightsCard}>
              {/* Banner Image */}
              <Image
                source={require("../../public/black_mirror_girl.png")}
                style={styles.bannerImage}
                contentFit="cover"
              />

              {/* Today's Highlights Section */}
              <View style={styles.highlightsSection}>
                <TouchableOpacity
                  onPress={() => setHighlightsExpanded(!highlightsExpanded)}
                  style={styles.highlightsButton}
                >
                  <View style={styles.highlightsHeader}>
                    <Image
                      source={require("../../public/Today's_Highlight.png")}
                      style={styles.highlightsIcon}
                    />
                    <Text style={styles.highlightsTitle}>
                      Today's Highlights
                    </Text>
                  </View>
                  <Text style={styles.chevron}>
                    {highlightsExpanded ? "▼" : "▶"}
                  </Text>
                </TouchableOpacity>

                <View style={styles.highlightsContent}>
                  <Text style={styles.highlightsText}>
                    Day 5: Ava & Noah's chemistry soars, Emma & Jackson bond
                    over cooking disasters, Sophia & Liam hit a rough patch.
                  </Text>
                  <View style={styles.predictionMarkets}>
                    <Text style={styles.predictionText}>
                      Prediction markets now open
                    </Text>
                    <Text style={styles.chevron}>▶</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Newest Confessions */}
          <View style={styles.confessionsContainer}>
            <View style={styles.confessionsHeader}>
              <Text style={styles.confessionsTitle}>Newest Confessions</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>View All</Text>
                <Text style={styles.chevron}>▶</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.confessionsScroll}
            >
              <View style={styles.confessionsRow}>
                {confessions.map((confession) => (
                  <View key={confession.id} style={styles.confessionItem}>
                    <View style={styles.confessionImageContainer}>
                      <Image
                        source={confession.image}
                        style={styles.confessionImage}
                        contentFit="cover"
                      />
                    </View>
                    <Text style={styles.confessionName}>{confession.name}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Tab List Component */}
          <View style={styles.tabContainer}>
            <View style={styles.tabNavigator}>
              {["All", "1-on-1", "Group"].map((tab) => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setActiveTab(tab)}
                  style={[
                    styles.tabButton,
                    activeTab === tab && styles.activeTab,
                  ]}
                >
                  <Text
                    style={[
                      styles.tabButtonText,
                      activeTab === tab && styles.activeTabText,
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Date Cards */}
          <View style={styles.dateCardsContainer}>
            <DateCard />
            <DateCard />
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
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
  },
  headerSubtitle: {
    fontSize: 24,
    fontWeight: "normal",
    color: "#BA435F",
    fontFamily: "Georgia",
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
  bannerContainer: {
    marginBottom: 32,
  },
  banner: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderWidth: 1,
    borderColor: "#BA435F",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: 353,
  },
  bannerText: {
    color: "#BA435F",
    fontSize: 14,
    marginBottom: 4,
  },
  bannerSubtext: {
    color: "#BA435F",
    fontSize: 14,
    fontWeight: "600",
  },
  highlightsContainer: {
    marginBottom: 32,
  },
  highlightsCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#BA435F",
  },
  bannerImage: {
    width: "100%",
    height: 270,
  },
  highlightsSection: {
    backgroundColor: "rgba(240, 196, 201, 0.6)",
    padding: 16,
    marginTop: -33,
    paddingTop: 25,
    paddingBottom: 60,
  },
  highlightsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  highlightsHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  highlightsIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  highlightsTitle: {
    color: "#BA435F",
    fontWeight: "600",
    fontSize: 18,
  },
  chevron: {
    color: "#BA435F",
    fontSize: 16,
  },
  highlightsContent: {
    // Container for highlights content
  },
  highlightsText: {
    color: "#BA435F",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  predictionMarkets: {
    flexDirection: "row",
    alignItems: "center",
  },
  predictionText: {
    color: "#BA435F",
    marginRight: 8,
    fontSize: 14,
  },
  confessionsContainer: {
    marginBottom: 24,
  },
  confessionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 0,
  },
  confessionsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#BA435F",
    fontFamily: "Georgia",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    color: "#BA435F",
    fontWeight: "500",
    marginRight: 4,
  },
  confessionsScroll: {
    marginBottom: 8,
  },
  confessionsRow: {
    flexDirection: "row",
    paddingLeft: 0,
    paddingRight: 16,
  },
  confessionItem: {
    alignItems: "center",
    marginRight: 16,
  },
  confessionImageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#BA435F",
    marginBottom: 8,
  },
  confessionImage: {
    width: "100%",
    height: "100%",
  },
  confessionName: {
    color: "#BA435F",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
  tabContainer: {
    marginBottom: 24,
  },
  tabNavigator: {
    flexDirection: "row",
    backgroundColor: "rgba(240, 196, 201, 0.5)",
    borderRadius: 25,
    padding: 4,
    borderWidth: 1,
    borderColor: "#BA435F",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#BA435F",
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#BA435F",
  },
  activeTabText: {
    color: "white",
  },
  dateCardsContainer: {
    paddingBottom: 100,
  },
  dateCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#BA435F",
    marginBottom: 24,
  },
  dateImageContainer: {
    position: "relative",
    height: 192,
  },
  dateImage: {
    width: "100%",
    height: "100%",
  },
  overlayImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  dateTypeTag: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#BA435F",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },
  dateTypeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  timestampContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },
  timestampText: {
    color: "white",
    fontSize: 12,
  },
  profileInfoOverlay: {
    position: "absolute",
    left: "50%",
    bottom: -32,
    transform: [{ translateX: -139 }],
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(240, 196, 201, 0.85)",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#BA435F",
    width: 278,
    height: 80,
    zIndex: 30,
    elevation: 30,
  },
  profileImageContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: "hidden",
    marginRight: 12,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    color: "#BA435F",
    fontWeight: "600",
    fontSize: 16,
  },
  profileDate: {
    color: "#BA435F",
    fontSize: 14,
  },
  cardContent: {
    padding: 16,
    backgroundColor: "#F0D1D8",
  },
  cardTitle: {
    color: "#BA435F",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 36,
  },
  profileInitialsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  initialsContainer: {
    flexDirection: "row",
    marginRight: 12,
  },
  initialCircle: {
    width: 32,
    height: 32,
    backgroundColor: "#374151",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  initialText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  profileNamesText: {
    color: "#BA435F",
    fontSize: 14,
    fontWeight: "normal",
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  progressLabel: {
    color: "#BA435F",
    fontSize: 12,
  },
  progressBarContainer: {
    width: 128,
    height: 8,
    backgroundColor: "#F0C4C9",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#BA435F",
    borderRadius: 4,
  },
  matchScoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(186, 67, 95, 0.2)",
  },
  matchScoreLabel: {
    color: "#BA435F",
    fontSize: 14,
  },
  matchScoreValue: {
    color: "#BA435F",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 50,
  },
  socialSection: {
    backgroundColor: "#EABDC7",
    marginHorizontal: -16,
    marginBottom: -16,
    marginTop: -16,
    padding: 16,
  },
  socialRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  socialRatingTitle: {
    color: "#BA435F",
    fontSize: 18,
    fontWeight: "600",
  },
  socialRatingContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialRatingValue: {
    color: "#BA435F",
    fontSize: 16,
    fontWeight: "600",
  },
  svgStarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  svgStar: {
    marginRight: 2,
  },
  interactiveStarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  interactiveStarButton: {
    marginHorizontal: 4,
  },
  rateThisDateContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  rateThisDateHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  rateThisDateText: {
    color: "#BA435F",
    fontSize: 14,
    marginRight: 8,
  },
  earnSmirrorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  smirrorIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  earnSmirrorText: {
    color: "#BA435F",
    fontSize: 12,
  },
  shareButtonContainer: {
    alignItems: "center",
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  shareIcon: {
    marginRight: 8,
  },
  shareButtonText: {
    color: "#BA435F",
    fontWeight: "500",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starButton: {
    marginHorizontal: 2,
  },
  star: {
    fontSize: 16,
  },
});

export default DashboardScreen;
