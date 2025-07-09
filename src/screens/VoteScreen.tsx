import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

interface VotingCardProps {
  coupleImage: any;
  person1Image: any;
  person2Image: any;
  coupleName: string;
  currentVotes: number;
  percentage: number;
  currentDateSpot: string;
  upgradeTo: string;
  voteCost: number;
}

const VoteScreen = () => {
  const [activeTab, setActiveTab] = useState("Vote");

  const votingData = [
    {
      coupleImage: require("../../public/Ava & Noah.png"),
      person1Image: require("../../public/image 9.png"),
      person2Image: require("../../public/Noah.png"),
      coupleName: "Ava and Noah",
      currentVotes: 1250,
      percentage: 42,
      currentDateSpot: "Beach Sunset",
      upgradeTo: "Luxury Yacht Cruise",
      voteCost: 50,
    },
    {
      coupleImage: require("../../public/Ava & Noah.png"),
      person1Image: require("../../public/image 9.png"),
      person2Image: require("../../public/Noah.png"),
      coupleName: "Ava and Noah",
      currentVotes: 1250,
      percentage: 42,
      currentDateSpot: "Beach Sunset",
      upgradeTo: "Luxury Yacht Cruise",
      voteCost: 50,
    },
  ];

  const topPredictors = [
    { rank: 1, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 2, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 3, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 4, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 5, name: "PredictionKing", streak: 5, points: 12500 },
  ];

  const VotingCard = ({
    coupleImage,
    person1Image,
    person2Image,
    coupleName,
    currentVotes,
    percentage,
    currentDateSpot,
    upgradeTo,
    voteCost,
  }: VotingCardProps) => (
    <View style={styles.votingCard}>
      <View style={styles.coupleImageContainer}>
        <Image
          source={coupleImage}
          style={styles.coupleImage}
          contentFit="cover"
        />
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.7)"]}
          style={styles.imageGradient}
        />
        <View style={styles.coupleInfo}>
          <View style={styles.avatarContainer}>
            <Image
              source={person1Image}
              style={styles.avatar}
              contentFit="cover"
            />
            <Text style={styles.coupleName}>{coupleName}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.voteStats}>
          <Text style={styles.currentVotes}>
            Current votes: {currentVotes.toLocaleString()}
          </Text>
          <Text style={styles.percentage}>{percentage}%</Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${percentage}%` }]} />
          </View>
        </View>

        <View style={styles.dateSpotContainer}>
          <View style={styles.dateSpot}>
            <Text style={styles.dateSpotLabel}>Current Date Spot</Text>
            <Text style={styles.dateSpotValue}>{currentDateSpot}</Text>
          </View>
          <View style={styles.dateSpot}>
            <Text style={styles.dateSpotLabel}>Upgrade To</Text>
            <Text style={styles.dateSpotValue}>{upgradeTo}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.voteButton}>
          <Text style={styles.voteButtonText}>Vote for {voteCost} SMIRROR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F4D2D7", "#F8E6E9", "#F4D2D7"]}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.headerTitle}>Vote &</Text>
              <Text style={styles.headerSubtitle}>Leaderboard</Text>
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

          <Text style={styles.subtitle}>
            Stake $MIRROR on your predictions and vote for your favorite couples
          </Text>

          {/* Tab Navigation */}
          <View style={styles.tabContainer}>
            <View style={styles.tabNavigator}>
              {["Vote", "Leaderboard"].map((tab) => (
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

          {/* Content */}
          <View style={styles.content}>
            {activeTab === "Vote" && (
              <View style={styles.voteContent}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Current Voting</Text>
                  <Text style={styles.timeLeft}>Ends in 5 hours</Text>
                </View>

                {votingData.map((vote, index) => (
                  <VotingCard
                    key={index}
                    coupleImage={vote.coupleImage}
                    person1Image={vote.person1Image}
                    person2Image={vote.person2Image}
                    coupleName={vote.coupleName}
                    currentVotes={vote.currentVotes}
                    percentage={vote.percentage}
                    currentDateSpot={vote.currentDateSpot}
                    upgradeTo={vote.upgradeTo}
                    voteCost={vote.voteCost}
                  />
                ))}
              </View>
            )}

            {activeTab === "Leaderboard" && (
              <View style={styles.leaderboardContent}>
                <View style={styles.leaderboardCard}>
                  <View style={styles.leaderboardHeader}>
                    <Image
                      source={require("../../public/leaderboard_trophy.png")}
                      style={styles.trophyIcon}
                    />
                    <Text style={styles.leaderboardTitle}>Top Predictors</Text>
                  </View>

                  <View style={styles.predictorsList}>
                    {topPredictors.map((predictor) => (
                      <View key={predictor.rank} style={styles.predictorItem}>
                        <View style={styles.predictorLeft}>
                          <View style={styles.rankBadge}>
                            <Text style={styles.rankText}>
                              {predictor.rank}
                            </Text>
                          </View>
                          <Image
                            source={require("../../public/predictor_king.png")}
                            style={styles.predictorAvatar}
                            contentFit="cover"
                          />
                          <View style={styles.predictorInfo}>
                            <Text
                              style={styles.predictorName}
                              numberOfLines={1}
                              ellipsizeMode="tail"
                            >
                              {predictor.name}
                            </Text>
                            <Text
                              style={styles.predictorStreak}
                              numberOfLines={1}
                              ellipsizeMode="tail"
                            >
                              {predictor.streak} win streak 🔥
                            </Text>
                          </View>
                        </View>
                        <View style={styles.predictorRight}>
                          <Text
                            style={styles.predictorPoints}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                          >
                            {predictor.points.toLocaleString()}
                          </Text>
                          <Text
                            style={styles.predictorCurrency}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                          >
                            SMIRROR
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>

                  <TouchableOpacity style={styles.fullRankingsButton}>
                    <Text style={styles.fullRankingsText}>
                      View Full Rankings
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
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
    paddingBottom: 100,
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
  subtitle: {
    color: "#BA435F",
    fontSize: 14,
    marginBottom: 16,
  },
  tabContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  tabNavigator: {
    flexDirection: "row",
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderRadius: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: "#BA435F",
    width: 350,
    height: 40,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
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
  content: {
    flex: 1,
  },
  voteContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#BA435F",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "System",
  },
  timeLeft: {
    color: "#8F5260",
    fontSize: 14,
  },
  votingCard: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#BA435F",
  },
  coupleImageContainer: {
    position: "relative",
    width: 360,
    height: 174,
  },
  coupleImage: {
    width: 360,
    height: 174,
  },
  imageGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  coupleInfo: {
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  coupleName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    padding: 16,
  },
  voteStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  currentVotes: {
    color: "#BA435F",
    fontSize: 14,
  },
  percentage: {
    color: "#BA435F",
    fontSize: 14,
    fontWeight: "500",
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#374151",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#008631",
    borderRadius: 4,
  },
  dateSpotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dateSpot: {
    backgroundColor: "#EEBFC8",
    padding: 12,
    borderRadius: 8,
    width: 155,
    height: 81,
  },
  dateSpotLabel: {
    color: "#BA435F",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  dateSpotValue: {
    color: "#8B3A4D",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 20,
    textShadowColor: "rgba(255, 255, 255, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  voteButton: {
    backgroundColor: "#BA435F",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  voteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  leaderboardContent: {
    paddingBottom: 20,
  },
  leaderboardCard: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#BA435F",
  },
  leaderboardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  trophyIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  leaderboardTitle: {
    color: "#BA435F",
    fontSize: 20,
    fontWeight: "bold",
  },
  predictorsList: {
    marginBottom: 16,
  },
  predictorItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  predictorLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },
  rankBadge: {
    width: 32,
    height: 32,
    backgroundColor: "#BA435F",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rankText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  predictorAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  predictorInfo: {
    flex: 1,
    maxWidth: 120,
  },
  predictorName: {
    color: "#BA435F",
    fontSize: 16,
    fontWeight: "500",
  },
  predictorStreak: {
    color: "#8F5260",
    fontSize: 12,
  },
  predictorRight: {
    alignItems: "flex-end",
    minWidth: 80,
  },
  predictorPoints: {
    color: "#BA435F",
    fontSize: 16,
    fontWeight: "bold",
  },
  predictorCurrency: {
    color: "#8F5260",
    fontSize: 12,
  },
  fullRankingsButton: {
    backgroundColor: "#BA435F",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  fullRankingsText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default VoteScreen;
