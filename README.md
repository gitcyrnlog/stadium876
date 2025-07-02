# Stadium876

A modern, modular sports news web application for Jamaica and the world, built with React, TypeScript, Vite, Tailwind CSS, and Firebase.

## Features

- **Dynamic Football Section**: League selector, live results, and dashboard using TheSportsDB API.
- **Modular Components**: Football, Netball, Basketball, Track & Field, and Gaming sections, each with their own articles area.
- **Article Management**: Admin dashboard for journalists to submit articles (with images and video links), stored in Firebase Firestore and Storage.
- **Role-Based Admin Auth**: Google sign-in for admins, with Firestore roles and secure access.
- **Featured Carousel**: Automatically displays the newest articles.
- **"New" Section**: Highlights articles published within the last 2 days.
- **Category Articles**: Each section displays articles relevant to its category.
- **Responsive UI**: Modern, mobile-friendly design using Tailwind CSS.

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend/Database**: Firebase Firestore, Firebase Storage, Firebase Auth
- **APIs**: TheSportsDB (for football data)

## Project Structure

```
├── src/
│   ├── App.tsx
│   ├── firebase.ts
│   ├── index.tsx
│   ├── ThemeContext.tsx
│   ├── components/
│   │   ├── admin/AdminDashboard.tsx
│   │   ├── ArticleFeed.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── CategoryArticles.tsx
│   │   ├── FeaturedCarousel.tsx
│   │   ├── TrendingArticles.tsx
│   │   ├── Football.tsx
│   │   ├── Netball.tsx
│   │   ├── Basketball.tsx
│   │   ├── TrackField.tsx
│   │   ├── Gaming.tsx
│   │   └── ...
│   └── ...
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...
```

## Setup & Installation

1. **Clone the repository**
   ```sh
   git clone <repo-url>
   cd stadium876
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Configure Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com/).
   - Enable Firestore, Storage, and Google Auth.
   - Copy your Firebase config to `src/firebase.ts`.
   - Set up Firestore rules to restrict article submission to admins.
   - Set up Storage CORS and security rules for image uploads.
4. **Run the development server**
   ```sh
   npm run dev
   ```
5. **Access the app**
   - Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Admin Setup

- To grant admin access, add a user document in Firestore under `users/{uid}` with `{ role: 'admin' }`.
- Only users with this role can access the admin dashboard and submit articles.

## Article Submission

- Admins can submit articles with title, content, image, video links, and category.
- Articles are stored in Firestore (`articles` collection) and images in Firebase Storage.
- Each article includes a `category` and `createdAt` timestamp.

## Article Display

- **New Section**: Shows articles from the last 2 days on the homepage.
- **Featured Carousel**: Shows the 3 newest articles.
- **Category Sections**: Each main section (Football, Netball, Basketball, Track & Field, Gaming) displays articles for its category.
- **Full Article View**: Clicking "Read more" opens the full article page.

## API Integration

- Football section uses TheSportsDB API for live league results and fixtures.

## Security

- Firestore and Storage rules restrict write access to authenticated admins.
- CORS is configured for local development and production domains.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## License

MIT
