// Quick test script for demo
const fetch = require('node-fetch');

// Test only the /process-speech endpoint (core demo functionality)

async function testDemo() {
  const testPhrases = [
    "I spent 50 dollars on food",
    "Paid 25 dollars for fuel today", 
    "Just bought lunch for 15 dollars",
  "I spent 5000 ringgit on groceries",
  "Paid 15000 ringgit for rent"
  ];

  console.log('🧪 Testing Voice Expense Demo...\n');

  for (const phrase of testPhrases) {
    try {
      console.log(`📝 Testing: "${phrase}"`);
      
      const response = await fetch('http://localhost:3000/process-speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: phrase })
      });
      
      const result = await response.json();
      
      console.log(`💰 Amount: ${result.currencySymbol || '$'}${result.amount || 'Not found'}`);
      console.log(`💲 Currency: ${result.currency || 'USD'}`);
      console.log(`📂 Category: ${result.category || 'Not found'}`);
      console.log(`🎯 Confidence: ${result.confidence || 'N/A'}`);
      console.log(`📊 Daily Total: ${result.currencySymbol || '$'}${result.dailyTotal || 0}`);
      console.log('---\n');
      
    } catch (error) {
      console.error(`❌ Error testing "${phrase}":`, error.message);
    }
  }

  // Test daily summary
  try {
    const summaryResponse = await fetch('http://localhost:3000/daily-summary?currency=USD');
    const summary = await summaryResponse.json();
    
    console.log('📈 Daily Summary:');
    console.log(`Total Expenses: ${summary.totalExpenses}`);
    console.log(`Daily Total: ${summary.currencySymbol || '$'}${summary.dailyTotal}`);
    console.log(`Currency: ${summary.currency || 'USD'}`);
    console.log(`Categories:`, summary.categoryBreakdown);
    
  } catch (error) {
    console.error('❌ Error getting daily summary:', error.message);
  }
}

// Run if called directly
if (require.main === module) {
  testDemo();
}

module.exports = testDemo;