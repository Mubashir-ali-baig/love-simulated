# Love, Simulated 💕

A React Native dating simulation app inspired by reality TV shows, where users can engage with contestants, make predictions, earn tokens, and participate in interactive dating scenarios.

## 📱 Features

### 🔐 Authentication System

- **User Registration** - Create account with email, password, and profile details
- **Secure Login** - Email/password authentication with remember me option
- **Forgot Password** - Reset password with 6-digit verification code
- **Social Login Options** - Google, Facebook, and Apple sign-in integration (UI ready)

### 🏠 Dashboard

- **Daily Heat Check** - Stay updated with the latest drama
- **SMIRROR Token Balance** - Track your in-app currency
- **Today's Highlights** - Featured content and updates
- **Newest Confessions** - Browse latest contestant interactions
- **Interactive Cards** - Rate dates with Trust, Flirtation, and Awkwardness metrics

### 👥 Contestants (Contenders)

- **Browse Profiles** - Explore contestant gallery with 2-column grid layout
- **Search & Filter** - Find specific contestants by name
- **Rating System** - View contestant ratings and compatibility scores
- **Match Information** - See top matches and compatibility percentages

### 📺 Live Features

- **Live Streaming Interface** - Real-time content viewing
- **Interactive Elements** - Engage with live events

### 🗳️ Voting System

- **Date Scenarios** - Vote on different dating scenarios
- **Location-based Voting** - Beach sunset, luxury yacht, and more
- **Progress Tracking** - Monitor voting outcomes
- **Token Rewards** - Earn SMIRROR tokens for participation

### 👤 Profile Management

- **Personal Dashboard** - View profile statistics and achievements
- **Token Management** - Track SMIRROR earnings and spending
- **Friend Invitations** - Invite friends and earn bonus tokens
- **Activity History** - Review voting history and transactions
- **Level Progression** - Advance through predictor levels
- **Secure Logout** - Safe account management

## 🛠️ Tech Stack

- **Frontend**: React Native with Expo
- **Navigation**: React Navigation v6 (Stack + Bottom Tabs)
- **State Management**: React Context API with useReducer
- **Storage**: AsyncStorage for local data persistence
- **UI Components**: Custom components with React Native SVG
- **Styling**: StyleSheet with custom gradient themes
- **Images**: Expo Image for optimized performance
- **Icons**: Custom PNG icons with tint color support

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator or Android Emulator (or Expo Go app on device)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/love-simulated.git
cd love-simulated
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npx expo start
```

4. **Run on device/emulator**

- **iOS**: Press `i` in terminal or scan QR code with Camera app
- **Android**: Press `a` in terminal or scan QR code with Expo Go app
- **Web**: Press `w` in terminal

## 📁 Project Structure

```
love-simulated/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ContenderCard.tsx
│   │   └── CustomTabBar.tsx
│   ├── context/            # React Context providers
│   │   └── AuthContext.tsx
│   ├── screens/            # Main app screens
│   │   ├── DashboardScreen.tsx
│   │   ├── ContendersScreen.tsx
│   │   ├── LiveScreen.tsx
│   │   ├── VoteScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── SignupScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── ForgotPasswordScreen.tsx
│   │   └── ResetPasswordScreen.tsx
│   ├── types/              # TypeScript definitions
│   │   └── auth.ts
│   └── webAppScreens/      # Web version components (reference)
├── public/                 # Static assets
│   ├── icons/             # Navigation and UI icons
│   ├── images/            # Profile pictures and backgrounds
│   └── mockups/           # Design references
├── App.tsx                # Main app entry point
└── package.json
```

## 🎨 Design System

### Color Palette

- **Primary**: `#BA435F` (Rose)
- **Secondary**: `#F4D2D7` (Light Pink)
- **Gradient**: `#F4D2D7` → `#F8E6E9` → `#F4D2D7`
- **Background**: `#F0C4C9` with opacity variations
- **Text**: `#BA435F` for primary text

### Typography

- **Headings**: Georgia serif font family
- **Body**: System default with various weights (300-600)
- **Sizes**: 12px - 48px responsive scaling

## 🔄 State Management

The app uses React Context API for state management:

- **AuthContext**: Handles user authentication, signup, login, password reset
- **Local Storage**: AsyncStorage for persistent user data and credentials
- **Token System**: SMIRROR token balance and transaction tracking

## 📱 Features in Detail

### Authentication Flow

1. User signs up with email/password
2. Credentials stored locally with encryption
3. Login validates against stored credentials
4. Forgot password generates 6-digit reset code
5. Password reset updates stored credentials

### Token Economy

- **Earning**: Vote on dates, invite friends, complete challenges
- **Spending**: Access premium content, boost profiles
- **Tracking**: Real-time balance updates and transaction history

### Interactive Elements

- **Rating System**: Star-based ratings with SVG icons
- **Progress Bars**: Visual feedback for various metrics
- **Search/Filter**: Real-time filtering of contestants
- **Tab Navigation**: Custom icons with active state indication

## 🧪 Testing

### Manual Testing Checklist

- [ ] User registration and login
- [ ] Password reset flow
- [ ] Navigation between all screens
- [ ] Token balance updates
- [ ] Search and filter functionality
- [ ] Voting interactions
- [ ] Profile management features

### Test User Accounts

For development testing, you can create accounts with any email/password combination. The forgot password feature will log the reset code to the console.

## 🚧 Future Enhancements

- [ ] Real-time chat functionality
- [ ] Push notifications for live events
- [ ] In-app purchases for SMIRROR tokens
- [ ] Advanced matching algorithms
- [ ] Video content integration
- [ ] Social media sharing
- [ ] Analytics dashboard
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Expo team for the amazing development platform
- React Navigation for smooth navigation experience
- All contributors and testers who helped shape this app

## 📞 Support

For support, email support@lovesimulated.app or join our Discord community.

---

**Built with ❤️ using React Native and Expo**
