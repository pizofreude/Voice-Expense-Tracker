# 🎯 Voice Expense Tracker Demo Script

## 🚀 **Demo Setup (30 seconds)**
```bash
npm start
# Open http://localhost:3000
```

## 📝 **Demo Flow & Talking Points**

### **1. Problem Introduction (1 minute)**
> "How many of you forget to track your daily expenses? I built this voice-powered expense tracker that lets you just speak your spending and automatically extracts the amount and category using AWS AI services."

### **2. Show the Interface (30 seconds)**
- Point out the clean UI
- Highlight "Powered by AWS Transcribe + Comprehend" badge
- Show the daily summary section

### **3. Live Demo - Basic Expense (1 minute)**
**Say:** *"I spent 5000 ringgit on food"*

**Highlight:**
- Real-time speech recognition
- AWS Comprehend entity detection
- Automatic amount/category extraction
- Daily total updates

### **4. Live Demo - Complex Expense (1 minute)**
**Say:** *"Paid 15000 ringgit for fuel today"*

**Show:**
- AI confidence levels
- Sentiment analysis
- Entity extraction results
- Running daily total

### **5. AWS Services Deep Dive (2 minutes)**

**AWS Transcribe:**
- Upload audio file route (`/upload`)
- S3 storage integration
- Transcription job polling

**AWS Comprehend:**
- Entity detection for categories
- Sentiment analysis
- Confidence scoring
- Fallback to regex patterns

### **6. Daily Tracking Demo (1 minute)**
Add multiple expenses to show:
- Running daily total
- Recent expenses list
- Category breakdown

## 🎤 **Demo Phrases to Use**

### **Easy Extractions:**
- "I spent 2000 ringgit on transport"
- "Paid 8000 ringgit for groceries"
- "5000 ringgit fuel"

### **Complex Extractions:**
- "Just bought lunch for 3500 ringgit"
- "Spent fifteen thousand ringgit on shopping today"
- "Paid the electricity bill, cost me 12000 ringgit"

### **Edge Cases:**
- "I think I spent around 4000 on food"
- "Expensive dinner tonight, probably 8000 ringgit"

## 🔧 **Technical Highlights for Viewers**

1. **Dual Processing Paths:**
   - Web Speech API (instant)
   - AWS Transcribe (robust)

2. **AI-Powered Extraction:**
   - AWS Comprehend for entities
   - Regex fallback for reliability
   - Confidence scoring

3. **Real-World Features:**
   - Daily expense tracking
   - Category breakdown
   - Persistent storage

## 💡 **Extension Ideas to Mention**

- **Database Integration:** PostgreSQL/DynamoDB
- **User Authentication:** Cognito
- **Budget Alerts:** SNS notifications
- **Analytics Dashboard:** QuickSight
- **Mobile App:** React Native
- **Voice Commands:** "Show my weekly spending"

## 🎯 **Key Takeaways for Audience**

1. **No ML Training Required** - Use existing AWS AI services
2. **Speech → Structured Data** - Practical AI application
3. **Serverless Architecture** - Scalable and cost-effective
4. **Real Problem Solved** - Daily expense tracking made easy

---

## 🚨 **Demo Backup Plan**

If live speech fails:
1. Use `/process-speech` endpoint with curl
2. Show pre-recorded audio file upload
3. Demonstrate with text input in browser console

```bash
# Backup curl command
curl -X POST http://localhost:3000/process-speech \
  -H "Content-Type: application/json" \
  -d '{"text": "I spent 5000 naira on food"}'
```