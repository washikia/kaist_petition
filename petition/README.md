Excellent. Let's create a clear, sequential workflow. This "battle plan" will guide us from an empty folder to a fully functional application, ensuring each step builds logically on the previous one.
We will follow the "Backend First" development model. This means we build a robust and testable API before we even think about making it look pretty on the frontend.
The Complete Development Workflow
Phase 1: Backend Foundation (FastAPI)
Goal: Create a working API that can handle the entire signature process, testable via tools like the Swagger UI, without needing a frontend.
Step 1.1: Project Setup & "Hello World"
Create the my-petition/backend directory.
Set up and activate a Python virtual environment.
Install fastapi, uvicorn, pydantic, sqlalchemy, and an async database driver like aiosqlite.
Create a main.py with a basic /api "Hello World" endpoint.
Configure CORS middleware to allow requests from our future frontend (http://localhost:5173).
Step 1.2: Database and Model Definition
Create a database.py file to handle the SQLite engine and session setup.
Create a models.py file. Using SQLAlchemy, define the Signatory table with all the columns we discussed (id, name, email, affiliation, is_anonymous, verification_token, is_verified, created_at).
Create a schemas.py file. Using Pydantic, define the data shapes for API interaction (e.g., SignatureCreate for incoming data, SignaturePublic for outgoing data).
Step 1.3: The Core Signature Endpoint (POST /api/signature)
Create a new file, routers/signature.py, to keep our code organized.
Implement the POST /api/signature endpoint.
Logic: It will receive a SignatureCreate object. It must:
Validate the email domain (@kaist.ac.kr).
Check for existing users.
Generate a secure verification_token.
Save the new signatory to the database with is_verified=False.
(Placeholder) For now, instead of sending a real email, we will just print() the verification link/code to the console. This lets us test the whole flow without setting up an email service yet.
Step 1.4: The Verification Endpoint (GET /api/verify)
In the same router file, implement the GET /api/verify endpoint.
Logic: It will receive a token as a URL query parameter. It must:
Find the signatory by the verification_token.
If found, set is_verified to True.
Return a success message. We'll add the redirect later when the frontend exists.
Step 1.5: The Public Data Endpoint (GET /api/signatories)
Implement the GET /api/signatories endpoint.
Logic: It must:
Query the database for all signatories where is_verified=True.
Transform the data according to the is_anonymous flag.
Return the list of public-facing signatures.
Step 1.6: Email Service Integration
Choose an email sending service (e.g., SendGrid, Mailgun, or even just Python's smtplib with a Gmail account for development).
Create an email_service.py file.
Write a function send_verification_email(to_email: str, token: str).
Replace the print() statement in Step 1.3 with a call to this function.
Phase 2: Frontend Scaffolding & API Connection (React)
Goal: Build the visual structure of the app and connect it to the now-functional backend API.
Step 2.1: Project Setup & Routing
Create the React project in the frontend directory using Vite.
Install react-router-dom and axios (for cleaner API calls).
Set up the main router in App.jsx with routes for /, /sign, /check-email, /verify/:token, and /thank-you. Create a simple placeholder component for each route.
Step 2.2: Build the Signature Form
Develop the SignaturePage.jsx and SignatureForm.jsx components.
Build the form with inputs for Name, Email, Affiliation, and the Anonymity checkbox.
Implement the onSubmit handler. It will call the POST /api/signature endpoint using axios.
Handle loading states (e.g., disabling the button while submitting) and display any errors returned from the backend.
Upon a successful API response, navigate the user to the /check-email page.
Step 2.3: Build the Verification Flow
Create the VerificationHandler.jsx component for the /verify/:token route.
Use useEffect and useParams from React Router to grab the token from the URL.
Make a GET request to the backend's /api/verify?token=... endpoint.
After the request completes, automatically navigate the user to the /thank-you page.
Step 2.4: Displaying the Signatories (Optional but Good Practice)
Create a SignatoriesList.jsx component.
Use useEffect to fetch data from the GET /api/signatories endpoint.
Display the list of signatories, respecting the anonymity preference.
Place this component on the landing page or a separate /signatories page.
Phase 3: Polishing and Deployment
Goal: Refine the user experience and prepare the application for a live audience.
Step 3.1: Styling and UI/UX
Add CSS or a UI library (like Material-UI, Chakra UI, or Tailwind CSS) to make the application look professional and responsive on mobile devices.
Improve user feedback (e.g., success toasts, clearer error messages).
Step 3.2: Final Backend Configuration
Move sensitive information (database URL, email credentials) to environment variables using a .env file.
Add logging and more robust error handling.
Step 3.3: Deployment
Choose hosting platforms. A common, effective combination is:
Backend (FastAPI): Render, Vercel (Serverless Functions), or a traditional VPS.
Frontend (React): Vercel or Netlify (these are excellent for static sites).
Configure the production build and deploy both applications.
This workflow breaks the project into small, manageable, and testable chunks. When you are ready to begin, we will start with Step 1.1.