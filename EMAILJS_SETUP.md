# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions directly to your email.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the setup instructions to connect your email account
4. Note down the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "General" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the empty values with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Setup

1. Restart your development server: `npm run dev`
2. Go to your contact form and send a test message
3. Check your email for the message

## Template Variables Used

The following variables are sent from the contact form to your email template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Harika)
- `{{to_email}}` - Your email (harikadanduprolu740@gmail.com)

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- Up to 2 email services
- Up to 1 email template

This should be sufficient for a portfolio contact form.

## Troubleshooting

If emails aren't being sent:

1. Check browser console for error messages
2. Verify all environment variables are set correctly
3. Make sure your email service is properly connected in EmailJS
4. Check your email spam folder
5. Verify the template ID and service ID are correct

## Security Note

Your EmailJS public key is safe to expose in frontend code - it's designed to be public. However, never expose your private key or email service credentials.
