E-Commerce React Native AppA modular, high-performance mobile application built with React Native. This project focuses on clean code architecture, efficient state management, and optimized data structures for handling cart operations.

🚀 Features & HighlightsModular Architecture: 
Clean separation of concerns across logic, UI, and data layers.Optimized Cart Engine: Uses Sets and Redux Persist for $O(1)$ lookup performance.Server State Management: Integrated @tanstack/react-query for robust data fetching and caching.Persistent Storage: Local data persistence using Async Storage.

🏗 Project Structure The project follows a strictly modular directory structure to ensure scalability and maintainability:
src/
├── assets/          # Static files (images, fonts, icons)
├── constants/       # Theme colors, API endpoints, and configuration
├── hooks/           # Custom React hooks (Logic & API wrappers)
├── navigation/      # Navigation stacks and route configurations
├── redux/           # Global state management and persistence logic
├── screens/         # UI Screen components (divided into sub-components)
├── services/        # API calls and external integrations (Axios)
└── styles/          # Global styles and layout utilities

🛠 Technical Stack & Decisions
Data Fetching & Hooks
Axios & TanStack Query: Used for network requests. By wrapping API functions into custom hooks using useQuery, the app automatically handles Loading, Success, and Error states without manual boilerplate.

Custom Hooks: API logic is decoupled from the UI, making the components cleaner and focused solely on rendering.

State Management & Performance Optimization
Redux Toolkit & Redux Persist: Used for global state. Cart data is persisted across app restarts using AsyncStorage.

Set vs. Array ($O(1)$ vs $O(n)$): * Instead of traditional arrays for the cart, items are managed using Set-based logic.
  This ensures that finding or validating a cart item happens in constant time ($O(1)$), preventing UI lag as the data set grows.
  Traditional array methods like .find() or .filter() operate in linear time ($O(n)$), which can degrade performance in large-scale applications.
  
UI & NavigationComponent-Based Screens: 
Large screens are broken down into smaller, reusable components within the screens directory to improve readability and debugging.
Dedicated Navigation Layer: Navigation logic is abstracted into separate files within the navigation/ folder to manage complex flow transitions cleanly.

⚠️ Known LimitationsDue to the strict 24-hour submission deadline and a commitment to maintaining high UI performance standards:Firebase Authentication: Currently not implemented.Search Filters: Basic search is available, but advanced filtering logic is pending.Focus: The priority was placed on a "Perfect & Performance-Maintained UI" and core architecture over rushed, buggy features.

📲 Getting Started
Clone the repo:
Bashgit clone [your-repo-link]
Install dependencies:Bashnpm install
# or
yarn install
Run the app:Bashnpx react-native run-android # for Android
npx react-native run-ios     # for iOS
