export interface Certificate {
  documentType: string;
  certificateYear?: string;
  certificateTitle?: string;
  certificateCategory?: string;
  certificatePurpose?: string;

  organizationName?: string;
  organizationFullName?: string;
  organizationShortName?: string;
  organizationLegalName?: string;
  organizationTagline?: string;
  organizationFoundedYear?: string;
  organizationFoundedLocation?: string;
  organizationDomains?: string;
  organizationSince?: string;

  subOrganizationName?: string;
  subOrganizationAbbreviation?: string;
  subInstitutions?: string[];

  partnerInstitution?: string;
  affiliatedInstitution?: string;
  affiliatedGroup?: string;
  institutionCity?: string;
  institutionSlogan?: string;
  campusLocation?: string;
  universityName?: string;

  isoCertification?: string;
  accreditationBodies?: string[];
  registrationNumber?: string;

  recipientName: string;

  courseName?: string;
  courseHoursCompleted?: string;
  credentialType?: string;

  membershipType?: string;
  membershipStatus?: string;
  membershipValidThrough?: string;
  membershipDescription?: string;

  volunteerRole?: string;
  serviceDurationText?: string;
  serviceStartDate?: string;
  serviceEndDate?: string;

  seminarTitle?: string;
  trainingTitle?: string;
  trainingDuration?: string;

  issueDate?: string;
  eventDate?: string;
  eventLocation?: string;
  academicYear?: string;

  recognitionStatement?: string;
  communityStatement?: string;
  closingStatement?: string;

  signatoryName?: string;
  signatoryTitle?: string;
  signatoryDepartment?: string;

  directorName?: string;
  directorTitle?: string;

  presidentName?: string;
  presidentTitle?: string;

  trainerName?: string;
  trainerTitle?: string;
  trainerPhone?: string;
  trainerEmail?: string;

  departmentName?: string;
  issuingClub?: string;

  featuredPersonName?: string;
  featuredPersonTitle?: string;
  featuredAward?: string;
  featuredQuote?: string;

  digitalBadgeUrl?: string;
  badgePlatform?: string;

  // Display fields (used by the UI)
  imagePath: string;
  color: string;
  accent: string;
  icon: string;
}
