# 🎤 Voice Expense Tracker

> **Speak your expenses, track them automatically with AWS AI**

A demo application showcasing **AWS Transcribe** and **AWS Comprehend** for voice-powered expense tracking.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the server
npm start

# Open browser
open http://localhost:3000
```

## 🎯 Demo Features

### **Voice Processing**
- 🎤 Real-time speech recognition (Web Speech API)
- 📁 Audio file upload with AWS Transcribe
- 🧠 Smart expense extraction with AWS Comprehend

### **AI-Powered Extraction**
- 💰 Automatic amount detection
- 📂 Category identification
- 🎯 Confidence scoring
- 😊 Sentiment analysis

### **Daily Tracking**
- 📊 Running daily totals
- 📝 Recent expenses list
- 📈 Category breakdown
- 💾 Persistent storage

## 🛠️ AWS Services Used

- **AWS Comprehend**: Entity detection & sentiment analysis
- **AWS Amplify**: Serverless hosting and deployment

## 📝 Example Usage

**Say any of these:**
- *"I spent 5000 ringgit on food"*
- *"Paid 15000 ringgit for fuel today"*
- *"Just bought lunch for 3500 ringgit"*

**The app extracts:**
- Amount: RM5,000
- Category: food
- Confidence: high
- Updates daily total

## 🧪 Testing

```bash
# Test the API endpoints
node test-demo.js
```

## 🎬 Demo Script

See [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) for complete demo walkthrough.

## 🔧 Configuration

Set up AWS credentials:
```bash
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret
export AWS_DEFAULT_REGION=us-east-1
```

## 🚀 Deploy to AWS Amplify

```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

## 🚀 Production Enhancements

- [ ] Database integration (PostgreSQL/DynamoDB)
- [ ] User authentication (Cognito)
- [ ] Budget alerts (SNS)
- [ ] Analytics dashboard (QuickSight)
- [ ] Mobile app (React Native)

## 📄 License

MIT - Built for educational demo purposes