const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, turnstileToken } = req.body;

  if (!name || !email || !message || !turnstileToken) {
    return res.status(400).json({ error: 'Missing required fields or CAPTCHA token' });
  }

  try {
    // 1. Verify Cloudflare Turnstile Token
    const params = new URLSearchParams();
    params.append('secret', process.env.TURNSTILE_SECRET_KEY);
    params.append('response', turnstileToken);

    const verifyResponse = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      params
    );

    if (!verifyResponse.data.success) {
      return res.status(400).json({ error: 'CAPTCHA verification failed' });
    }

    // 2. Send email via Brevo
    const brevoData = {
      sender: { name, email },
      to: [
        {
          email: process.env.RECEIVER_EMAIL, // Your email address where you want to receive messages
          name: 'Portfolio Owner',
        },
      ],
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      htmlContent: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const brevoResponse = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      brevoData,
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }
    );

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error handling contact form:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
