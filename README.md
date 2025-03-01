# Cursor playground

A React TypeScript project with support for both Webpack and Vite build tools, containerized with Docker.

## 🚀 Features

- React 18 with TypeScript support
- Dual build system (Webpack and Vite)
- Docker containerization
- Nginx configuration for production deployment
- Hot Module Replacement (HMR) in development
- CSS modules support

## 🛠️ Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test-project
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

### Using Vite (Recommended for Development)

Start the development server:
```bash
npm run dev
```

### Using Webpack

Start the Webpack development server:
```bash
npm start
```

## 🏗️ Building

### Vite Build
```bash
npm run build:vite
```

### Webpack Build
```bash
npm run build
```

For development build with Webpack:
```bash
npm run build:dev
```

## 🐳 Docker Deployment

1. Build the Docker image:
```bash
docker-compose build
```

2. Run the container:
```bash
docker-compose up
```

The application will be available at `http://localhost` (or the configured port).

## 📜 Available Scripts

- `npm run dev` - Start Vite development server
- `npm start` - Start Webpack development server
- `npm run build:vite` - Build with Vite for production
- `npm run build` - Build with Webpack for production
- `npm run build:dev` - Build with Webpack for development
- `npm run preview` - Preview the Vite production build

## 🔨 Tech Stack

- React 18
- TypeScript
- Webpack 5
- Vite 4
- Docker
- Nginx
- React Router v6

## 📁 Project Structure

```
├── src/              # Source files
├── dist/             # Compiled files
├── node_modules/     # Dependencies
├── Dockerfile        # Docker configuration
├── docker-compose.yml# Docker Compose configuration
├── nginx.conf        # Nginx configuration
├── vite.config.ts    # Vite configuration
├── webpack.config.js # Webpack configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project metadata and dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details. 