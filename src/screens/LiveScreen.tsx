import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

const LiveScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F4D2D7", "#F8E6E9", "#F4D2D7"]}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView}>
          {/* Live Video Section */}
          <View style={styles.videoContainer}>
            {/* Top Half - Ava */}
            <View style={styles.topHalf}>
              <Image
                source={require("../../public/live_1.png")}
                style={styles.topImage}
                contentFit="cover"
              />

              {/* Live Text - Top Left */}
              <View style={styles.liveTextContainer}>
                <Text style={styles.liveText}>Live</Text>
              </View>

              {/* Live Badge and Watching Count - Top Right */}
              <View style={styles.liveBadgeContainer}>
                <View style={styles.liveBadge}>
                  <View style={styles.liveDot} />
                  <Text style={styles.liveBadgeText}>LIVE</Text>
                </View>
                <View style={styles.watchingContainer}>
                  <Text style={styles.watchingText}>1,243 watching</Text>
                </View>
              </View>
            </View>

            {/* Bottom Half - Noah */}
            <View style={styles.bottomHalf}>
              <Image
                source={require("../../public/live_2.png")}
                style={styles.bottomImage}
                contentFit="cover"
              />

              {/* Sponsored Overlay */}
              <View style={styles.sponsoredContainer}>
                <View style={styles.sponsoredBadge}>
                  <Text style={styles.sponsoredText}>ABSOLUT SPONSORED</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Episode Information */}
          <View style={styles.episodeInfo}>
            {/* Episode Title */}
            <View style={styles.episodeTitle}>
              <Text style={styles.episodeEmoji}>🎬</Text>
              <Text style={styles.episodeTitleText}>
                Episode 5: The Real Test Begins
              </Text>
            </View>

            {/* Episode Description */}
            <View style={styles.episodeDescription}>
              <Text style={styles.episodeDescriptionText}>
                Tonight, Ava and Noah meet in person for the first time after
                their digital twins sparked waves of chemistry during that
                unforgettable beach sunset date.
              </Text>
              <Text style={styles.episodeDescriptionText}>
                But will the human vibes match the algorithm's prediction? Tune
                in to watch real emotions, raw reactions – and rate the real
                connection.
              </Text>
            </View>
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
  },
  videoContainer: {
    width: "100%",
  },
  topHalf: {
    position: "relative",
    height: 270,
    backgroundColor: "#E5E5E5",
  },
  topImage: {
    width: "100%",
    height: "100%",
  },
  liveTextContainer: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  liveText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  liveBadgeContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  liveBadge: {
    backgroundColor: "#DC2626",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  liveDot: {
    width: 8,
    height: 8,
    backgroundColor: "white",
    borderRadius: 4,
    marginRight: 8,
  },
  liveBadgeText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  watchingContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  watchingText: {
    color: "white",
    fontSize: 14,
  },
  bottomHalf: {
    position: "relative",
    height: 262,
    backgroundColor: "#D1D5DB",
  },
  bottomImage: {
    width: "100%",
    height: "100%",
  },
  sponsoredContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  sponsoredBadge: {
    backgroundColor: "#BA435F",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  sponsoredText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  episodeInfo: {
    backgroundColor: "#F4D2D7",
    padding: 24,
    paddingBottom: 100, // Extra padding for tab bar
  },
  episodeTitle: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  episodeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  episodeTitleText: {
    flex: 1,
    color: "#BA435F",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
  },
  episodeDescription: {
    gap: 12,
  },
  episodeDescriptionText: {
    color: "#BA435F",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
});

export default LiveScreen;
