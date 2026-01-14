# RNPostsApp

A React Native application that displays posts from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts), organized by user with an elegant UI featuring horizontal scrolling cards, search functionality, and detailed post views.

## Features

- **User-Grouped Posts**: Posts are automatically grouped by userId and displayed in separate sections
- **Horizontal Scrolling**: Each user's posts scroll horizontally within their card, while users scroll vertically
- **Smart Text Truncation**: 
  - Post titles are limited to 2 lines with ellipsis
  - Post bodies are limited to 4 lines with ellipsis
- **Post Details Navigation**: Tap "Read more" to view the full post content on a dedicated detail screen
- **Search Functionality**: Search posts by title or body with persistent search history using AsyncStorage
- **Skeleton Loader**: Professional loading UI with pulse animation that matches the actual card structure
- **Fixed Card Layout**: Cards have a consistent 220px height with buttons positioned at the bottom
- **Network Configuration**: Configured for both secure and cleartext HTTP traffic

## Tech Stack

- **React Native**: 0.83.1 with New Architecture enabled
- **React Navigation**: Native Stack Navigator for screen transitions
- **TypeScript**: Full type safety across the codebase
- **AsyncStorage**: Persistent local data storage
- **Axios**: HTTP client for API requests
- **Animated API**: Smooth skeleton loader animations

## Project Structure

```
RNPostsApp/
├── src/
│   ├── components/
│   │   ├── PostCard.tsx          # Horizontal scrolling post cards
│   │   └── SkeletonLoader.tsx    # Animated loading placeholder
│   ├── screens/
│   │   ├── HomeScreen.tsx        # Main screen with grouped posts
│   │   └── PostDetailScreen.tsx  # Full post detail view
│   ├── services/
│   │   └── postService.ts        # API service for fetching posts
│   ├── types/
│   │   └── Post.ts               # TypeScript interfaces
│   └── utils/
│       └── storage.ts            # AsyncStorage utilities
├── android/                      # Android native configuration
├── ios/                          # iOS native configuration
└── App.tsx                       # Root component with navigation
```

## Prerequisites

Before you begin, ensure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment).

**Required:**
- Node.js >= 20
- npm or yarn
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- JDK 17 or higher

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd RNPostsApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **For iOS** (macOS only):
   ```bash
   # Install Ruby bundler
   bundle install
   
   # Install CocoaPods dependencies
   cd ios
   bundle exec pod install
   cd ..
   ```

## Running the App

### Android

1. **Start Metro bundler**:
   ```bash
   npm start
   ```

2. **In a new terminal, run the app**:
   ```bash
   npm run android
   ```

   Or use the React Native CLI directly:
   ```bash
   npx react-native run-android
   ```

### iOS

1. **Start Metro bundler**:
   ```bash
   npm start
   ```

2. **In a new terminal, run the app**:
   ```bash
   npm run ios
   ```

   Or use the React Native CLI directly:
   ```bash
   npx react-native run-ios
   ```

## Development

### Clear Metro Cache

If you encounter bundler issues, clear the Metro cache:

```bash
npx react-native start --reset-cache
```

### Clean Build

For Android:
```bash
cd android
./gradlew clean
cd ..
```

### Reload the App

- **Android**: Press <kbd>R</kbd> twice or <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) / <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS) to open the Dev Menu
- **iOS**: Press <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in the iOS Simulator

## Key Components

### HomeScreen
The main screen that:
- Fetches posts from the API
- Groups posts by userId
- Displays skeleton loaders during data fetch
- Implements search functionality with filter
- Handles navigation to post details

### PostCard
A reusable component that:
- Displays a user's posts in a horizontal scrollable list
- Shows user badge and post count
- Truncates title (2 lines) and body (4 lines)
- Provides "Read more" button for navigation

### PostDetailScreen
Detail screen that:
- Shows complete post title and body
- Includes back navigation button
- Provides full content view without truncation

### SkeletonLoader
Loading component that:
- Displays 3 animated placeholder cards
- Matches the actual PostCard layout structure
- Uses Animated API for smooth pulse effect
- Scrolls horizontally like real posts

## API Integration

The app fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com):
- **Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **Method**: GET
- **Response**: Array of Post objects

## Android Configuration

### Network Security
The app is configured to support cleartext traffic for the JSONPlaceholder API:
- Network security config: `android/app/src/main/res/xml/network_security_config.xml`
- Permissions: `INTERNET`, `ACCESS_NETWORK_STATE`

### Gradle
- Gradle version: 9.0.0
- Removed deprecated `package` attribute from AndroidManifest.xml

## Troubleshooting

### Network Request Failed
- Ensure your emulator/device has internet connectivity
- For Android emulator: Restart with proper DNS settings
- Check network security configuration

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npx react-native start --reset-cache
```

### Android Build Errors
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

### Metro Bundler Error 500
```bash
# Kill Metro process and restart with cache reset
npx react-native start --reset-cache
```

## Dependencies

### Core
- `react`: 19.2.0
- `react-native`: 0.83.1
- `@react-navigation/native`: ^7.1.27
- `@react-navigation/native-stack`: ^7.9.1

### UI & Navigation
- `react-native-screens`: ^4.19.0
- `react-native-safe-area-context`: ^5.6.2

### Storage & Network
- `@react-native-async-storage/async-storage`: ^2.2.0
- `axios`: ^1.13.2
- `whatwg-fetch`: ^3.6.20

## Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## License

This project is for educational/demonstration purposes.

## Learn More

- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
