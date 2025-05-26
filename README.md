# InFlow Bus Surveillance System 🚌

InFlow is a modern bus surveillance and monitoring system built with React, TypeScript, and Firebase, designed to enhance public transportation safety and efficiency.

## 🌟 Features

- **Real-time Bus Tracking** 
  - Live GPS tracking of bus locations
  - Route visualization on interactive maps
  - ETA calculations and updates

- **Passenger Analytics**
  - Real-time passenger counting
  - Occupancy tracking and analytics
  - Historical data analysis

- **Security Features**
  - Live video surveillance integration
  - Incident reporting system
  - Emergency alert system

- **Route Management**
  - Dynamic route optimization
  - Schedule monitoring
  - Deviation alerts

## 🚀 Tech Stack

- **Frontend**
  - React 18+
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Router v6

- **Backend & Services**
  - Firebase Authentication
  - Firebase Realtime Database
  - Cloud Functions

- **APIs & Integrations**
  - Mapbox GL JS
  - OpenCV (People Counting)
  - Real-time Data Processing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Hettbhutak/InFlow-Bus-Surveillance.git
cd InFlow-Bus-Surveillance
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_MAPBOX_TOKEN=your_mapbox_token
```

4. Start the development server:
```bash
npm run dev
```

## 🔑 Environment Variables

Make sure to set up the following environment variables:

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `VITE_MAPBOX_TOKEN` | Mapbox GL Access Token |

## 🛠️ Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## 📱 Screenshots

[Add screenshots of your application here]

## 🔐 Security

This project implements several security measures:

- Firebase Authentication for user management
- Role-based access control
- Secure API key handling
- Real-time data encryption

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [Het Bhutak] - Project Lead, Frontend Developer, Backend Developer
- [Jamila kapadia] - UI/UX Designer, Documentation 

## 📞 Support

For support, please email [hetbhutak@gmail.com] or open an issue in the repository.

## 🙏 Acknowledgments

- [OpenCV] for people counting algorithms
- [Mapbox] for mapping services
- [Firebase] for backend services

---

Made with ❤️ by Het Bhutak & Jamila Kapadia
