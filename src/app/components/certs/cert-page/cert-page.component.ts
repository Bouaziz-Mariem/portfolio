import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificate } from '../../../models/certificate.model';
import { CertsService } from '../../../services/certs.service';

@Component({
  selector: 'app-cert-page',
  imports: [],
  templateUrl: './cert-page.component.html',
  styleUrl: './cert-page.component.scss'
})
export class CertPageComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  certsService = inject(CertsService);

  cert = signal<Certificate | null>(null);
  imageExpanded = signal(false);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      const found = this.certsService.findBySlug(slug);
      if (found) {
        this.cert.set(found);
        return;
      }
    }
    this.router.navigate(['/']);
  }

  goBack(): void {
    this.router.navigate(['/'], { fragment: 'certs' });
  }

  toggleImage(): void {
    this.imageExpanded.update(v => !v);
  }

  /** Collect all non-empty detail fields as label/value pairs for display */
  getDetails(cert: Certificate): { label: string; value: string }[] {
    const details: { label: string; value: string }[] = [];
    const add = (label: string, value: string | undefined | null) => {
      if (value) details.push({ label, value });
    };

    add('Document Type', cert.documentType);
    add('Title', cert.certificateTitle);
    add('Category', cert.certificateCategory);
    add('Purpose', cert.certificatePurpose);
    add('Year', cert.certificateYear);

    add('Organization', cert.organizationName);
    add('Organization (Full)', cert.organizationFullName);
    add('Organization (Short)', cert.organizationShortName);
    add('Legal Name', cert.organizationLegalName);
    add('Tagline', cert.organizationTagline);
    add('Domains', cert.organizationDomains);
    add('Since', cert.organizationSince);
    add('Founded', [cert.organizationFoundedYear, cert.organizationFoundedLocation].filter(Boolean).join(', ') || undefined);

    add('Sub-Organization', cert.subOrganizationName);
    add('Sub-Organization (Abbr.)', cert.subOrganizationAbbreviation);
    if (cert.subInstitutions?.length) add('Sub-Institutions', cert.subInstitutions.join(' · '));

    add('Partner Institution', cert.partnerInstitution);
    add('Affiliated Institution', cert.affiliatedInstitution);
    add('Affiliated Group', cert.affiliatedGroup);
    add('City', cert.institutionCity);
    add('Campus Location', cert.campusLocation);
    add('Slogan', cert.institutionSlogan);
    add('University', cert.universityName);

    add('ISO Certification', cert.isoCertification);
    if (cert.accreditationBodies?.length) add('Accreditations', cert.accreditationBodies.join(' · '));
    add('Registration No.', cert.registrationNumber);

    add('Recipient', cert.recipientName);

    add('Course', cert.courseName);
    add('Course Hours', cert.courseHoursCompleted);
    add('Credential Type', cert.credentialType);

    add('Membership Type', cert.membershipType);
    add('Membership Status', cert.membershipStatus);
    add('Valid Through', cert.membershipValidThrough);
    add('Membership Description', cert.membershipDescription);

    add('Volunteer Role', cert.volunteerRole);
    add('Service Period', cert.serviceDurationText);

    add('Seminar', cert.seminarTitle);
    add('Training', cert.trainingTitle);
    add('Duration', cert.trainingDuration);

    add('Issue Date', cert.issueDate);
    add('Event Date', cert.eventDate);
    add('Event Location', cert.eventLocation);
    add('Academic Year', cert.academicYear);

    add('Recognition', cert.recognitionStatement);
    add('Community', cert.communityStatement);
    add('Closing', cert.closingStatement);

    add('Signatory', [cert.signatoryName, cert.signatoryTitle].filter(Boolean).join(' — ') || undefined);
    add('Signatory Dept.', cert.signatoryDepartment);
    add('Director', [cert.directorName, cert.directorTitle].filter(Boolean).join(' — ') || undefined);
    add('President', [cert.presidentName, cert.presidentTitle].filter(Boolean).join(' — ') || undefined);
    add('Trainer', [cert.trainerName, cert.trainerTitle].filter(Boolean).join(' — ') || undefined);

    add('Department', cert.departmentName);
    add('Issuing Club', cert.issuingClub);

    add('Digital Badge', cert.digitalBadgeUrl);
    add('Badge Platform', cert.badgePlatform);

    return details;
  }
}
