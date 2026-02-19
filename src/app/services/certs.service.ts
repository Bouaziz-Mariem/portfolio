import { Injectable } from '@angular/core';
import { Certificate } from '../models/certificate.model';

@Injectable({ providedIn: 'root' })
export class CertsService {

  readonly certs: Certificate[] = [
    {
      documentType: 'Certificate of Completion',
      certificateTitle: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
      courseName: 'AWS Academy Graduate – Cloud Foundations',
      credentialType: 'Training Badge',
      organizationName: 'AWS Academy',
      recipientName: 'Mariem Bouaziz',
      courseHoursCompleted: '20 hours',
      issueDate: '02/16/2026',
      digitalBadgeUrl: 'https://www.credly.com/go/iuLfqCJC',
      badgePlatform: 'Credly',
      certificateCategory: 'Cloud Computing Training',
      imagePath: 'certs/aws_academy_graduate__cloud_foundations__training_badge-aws.png',
      color: 'linear-gradient(135deg, #FF9900, #E68A00)',
      accent: '#FF9900',
      icon: '☁️',
    },
    {
      documentType: 'Certificat de Mérite',
      organizationFullName: 'North American University Co.',
      organizationShortName: 'NAU',
      campusLocation: 'Sfax, Tunisia',
      institutionSlogan: 'We inspire minds',
      organizationDomains: 'Technology · Business · Architecture',
      subInstitutions: ['IIT – International Institute of Technology', 'ISA', 'ISB – International School of Business', 'NAU – American Training Institute'],
      accreditationBodies: ['Euro-Inf', 'ASIIN', 'EUR-ACE'],
      isoCertification: 'ISO 21001:2018',
      recipientName: 'Mariem Bouaziz',
      academicYear: '2024-2025',
      issueDate: '01/08/2025',
      signatoryTitle: 'Directeur académique',
      certificatePurpose: 'Attestation de distinction pour parcours académique exceptionnel',
      recognitionStatement: 'Nous saluons votre travail acharné, votre engagement exemplaire et votre persévérance inébranlable.',
      imagePath: 'certs/certificat_de_merite-IIT.jpeg',
      color: 'linear-gradient(135deg, #7C4DFF, #6C3CE1)',
      accent: '#7C4DFF',
      icon: '🏆',
    },
    {
      documentType: 'Certificate of IEEE Membership',
      certificateYear: '2025',
      organizationName: 'IEEE',
      organizationTagline: 'Advancing Technology for Humanity',
      recipientName: 'Mariem Bouaziz',
      membershipType: 'Student Member',
      membershipStatus: 'In good standing',
      membershipValidThrough: 'December 2025',
      membershipDescription: 'Personal and professional commitment to the advancement of technology',
      signatoryName: 'Kathleen A. Kramer',
      signatoryTitle: '2025 IEEE President',
      imagePath: 'certs/certificate_of_IEEE_Membership-IEEE.jpeg',
      color: 'linear-gradient(135deg, #006699, #004D73)',
      accent: '#006699',
      icon: '⚡',
    },
    {
      documentType: 'Certificate of IEEE Volunteering',
      organizationName: 'IEEE',
      organizationFullName: 'The Institute of Electrical and Electronics Engineers, Inc.',
      organizationTagline: 'Advancing Technology for Humanity',
      recipientName: 'Mariem Bouaziz',
      volunteerRole: 'Secretary',
      affiliatedInstitution: 'International Institute of Technology',
      affiliatedGroup: 'WIE (Women in Engineering)',
      serviceDurationText: 'Jan 2025 - Jan 2026',
      serviceStartDate: 'January 2025',
      serviceEndDate: 'January 2026',
      certificateCategory: 'Volunteering',
      recognitionStatement: 'Recognizing your service to the mission and members of IEEE',
      imagePath: 'certs/certificate_of_IEEE_volunteerING-IEEE_WIE.png',
      color: 'linear-gradient(135deg, #E0459B, #C2185B)',
      accent: '#E0459B',
      icon: '🤝',
    },
    {
      documentType: 'Certificate of Membership',
      certificateYear: '2025',
      organizationName: 'IEEE',
      subOrganizationName: 'IEEE Women in Engineering',
      subOrganizationAbbreviation: 'WIE',
      organizationTagline: 'Advancing Technology for Humanity',
      recipientName: 'Mariem Bouaziz',
      membershipType: 'Student Member',
      membershipStatus: 'In good standing',
      membershipDescription: 'Personal and professional commitment to the advancement of technology',
      signatoryName: 'Winnie Ye',
      signatoryTitle: '2025–2026 Chair',
      signatoryDepartment: 'Women in Engineering',
      imagePath: 'certs/certificate_of_WIE_Membership-WIE.jpeg',
      color: 'linear-gradient(135deg, #8B1FA9, #6A1B80)',
      accent: '#8B1FA9',
      icon: '👩‍💻',
    },
    {
      documentType: 'Attestation',
      organizationShortName: 'UFEC',
      organizationFullName: 'Union des Futurs Experts Comptables',
      partnerInstitution: 'École Supérieure de Commerce',
      institutionCity: 'Sfax',
      universityName: 'Université de Sfax',
      issuingClub: 'Club Union des Futurs Experts Comptables',
      recipientName: 'Mariem Bouaziz',
      seminarTitle: 'La Gestion Intelligente Grâce à la BI',
      eventDate: '13 décembre 2025',
      eventLocation: 'Hôtel Palais Royal, Sfax',
      directorName: 'M. Anis Ben Amar',
      directorTitle: "Directeur de l'ESC",
      presidentName: 'Mme Nour Loulou',
      presidentTitle: 'Présidente du Club',
      imagePath: 'certs/la_gestion_intelligent_grace_a_la_bi-UFEC.jpeg',
      color: 'linear-gradient(135deg, #06B6D4, #0E7490)',
      accent: '#06B6D4',
      icon: '📊',
    },
    {
      documentType: 'Certificat de Formation',
      organizationShortName: '4ST',
      organizationFullName: 'Société Smart Sustainable Solutions and Trainings',
      organizationLegalName: 'Ste Smart Sustainable Solutions & Trainings 4ST',
      registrationNumber: '6138820',
      recipientName: 'Mariem Bouaziz',
      trainingTitle: 'Leadership et Gestion d\'Équipe',
      trainingDuration: '3 heures',
      trainerName: 'Mohamed Hedi Allouche',
      trainerTitle: 'Ingénieur Formateur',
      eventDate: '24 Novembre 2024',
      departmentName: 'Training Department',
      imagePath: 'certs/leadership_et_gestion_d_equipe-4ST.jpeg',
      color: 'linear-gradient(135deg, #F59E0B, #D97706)',
      accent: '#F59E0B',
      icon: '🎯',
    },
  ];

  /** Derive a URL-friendly slug from imagePath (filename without extension) */
  getSlug(cert: Certificate): string {
    return cert.imagePath.split('/').pop()!.replace(/\.(png|jpe?g)$/i, '');
  }

  findBySlug(slug: string): Certificate | undefined {
    return this.certs.find(c => this.getSlug(c) === slug);
  }

  getTitle(cert: Certificate): string {
    return cert.certificateTitle ?? cert.seminarTitle ?? cert.trainingTitle ?? cert.documentType;
  }

  getOrganization(cert: Certificate): string {
    if (cert.organizationName) return cert.organizationName;
    if (cert.organizationShortName && cert.organizationFullName) return cert.organizationShortName;
    return cert.organizationShortName ?? cert.organizationFullName ?? '';
  }

  getFullOrganization(cert: Certificate): string {
    return cert.organizationFullName ?? cert.organizationName ?? cert.organizationShortName ?? '';
  }

  getDate(cert: Certificate): string {
    return cert.issueDate ?? cert.eventDate ?? cert.academicYear ?? cert.certificateYear ?? '';
  }

  getSubtitle(cert: Certificate): string {
    if (cert.volunteerRole) return `${cert.volunteerRole} · ${cert.affiliatedGroup ?? ''}`;
    if (cert.membershipType) return `${cert.membershipType} · ${cert.membershipStatus ?? ''}`;
    if (cert.courseName) return cert.courseName;
    if (cert.courseHoursCompleted) return `Course · ${cert.courseHoursCompleted}`;
    if (cert.trainingDuration) return `Training · ${cert.trainingDuration}`;
    if (cert.certificatePurpose) return cert.certificatePurpose;
    return cert.documentType;
  }
}
