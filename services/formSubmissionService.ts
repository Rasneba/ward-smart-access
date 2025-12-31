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
    telegramEnabled: boolean;
    telegramBotToken: string;
    telegramChatId: string;
  };

  constructor() {
    // Load configuration from environment variables (can be set from Web.config)
    this.config = {
      telegramEnabled: (import.meta as any).env?.VITE_TELEGRAM_ENABLED === 'true' || false,
      telegramBotToken: (import.meta as any).env?.VITE_TELEGRAM_BOT_TOKEN || '',
      telegramChatId: (import.meta as any).env?.VITE_TELEGRAM_CHAT_ID || 'Rasneba1',
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

    // Send telegram if configured
    if (this.config.telegramEnabled) {
      await this.sendTelegramNotification(submission);
    }

    // Log to console for debugging
    console.log('Form submission received:', submission);

    return submission;
  }

  private generateId(): string {
    return 'sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private async sendTelegramNotification(submission: FormSubmission): Promise<void> {
    const url = `https://api.telegram.org/bot${this.config.telegramBotToken}/sendMessage`;

    let text = `🚨 New Service Request

👤 ${submission.name}
📧 ${submission.email}
📱 ${submission.phone}
🏢 ${submission.company || 'Not specified'}
🛠️ ${submission.service}

💬 ${submission.message}

⏰ ${submission.submittedAt.toLocaleString()}
⚡ Contact within 24hrs!`;

    // Check message length (Telegram limit is 4096 characters)
    if (text.length > 4000) {
      // Truncate message if too long
      const messagePreview = submission.message.substring(0, 500) + '...';
      text = `🚨 New Service Request

👤 ${submission.name}
📧 ${submission.email}
📱 ${submission.phone}
🏢 ${submission.company || 'Not specified'}
🛠️ ${submission.service}

💬 ${messagePreview}

⏰ ${submission.submittedAt.toLocaleString()}
⚡ Contact within 24hrs!`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: this.config.telegramChatId,
        text: text,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send Telegram message: ${response.status} ${error}`);
    }

    const result = await response.json();
    console.log('Telegram message sent:', result);
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