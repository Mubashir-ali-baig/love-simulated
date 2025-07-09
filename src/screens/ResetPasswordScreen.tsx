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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { useAuth } from "../context/AuthContext";
import { useNavigation, useRoute } from "@react-navigation/native";

const ResetPasswordScreen = () => {
  const { resetPassword, isLoading } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params as { email: string };

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async () => {
    if (!code || !newPassword || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    try {
      await resetPassword({ email, code, newPassword });
      Alert.alert("Success", "Your password has been reset successfully!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login" as never),
        },
      ]);
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to reset password");
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

  const EyeIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );

  const EyeOffIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M1 1l22 22"
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

          <View style={styles.content}>
            {/* Title and Description */}
            <View style={styles.titleSection}>
              <Text style={styles.title}>Reset Password</Text>
              <Text style={styles.description}>
                Enter the 6-digit code sent to your email{"\n"}
                and create a new password
              </Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              {/* Reset Code */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Reset Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter 6-digit code"
                  placeholderTextColor="rgba(186, 67, 95, 0.7)"
                  value={code}
                  onChangeText={setCode}
                  keyboardType="numeric"
                  maxLength={6}
                />
              </View>

              {/* New Password */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>New Password</Text>
                <View style={styles.inputWithIcon}>
                  <TextInput
                    style={[styles.input, styles.inputWithIconText]}
                    placeholder="Enter new password"
                    placeholderTextColor="rgba(186, 67, 95, 0.7)"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Confirm Password */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.inputWithIcon}>
                  <TextInput
                    style={[styles.input, styles.inputWithIconText]}
                    placeholder="Confirm new password"
                    placeholderTextColor="rgba(186, 67, 95, 0.7)"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Reset Button */}
            <TouchableOpacity
              style={[
                styles.resetButton,
                isLoading && styles.resetButtonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={isLoading}
            >
              <Text style={styles.resetButtonText}>
                {isLoading ? "Resetting..." : "Reset Password"}
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
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "space-between",
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
  form: {
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
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
  inputWithIcon: {
    position: "relative",
  },
  inputWithIconText: {
    paddingRight: 48,
  },
  iconContainer: {
    position: "absolute",
    right: 14,
    top: 13,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#BA435F",
    borderRadius: 10,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120,
  },
  resetButtonDisabled: {
    backgroundColor: "rgba(186, 67, 95, 0.6)",
  },
  resetButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ResetPasswordScreen;
