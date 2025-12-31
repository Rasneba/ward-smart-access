// Form submission service for handling request submissions
export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  submittedAt: Date;
  status: 'pending' | 'processed' | 'contacted';
}

class FormSubmissionService {
  private submissions: FormSubmission[] = [];
  private config: {
    emailEnabled: boolean;
    emailRecipient: string;
    smtpServer?: string;
    smtpPort?: number;
    smtpUser?: string;
    smtpPassword?: string;
  };

  constructor() {
    // Load configuration from environment variables (can be set from Web.config)
    this.config = {
      emailEnabled: (import.meta as any).env?.VITE_EMAIL_ENABLED === 'true' || false,
      emailRecipient: (import.meta as any).env?.VITE_EMAIL_RECIPIENT || 'admin@ward.et',
      smtpServer: (import.meta as any).env?.VITE_SMTP_SERVER || 'smtp.gmail.com',
      smtpPort: parseInt((import.meta as any).env?.VITE_SMTP_PORT || '587'),
      smtpUser: (import.meta as any).env?.VITE_SMTP_USER,
      smtpPassword: (import.meta as any).env?.VITE_SMTP_PASSWORD,
    };

    // Load existing submissions from localStorage (for demo purposes)
    this.loadSubmissions();
  }

  private loadSubmissions() {
    try {
      const stored = localStorage.getItem('ward_form_submissions');
      if (stored) {
        const parsed = JSON.parse(stored);
        this.submissions = parsed.map((sub: any) => ({
          ...sub,
          submittedAt: new Date(sub.submittedAt)
        }));
      }
    } catch (error) {
      console.error('Failed to load submissions:', error);
    }
  }

  private saveSubmissions() {
    try {
      localStorage.setItem('ward_form_submissions', JSON.stringify(this.submissions));
    } catch (error) {
      console.error('Failed to save submissions:', error);
    }
  }

  async submitForm(formData: Omit<FormSubmission, 'id' | 'submittedAt' | 'status'>): Promise<FormSubmission> {
    const submission: FormSubmission = {
      id: this.generateId(),
      ...formData,
      submittedAt: new Date(),
      status: 'pending'
    };

    // Add to local storage
    this.submissions.push(submission);
    this.saveSubmissions();

    // Send email if configured
    if (this.config.emailEnabled) {
      await this.sendEmailNotification(submission);
    }

    // Log to console for debugging
    console.log('Form submission received:', submission);

    return submission;
  }

  private generateId(): string {
    return 'sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private async sendEmailNotification(submission: FormSubmission): Promise<void> {
    // This is a placeholder for email functionality
    // In a real implementation, you would use a service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Node.js server with nodemailer
    // - Netlify Functions

    const emailContent = {
      to: this.config.emailRecipient,
      subject: `New Ward Service Request - ${submission.service}`,
      html: `
        <h2>New Service Request Received</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Phone:</strong> ${submission.phone}</p>
        <p><strong>Company:</strong> ${submission.company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${submission.service}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${submission.submittedAt.toLocaleString()}</p>
        <hr>
        <p>Please contact the client within 24 hours.</p>
      `
    };

    // For now, we'll just log the email content
    // In production, replace this with actual email sending
    console.log('Email notification would be sent:', emailContent);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  getSubmissions(): FormSubmission[] {
    return [...this.submissions].sort((a, b) =>
      b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }

  updateSubmissionStatus(id: string, status: FormSubmission['status']): boolean {
    const submission = this.submissions.find(s => s.id === id);
    if (submission) {
      submission.status = status;
      this.saveSubmissions();
      return true;
    }
    return false;
  }

  getSubmissionById(id: string): FormSubmission | undefined {
    return this.submissions.find(s => s.id === id);
  }

  // Export submissions for backup/admin purposes
  exportSubmissions(): string {
    return JSON.stringify(this.submissions, null, 2);
  }

  // Clear old submissions (keep last 100)
  cleanupOldSubmissions(): void {
    if (this.submissions.length > 100) {
      this.submissions = this.submissions
        .sort((a, b) => b.submittedAt.getTime() - a.submittedAt.getTime())
        .slice(0, 100);
      this.saveSubmissions();
    }
  }
}

// Create singleton instance
export const formSubmissionService = new FormSubmissionService();

// Helper function for components
export const submitRequestForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}) => {
  return await formSubmissionService.submitForm(formData);
};