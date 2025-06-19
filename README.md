# AI Content Idea Generator

A web application designed to help content creators, marketers, and social media managers generate creative and trending content ideas for various platforms including blogs, videos, and social media.

## Project Overview

The AI Content Idea Generator aims to solve the common problem of "content block" by leveraging artificial intelligence to analyze trending topics, perform keyword research, and suggest engaging content ideas tailored to the user's niche and audience.

## Key Features

- **Content Idea Generation**: Generate blog post ideas, video content concepts, and social media post ideas optimized for different platforms
- **Trend Analysis**: Track and analyze trending topics in the user's industry
- **Keyword Optimization**: Suggest SEO-optimized keywords, analyze difficulty, and recommend long-tail keywords
- **Content Calendar Planning**: Schedule generated content ideas, set reminders, and suggest optimal posting times
- **User Experience**: Personalized dashboards, saved favorites, and export functionality

## Technology Stack

### Frontend
- React.js with TypeScript
- Material-UI for responsive design
- Redux for application state
- React Router for navigation
- Axios for API requests
- Styled-components for component styling

### Backend
- Node.js with Express
- MongoDB for storing user data
- JWT for user authentication
- OpenAI API for content idea generation
- Google Trends API and Twitter API for trend analysis
- Redis for caching

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB
- OpenAI API key

### Installation
```bash
# Clone the repository
git clone https://github.com/dxaginfo/content-idea-ai-generator-2025.git

# Navigate to the project directory
cd content-idea-ai-generator-2025

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env file to add your API keys

# Start the development server
npm run dev
```

## Project Structure

```
.
├── client/                # Frontend React application
│   ├── public/           # Static files
│   ├── src/              # Source files
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   ├── utils/        # Utility functions
│   │   ├── services/     # API services
│   │   ├── store/        # Redux store
│   │   └── App.tsx       # Main application component
│   └── package.json      # Frontend dependencies
│
├── server/                # Backend Node.js/Express application
│   ├── controllers/      # Request handlers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── middleware/       # Express middleware
│   └── server.js         # Entry point
│
├── .github/               # GitHub actions for CI/CD
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the AI capabilities
- The content creation community for inspiration