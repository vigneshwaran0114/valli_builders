# Email Integration Setup Guide

## Option 1: EmailJS (Recommended for client-side)

### Step 1: Sign up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Verify your email

### Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Copy the **Service ID** (you'll need this later)

### Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Submission - {{from_name}}

Hello Valli Builders Team,

You have received a new contact form submission:

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{from_phone}}
- Company: {{from_company}}

**Project Information:**
- Project Type: {{project_type}}
- Message: {{message}}

Please respond to this inquiry within 24 hours.

Best regards,
Your Website Contact Form
```

4. Save the template and copy the **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
  PUBLIC_KEY: 'your_public_key_here',
};
```

### Step 6: Test the Form
1. Start your development server
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email for the submission

## Option 2: Backend API (Alternative)

If you prefer a backend solution, you can:

1. Create a simple backend API (Node.js/Express, Python/Flask, etc.)
2. Use a service like SendGrid, Mailgun, or AWS SES
3. Send form data to your backend API
4. Backend sends the email

## Option 3: Formspree (No Backend Required)

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Replace the form action with your Formspree endpoint

## Troubleshooting

- **Email not sending**: Check your EmailJS credentials
- **Template variables not working**: Make sure variable names match exactly
- **CORS issues**: EmailJS handles this automatically
- **Rate limiting**: Free tier has limits, consider upgrading for production

## Security Notes

- Never expose sensitive credentials in client-side code
- Consider using environment variables for production
- EmailJS public key is safe to expose (it's designed for client-side use) 