# Secure Configuration Setup

## Important: Security Notice

The `config-secure.js` file contains sensitive API keys and secrets. It should **NEVER** be committed to version control.

## Setup Instructions

1. **Copy the template file:**
   ```bash
   cp server/config-secure.js.template server/config-secure.js
   ```

2. **Set up environment variables for development:**
   Create a `.env` file in the root directory with your actual API keys:
   ```
   GOOGLE_TRANSLATE_API_KEY=your_actual_key_here
   API_SECRET=your_actual_secret_here
   SERPAPI_KEY=your_actual_key_here
   SERPER_API_KEY=your_actual_key_here
   POSTMARK_API_KEY=your_actual_key_here
   SHARED_SECRET=your_actual_secret_here
   ```

3. **For production:**
   The application uses Google Cloud Secret Manager. Make sure your secrets are properly configured in Google Cloud.

## Security Best Practices

1. **Never commit secrets to version control**
2. **Always use environment variables or secret management services**
3. **Rotate your API keys regularly**
4. **Use different keys for development and production**
5. **Restrict API key permissions to only what's necessary**

## If Secrets Were Accidentally Committed

If you've accidentally committed secrets, you need to:

1. **Immediately rotate/regenerate all exposed keys**
2. **Remove the file from git history** (see `remove-secrets-from-history.sh`)
3. **Force push the cleaned history** (coordinate with your team)
4. **Audit for any unauthorized access**

## Required API Keys

- **Google Translate API**: For translating search queries
- **SerpAPI**: For Google image search (backup provider)
- **Serper API**: For Google image search (primary provider)
- **Postmark API**: For sending emails
- **API Secret & Shared Secret**: For internal authentication