export type HarassmentType =
  | "verbal_abuse"
  | "sexual_harassment"
  | "bullying"
  | "stalking"
  | "cyber_harassment"
  | "discrimination"
  | "abuse_of_authority";

export type Location =
  | "classroom"
  | "hostel"
  | "library"
  | "sports_facility"
  | "online"
  | "other";

export interface Report {
  id: string;
  type: HarassmentType;
  location: Location;
  date: string;
  time: string;
  description?: string;
  isAnonymous: boolean;
  status: "pending" | "under_review" | "resolved";
}

export interface Complaint {
  type: HarassmentType;
  location: Location;
  date: string;
  time: string;
  description: string;
  isAnonymous: boolean;
  name?: string;
  idNumber?: string;
  phoneNumber?: string;
  proofFiles?: File[];
}

export interface AnonymousComplaint {
  type: HarassmentType;
  location: Location;
  date: string;
  time: string;
  description: string;
}
