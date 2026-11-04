# W3Forms Setup Instructions

This project uses W3Forms for contact form submissions via email. Follow these steps to set it up:

## Step 1: Get Your W3Forms Access Key

1. Go to https://web3forms.com/
2. Sign up for a free account (no credit card required)
3. In your dashboard, you'll see your **Access Key** (looks like: `a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8`)
4. Copy this access key

## Step 2: Add Access Key to Your Project

### For Local Development:

1. Create a `.env` file in the project root (if it doesn't exist)
2. Add this line:
   ```
   VITE_W3FORMS_ACCESS_KEY=your-actual-access-key-here
   ```
3. Replace `your-actual-access-key-here` with the key you copied from W3Forms
4. Restart your dev server (`npm run dev`)

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to: **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `VITE_W3FORMS_ACCESS_KEY`
   - **Value**: Your W3Forms access key
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your project

## Step 3: Configure Email Destination (Optional)

By default, W3Forms sends submissions to the email you used to sign up. To change this:

1. Log in to https://web3forms.com/
2. Go to your dashboard
3. Update the email address where you want to receive form submissions

## Features

Your contact form now supports:

✅ **WhatsApp Submission** - Users can send form data directly via WhatsApp
✅ **Email Submission** - Users can submit via W3Forms (sends to your configured email)
✅ **Form Validation** - Validates name, phone, email, and message
✅ **Success Confirmation** - Shows submission summary after successful submission

## Testing

After setup, test both buttons:

1. **Submit via WhatsApp** - Should open WhatsApp with pre-filled message
2. **Submit via Mail** - Should show success message and send email to configured address

## Troubleshooting

**Error: "Failed to submit form"**
- Check that your `.env` file has the correct access key
- Verify the key is active in your W3Forms dashboard
- Make sure you restarted the dev server after adding the env variable

**Not receiving emails**
- Check spam folder
- Verify email address in W3Forms dashboard
- Check W3Forms dashboard for submission logs

## Security Note

- Never commit your `.env` file to Git (it's already in `.gitignore`)
- The `.env.example` file shows the format but doesn't contain real keys
- Environment variables starting with `VITE_` are safe to use in frontend (Vite exposes them)
