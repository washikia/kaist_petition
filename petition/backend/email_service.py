# backend/email_service.py

import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
from pathlib import Path 

# --- REVISED .ENV LOADING ---
# 1. Define the path to the 'backend' directory
# backend_dir = Path(__file__).parent 
# 2. Define the full path to the .env file
# dotenv_path = backend_dir / '.env'
# 3. Load the .env file from that specific path
load_dotenv(os.getenv("DOTENV_PATH"))

# Get email credentials from environment variables
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
print(EMAIL_ADDRESS, EMAIL_PASSWORD)

def send_verification_email(to_email: str, token: str):
    # Ensure credentials are set
    if not EMAIL_ADDRESS or not EMAIL_PASSWORD:
        print("ERROR: Email credentials not set in .env file.")
        return

    # Create the verification link
    verification_link = f"http://localhost:5173/verify/{token}"

    # Create the email message
    msg = EmailMessage()
    msg['Subject'] = "Verify Your Signature for the Petition"
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = to_email

    # Set the email body as HTML
    msg.set_content("Please click the link below to verify your signature:")
    msg.add_alternative(f"""
    <!DOCTYPE html>
    <html>
        <body>
            <h2 style="font-family: sans-serif;">Thank you for signing!</h2>
            <p style="font-family: sans-serif;">Please click the button below to verify your email address and confirm your signature.</p>
            <a href="{verification_link}"
               style="display: inline-block; padding: 12px 24px; font-size: 16px; font-family: sans-serif; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
                Verify Signature
            </a>
            <p style="font-family: sans-serif; font-size: 12px; color: #888;">If you cannot click the button, copy and paste this link into your browser: <br>{verification_link}</p>
        </body>
    </html>
    """, subtype='html')

    # Send the email
    try:
        # Connect to Gmail's SMTP server
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)
        print(f"Verification email successfully sent to {to_email}")
    except Exception as e:
        print(f"Error sending email: {e}")