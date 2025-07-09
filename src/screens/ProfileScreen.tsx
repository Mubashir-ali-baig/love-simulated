import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Clipboard,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { useAuth } from "../context/AuthContext";

const ProfileScreen = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("Overview");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    Clipboard.setString("https://love-simula...");
    setCopied(true);
    Alert.alert("Copied!", "Invite link copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: logout, style: "destructive" },
    ]);
  };

  const BackIcon = () => (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="m15 18-6-6 6-6"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );

  const UsersIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 24 24">
      <Path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="m22 21-2-2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M16 11c2.5 0 4-1.5 4-4s-1.5-4-4-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );

  const LogoutIcon = () => (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M16 17l5-5-5-5"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M21 12H9"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F4D2D7", "#F8E6E9", "#F4D2D7"]}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Profile</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <LogoutIcon />
          </TouchableOpacity>
        </View>

        {/* Main Content - Scrollable */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            {/* Profile Card */}
            <View style={styles.profileCard}>
              <View style={styles.profileHeader}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../public/Alex Morgan.png")}
                    style={styles.avatar}
                    contentFit="cover"
                  />
                </View>
                <Text style={styles.userName}>Alex Morgan</Text>
                <Text style={styles.userHandle}>@alexmorgan</Text>
                <View style={styles.levelBadge}>
                  <Image
                    source={require("../../public/star.png")}
                    style={styles.starIcon}
                  />
                  <Text style={styles.levelText}>Level 4 Predictor</Text>
                </View>
              </View>

              <View style={styles.balanceSection}>
                <View style={styles.balanceInfo}>
                  <View style={styles.tokenInfo}>
                    <Image
                      source={require("../../public/SMIRROR_yellow.png")}
                      style={styles.tokenIcon}
                    />
                    <Text style={styles.tokenBalance}>1000 SMIRROR</Text>
                  </View>
                  <Text style={styles.levelProgress}>Level 5 in 65%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: "65%" }]} />
                </View>
              </View>

              <View style={styles.statsContainer}>
                <View style={styles.statCard}>
                  <Text style={styles.statLabel}>SMIRROR Spent</Text>
                  <Text style={styles.statValue}>3750</Text>
                </View>
                <View style={styles.statCard}>
                  <Text style={styles.statLabel}>SMIRROR Earned</Text>
                  <Text style={styles.statValue}>3750</Text>
                </View>
              </View>
            </View>

            {/* Invite Friends Section */}
            <View style={styles.inviteSection}>
              <View style={styles.inviteHeader}>
                <View style={styles.inviteTitle}>
                  <View style={styles.inviteIcon}>
                    <UsersIcon />
                  </View>
                  <Text style={styles.inviteTitleText}>Invite Friends</Text>
                </View>
                <View style={styles.rewardBadge}>
                  <Text style={styles.rewardText}>+100 SMIRROR</Text>
                </View>
              </View>

              <Text style={styles.inviteDescription}>
                Invite friends to join Love, Simulated and earn SMIRROR for each
                friend who signs up!
              </Text>

              <View style={styles.linkContainer}>
                <View style={styles.linkBox}>
                  <Text style={styles.linkText}>https://love-simula...</Text>
                </View>
                <TouchableOpacity
                  style={styles.copyButton}
                  onPress={handleCopyLink}
                >
                  <Text style={styles.copyButtonText}>
                    {copied ? "Copied!" : "Copy Link"}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inviteStats}>
                <View style={styles.friendsJoinedBadge}>
                  <Text style={styles.friendsJoinedText}>3 friends joined</Text>
                </View>
                <Text style={styles.earnedText}>+300 SMIRROR earned</Text>
              </View>
            </View>

            {/* Tab Navigation */}
            <View style={styles.tabNavigation}>
              <View style={styles.tabContainer}>
                {["Overview", "History", "Buy Points"].map((tab) => (
                  <TouchableOpacity
                    key={tab}
                    onPress={() => setActiveTab(tab)}
                    style={[
                      styles.tabButton,
                      activeTab === tab && styles.activeTabButton,
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

            {/* Tab Content */}
            <View style={styles.tabContent}>
              {activeTab === "Overview" && (
                <View style={styles.contentCard}>
                  <Text style={styles.contentTitle}>Recent Activity</Text>
                  <View style={styles.activityList}>
                    <Text style={styles.activityItem}>
                      • Voted on Peter & Alisha (+50 SMIRROR)
                    </Text>
                    <Text style={styles.activityItem}>
                      • Predicted Emma's next move (+25 SMIRROR)
                    </Text>
                    <Text style={styles.activityItem}>
                      • Invited friend Sarah (+100 SMIRROR)
                    </Text>
                    <Text style={styles.activityItem}>
                      • Completed daily challenge (+75 SMIRROR)
                    </Text>
                  </View>
                </View>
              )}

              {activeTab === "History" && (
                <View style={styles.contentCard}>
                  <Text style={styles.contentTitle}>Transaction History</Text>
                  <View style={styles.historyList}>
                    <View style={styles.historyItem}>
                      <Text style={styles.historyDescription}>
                        Vote: Peter & Alisha
                      </Text>
                      <Text style={styles.historyAmount}>+50</Text>
                    </View>
                    <View style={styles.historyItem}>
                      <Text style={styles.historyDescription}>
                        Prediction: Emma's choice
                      </Text>
                      <Text style={styles.historyAmount}>+25</Text>
                    </View>
                    <View style={styles.historyItem}>
                      <Text style={styles.historyDescription}>
                        Friend referral
                      </Text>
                      <Text style={styles.historyAmount}>+100</Text>
                    </View>
                  </View>
                </View>
              )}

              {activeTab === "Buy Points" && (
                <View style={styles.contentCard}>
                  <Text style={styles.contentTitle}>Purchase SMIRROR</Text>
                  <View style={styles.purchaseList}>
                    <View style={styles.purchaseItem}>
                      <Text style={styles.purchaseAmount}>500 SMIRROR</Text>
                      <Text style={styles.purchasePrice}>$4.99</Text>
                    </View>
                    <View style={styles.purchaseItem}>
                      <Text style={styles.purchaseAmount}>1,200 SMIRROR</Text>
                      <Text style={styles.purchasePrice}>$9.99</Text>
                    </View>
                    <View style={styles.purchaseItem}>
                      <Text style={styles.purchaseAmount}>2,500 SMIRROR</Text>
                      <Text style={styles.purchasePrice}>$19.99</Text>
                    </View>
                  </View>
                </View>
              )}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#BA435F",
    fontFamily: "Georgia",
    flex: 1,
    textAlign: "center",
  },
  logoutButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  profileCard: {
    backgroundColor: "#BA435F",
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 16,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: 12,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  userName: {
    fontSize: 20,
    fontWeight: "normal",
    color: "white",
    marginBottom: 4,
  },
  userHandle: {
    fontSize: 16,
    color: "#F0C4C9",
    marginBottom: 8,
  },
  levelBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    height: 20,
  },
  starIcon: {
    width: 10,
    height: 9.54,
    marginRight: 4,
  },
  levelText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  balanceSection: {
    marginBottom: 16,
  },
  balanceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  tokenInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  tokenIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  tokenBalance: {
    fontSize: 16,
    color: "#F0C4C9",
  },
  levelProgress: {
    fontSize: 16,
    color: "#F0C4C9",
  },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 4,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    padding: 16,
    width: 145,
    alignItems: "center",
  },
  statLabel: {
    fontSize: 14,
    color: "#F0C4C9",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  inviteSection: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#BA435F",
    marginBottom: 24,
  },
  inviteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  inviteTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  inviteIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#BA435F",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  inviteTitleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#BA435F",
  },
  rewardBadge: {
    backgroundColor: "#E9D5FF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  rewardText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7C3AED",
  },
  inviteDescription: {
    fontSize: 14,
    color: "#BA435F",
    marginBottom: 16,
    lineHeight: 20,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  linkBox: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#BA435F",
  },
  linkText: {
    fontSize: 14,
    color: "#BA435F",
  },
  copyButton: {
    backgroundColor: "#BA435F",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  copyButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  inviteStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  friendsJoinedBadge: {
    backgroundColor: "#BA435F",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  friendsJoinedText: {
    fontSize: 14,
    color: "white",
  },
  earnedText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#BA435F",
  },
  tabNavigation: {
    marginBottom: 24,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderRadius: 12,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  activeTabButton: {
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
  tabContent: {
    marginBottom: 24,
  },
  contentCard: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#BA435F",
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#BA435F",
    marginBottom: 12,
  },
  activityList: {
    gap: 8,
  },
  activityItem: {
    fontSize: 14,
    color: "#BA435F",
    lineHeight: 20,
  },
  historyList: {
    gap: 12,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyDescription: {
    fontSize: 14,
    color: "#BA435F",
  },
  historyAmount: {
    fontSize: 14,
    fontWeight: "500",
    color: "#16A34A",
  },
  purchaseList: {
    gap: 12,
  },
  purchaseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#BA435F",
  },
  purchaseAmount: {
    fontSize: 16,
    fontWeight: "500",
    color: "#BA435F",
  },
  purchasePrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#BA435F",
  },
});

export default ProfileScreen;
