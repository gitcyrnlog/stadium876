// types/UserProfile.ts
// Type for user profile with interests and features
export interface UserProfile {
  uid: string;
  email: string;
  interests?: string[]; // e.g. ['football', 'gaming']
  features?: string[];  // e.g. ['premium', 'newsletter']
  // Add more fields as needed
}
