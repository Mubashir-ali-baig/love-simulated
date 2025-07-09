import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const { signup, isLoading } = useAuth();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.dateOfBirth ||
      !formData.password
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      await signup(formData);
      Alert.alert("Success", "Account created successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to create account. Please try again.");
    }
  };

  const navigateToLogin = () => {
    navigation.navigate("Login" as never);
  };

  const EyeIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 24 24">
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
    <Svg width={16} height={16} viewBox="0 0 24 24">
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

  const CalendarIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 24 24">
      <Path
        d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        stroke="#BA435F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );

  const GoogleIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <Path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <Path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <Path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </Svg>
  );

  const FacebookIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        fill="#1877F2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </Svg>
  );

  const AppleIcon = () => (
    <Svg width={20} height={20} viewBox="0 0 24 24">
      <Path
        fill="#000000"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
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
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.title}>Signup</Text>
                <Text style={styles.subtitle}>
                  Create an account to continue!
                </Text>
              </View>

              {/* Form */}
              <View style={styles.form}>
                {/* Full Name */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Full Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Full Name"
                    placeholderTextColor="rgba(186, 67, 95, 0.6)"
                    value={formData.fullName}
                    onChangeText={(value) =>
                      handleInputChange("fullName", value)
                    }
                    autoCapitalize="words"
                  />
                </View>

                {/* Email */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Email Address</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Email Address"
                    placeholderTextColor="rgba(186, 67, 95, 0.6)"
                    value={formData.email}
                    onChangeText={(value) => handleInputChange("email", value)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                {/* Date of Birth */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Date of Birth</Text>
                  <View style={styles.inputWithIcon}>
                    <TextInput
                      style={[styles.input, styles.inputWithIconText]}
                      placeholder="Enter DOB"
                      placeholderTextColor="rgba(186, 67, 95, 0.6)"
                      value={formData.dateOfBirth}
                      onChangeText={(value) =>
                        handleInputChange("dateOfBirth", value)
                      }
                    />
                    <View style={styles.iconContainer}>
                      <CalendarIcon />
                    </View>
                  </View>
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputWithIcon}>
                    <TextInput
                      style={[styles.input, styles.inputWithIconText]}
                      placeholder="Enter Password"
                      placeholderTextColor="rgba(186, 67, 95, 0.6)"
                      value={formData.password}
                      onChangeText={(value) =>
                        handleInputChange("password", value)
                      }
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

                {/* Register Button */}
                <TouchableOpacity
                  style={[
                    styles.registerButton,
                    isLoading && styles.registerButtonDisabled,
                  ]}
                  onPress={handleSubmit}
                  disabled={isLoading}
                >
                  <Text style={styles.registerButtonText}>
                    {isLoading ? "Creating Account..." : "Register"}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Social Login */}
              <View style={styles.socialSection}>
                <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>Or Signup with</Text>
                  <View style={styles.dividerLine} />
                </View>

                <View style={styles.socialButtons}>
                  <TouchableOpacity style={styles.socialButton}>
                    <GoogleIcon />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                    <FacebookIcon />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialButton}>
                    <AppleIcon />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Login Link */}
              <View style={styles.loginLink}>
                <Text style={styles.loginText}>
                  Already have an account?{" "}
                  <Text style={styles.loginLinkText} onPress={navigateToLogin}>
                    Login
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 24,
    paddingBottom: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "300",
    color: "#BA435F",
    marginBottom: 8,
    fontFamily: "Georgia",
  },
  subtitle: {
    fontSize: 16,
    color: "#BA435F",
    fontWeight: "300",
  },
  form: {
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#BA435F",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "rgba(240, 196, 201, 0.5)",
    borderWidth: 1,
    borderColor: "#BA435F",
    borderRadius: 16,
    height: 48,
    paddingHorizontal: 16,
    fontSize: 14,
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
    right: 12,
    top: 16,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#BA435F",
    borderRadius: 16,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  registerButtonDisabled: {
    backgroundColor: "rgba(186, 67, 95, 0.6)",
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  socialSection: {
    marginBottom: 24,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#BA435F",
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "#BA435F",
    fontWeight: "300",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialButton: {
    backgroundColor: "#F0D1D8",
    width: 88.33,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginLink: {
    alignItems: "center",
  },
  loginText: {
    fontSize: 14,
    color: "#BA435F",
    fontWeight: "300",
  },
  loginLinkText: {
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});

export default SignupScreen;
