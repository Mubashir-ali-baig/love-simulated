import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";

interface ContenderCardProps {
  contestant: {
    id: number;
    name: string;
    rating: number;
    topMatch: string;
    matchPercent: number;
    profileImage: string;
    topMatchImage: string;
  };
}

export default function ContenderCard({ contestant }: ContenderCardProps) {
  return (
    <View style={styles.container}>
      {/* Background image */}
      <Image
        source={contestant.profileImage}
        style={styles.backgroundImage}
        contentFit="cover"
      />

      {/* Gradient overlay */}
      <Image
        source={require("../../public/Gradient (1).png")}
        style={styles.gradientOverlay}
        contentFit="cover"
      />

      {/* Rating badge - top left with green dot */}
      <View style={styles.ratingBadge}>
        <View style={styles.greenDot} />
        <Text style={styles.ratingText}>{contestant.rating}</Text>
        <Image
          source={require("../../public/star.png")}
          style={styles.starIcon}
          contentFit="cover"
        />
      </View>

      {/* Top Match section */}
      <View style={styles.topMatchContainer}>
        <View style={styles.topMatchCard}>
          <View style={styles.topMatchImageContainer}>
            <Image
              source={contestant.topMatchImage}
              style={styles.topMatchImage}
              contentFit="cover"
            />
          </View>
          <View style={styles.topMatchInfo}>
            <View style={styles.topMatchLabel}>
              <Text style={styles.topMatchLabelText}>Top</Text>
              <Text style={styles.topMatchLabelText}>Match:</Text>
            </View>
            <View style={styles.topMatchDetails}>
              <Text style={styles.topMatchName}>{contestant.topMatch}</Text>
              <Text style={styles.topMatchPercent}>
                {contestant.matchPercent}%
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom section with name and camera button */}
      <View style={styles.bottomSection}>
        <Text style={styles.contestantName}>{contestant.name}</Text>
        <TouchableOpacity style={styles.cameraButton}>
          <Image
            source={require("../../public/Ellipse 15.png")}
            style={styles.cameraButtonBackground}
            contentFit="cover"
          />
          <Image
            source={require("../../public/camera.png")}
            style={styles.cameraIcon}
            contentFit="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 164.83,
    height: 260,
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderWidth: 1,
    borderColor: "#BA435F",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  gradientOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  ratingBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  greenDot: {
    width: 6.52,
    height: 6.53,
    backgroundColor: "#22C55E",
    borderRadius: 3.26,
  },
  ratingText: {
    color: "white",
    fontSize: 12,
    fontFamily: "System",
    fontWeight: "400",
  },
  starIcon: {
    width: 8,
    height: 7.63,
  },
  topMatchContainer: {
    position: "absolute",
    bottom: 56,
    left: 8,
    right: 8,
  },
  topMatchCard: {
    backgroundColor: "rgba(234, 189, 199, 0.8)",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(186, 67, 95, 0.3)",
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  topMatchImageContainer: {
    width: 32,
    height: 32,
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
  },
  topMatchImage: {
    width: "100%",
    height: "100%",
  },
  topMatchInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topMatchLabel: {
    alignItems: "flex-start",
  },
  topMatchLabelText: {
    color: "#BA435F",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 14,
  },
  topMatchDetails: {
    alignItems: "flex-end",
  },
  topMatchName: {
    color: "#BA435F",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 14,
  },
  topMatchPercent: {
    color: "#BA435F",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 14,
  },
  bottomSection: {
    position: "absolute",
    bottom: 8,
    left: 0,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
  },
  contestantName: {
    color: "#BA435F",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Georgia",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  cameraButton: {
    width: 48,
    height: 48,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraButtonBackground: {
    width: 29.17,
    height: 29.17,
    position: "absolute",
  },
  cameraIcon: {
    width: 9.88,
    height: 7.9,
    position: "absolute",
  },
});
