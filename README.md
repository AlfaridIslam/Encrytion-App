# Encrytion-App
MERN Full Stack
backend/
├── .env                    # Environment variables (encryption key, MongoDB URI, etc.)
├── .gitignore              # Git ignore file
├── package.json            # Node.js package configuration
├── package-lock.json       # Dependency lock file
├── src/                    # Source directory
│   ├── api/                # API related files
│   │   ├── constants/      # API constants
│   │   │   ├── index.js    # Export all constants
│   │   │   └── routes.js   # API route paths
│   ├── config/             # Configuration files
│   │   └── db.js           # Database configuration
│   ├── controllers/        # Request controllers
│   │   ├── index.js        # Export all controllers
│   │   └── cryptoController.js  # Encryption/decryption controller
│   ├── middleware/         # Express middleware
│   │   ├── index.js        # Export all middleware
│   │   ├── errorHandler.js # Error handling middleware
│   │   └── validator.js    # Request validation middleware
│   ├── models/             # Database models (if needed for history)
│   │   └── index.js        # Export all models
│   ├── routes/             # API routes
│   │   ├── index.js        # Route aggregator
│   │   └── cryptoRoutes.js # Encryption/decryption routes
│   ├── utils/              # Utility functions
│   │   ├── index.js        # Export all utilities
│   │   └── cryptoUtils.js  # Encryption/decryption utilities
│   └── server.js           # Express app initialization
└── index.js                # Application entry point


frontend/
├── public/
├── src/
│   ├── api/                 # API interaction
│   │   └── cryptoService.js # Handles API calls
│   ├── components/          # Reusable components
│   │   ├── common/          # Shared components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── TextArea.jsx
│   │   │   └── Card.jsx
│   │   ├── Encryption/      # Encryption specific components
│   │   │   ├── EncryptionForm.jsx
│   │   │   └── DecryptionForm.jsx
│   │   └── Layout/          # Layout components
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       └── MainLayout.jsx
│   ├── context/             # Context for any global state
│   │   └── CryptoContext.jsx
│   ├── hooks/               # Custom hooks
│   │   └── useCrypto.js
│   ├── pages/               # Page components
│   │   └── Home.jsx
│   ├── utils/               # Utility functions
│   │   └── helpers.js
│   ├── App.js               # Main App component
│   ├── index.js             # Entry point
│   └── styles/              # Global styles
│       └── global.css
├── .env                     # Environment variables
├── package.json             # Dependencies
└── README.md                # Documentation



To test your encryption and decryption API with Postman, use these endpoints:

### Base URL
`http://localhost:5000`

### Endpoints:

1. **Encrypt Text**
   - URL: `http://localhost:5000/api/crypto/encrypt`
   - Method: `POST`
   - Headers: `Content-Type: application/json`
   - Body:
     ```json
     {
       "text": "Hello, this is a secret message!"
     }
     ```

2. **Decrypt Text**
   - URL: `http://localhost:5000/api/crypto/decrypt`
   - Method: `POST`
   - Headers: `Content-Type: application/json`
   - Body:
     ```json
     {
       "text": "U2FsdGVkX1+abcdefg123456789..."
     }
     ```
   - Note: For this endpoint, you'll need to use the encrypted text you received from the encrypt endpoint

3. **Health Check**
   - URL: `http://localhost:5000/api/health`
   - Method: `GET`

Make sure your server is running with `npm run dev` before testing these endpoints in Postman.
