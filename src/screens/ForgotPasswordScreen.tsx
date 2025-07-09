import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const { forgotPassword, isLoading } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address");
      return;
    }

    try {
      await forgotPassword({ email });
      Alert.alert(
        "Reset Code Sent",
        "A 6-digit reset code has been logged to the console. In a real app, this would be sent to your email.",
        [
          {
            text: "OK",
            onPress: () =>
              navigation.navigate("ResetPassword" as never, { email }),
          },
        ]
      );
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to send reset code");
    }
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

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F4D2D7", "#F8E6E9", "#F8E6E9", "#F4D2D7"]}
        locations={[0, 0.4, 0.6, 1]}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <BackIcon />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>
              {/* Title and Description */}
              <View style={styles.titleSection}>
                <Text style={styles.title}>Forgot Password?</Text>
                <Text style={styles.description}>
                  Enter the email address with your account,{"\n"}
                  we'll send a email to reset your password
                </Text>
              </View>

              {/* Email Input */}
              <View style={styles.inputSection}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email Address"
                  placeholderTextColor="rgba(186, 67, 95, 0.7)"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>
          </ScrollView>

          {/* Continue Button - Fixed at bottom */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.continueButton,
                isLoading && styles.continueButtonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={isLoading}
            >
              <Text style={styles.continueButtonText}>
                {isLoading ? "Sending..." : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 32,
    paddingTop: 8,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: 32,
  },
  titleSection: {
    marginTop: 32,
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "300",
    color: "#BA435F",
    marginBottom: 16,
    fontFamily: "Georgia",
  },
  description: {
    fontSize: 12,
    color: "#BA435F",
    fontWeight: "300",
    lineHeight: 18,
  },
  inputSection: {
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#BA435F",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "rgba(240, 196, 201, 0.3)",
    borderWidth: 1,
    borderColor: "#BA435F",
    borderRadius: 10,
    height: 46,
    paddingHorizontal: 14,
    fontSize: 16,
    color: "#BA435F",
  },
  buttonContainer: {
    paddingHorizontal: 32,
    paddingBottom: 32,
    paddingTop: 16,
  },
  continueButton: {
    backgroundColor: "#BA435F",
    borderRadius: 10,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonDisabled: {
    backgroundColor: "rgba(186, 67, 95, 0.6)",
  },
  continueButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ForgotPasswordScreen;
