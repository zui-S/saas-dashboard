const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('🚀 Generating professional placeholder screenshots...');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });

  const screenshots = [
    {
      name: '01-homepage.png',
      title: '🏠 HOMEPAGE',
      subtitle: 'Modern SaaS Landing Page',
      features: ['Hero Section', 'Feature Showcase', 'Call-to-Action']
    },
    {
      name: '02-signin.png',
      title: '🔐 SIGN IN',
      subtitle: 'Secure Authentication',
      features: ['Email/Password Login', 'Social Auth (Google, GitHub)', 'Password Reset']
    },
    {
      name: '03-dashboard.png',
      title: '📊 DASHBOARD',
      subtitle: 'Real-time Analytics',
      features: ['Revenue Tracking', 'User Metrics', 'Activity Feed']
    },
    {
      name: '04-pricing.png',
      title: '💰 PRICING',
      subtitle: 'Flexible Plans',
      features: ['Free Tier', 'Pro: $29/mo', 'Enterprise: $99/mo']
    },
    {
      name: '05-billing.png',
      title: '💳 BILLING',
      subtitle: 'Subscription Management',
      features: ['Plan Upgrades', 'Payment History', 'Invoice Downloads']
    }
  ];

  const outputDir = path.join(__dirname, 'docs', 'screenshots');
  console.log(`📁 Output directory: ${outputDir}\n`);

  for (const [index, screenshot] of screenshots.entries()) {
    console.log(`📸 Generating: ${screenshot.name}`);
    
    await generateScreenshot(page, screenshot, outputDir, index);
    console.log(`✅ Saved: ${path.join(outputDir, screenshot.name)}\n`);
  }

  await browser.close();
  console.log('✨ All screenshots generated successfully!');
  console.log('\n📝 Next steps:');
  console.log('   1. Run "npm run dev" to start the app');
  console.log('   2. Replace these placeholders with real screenshots');
  console.log('   3. Commit and push to GitHub');
})();

async function generateScreenshot(page, screenshot, outputDir, index) {
  const gradientColors = [
    ['linear-gradient(135deg, #667eea 0%, #764ba2 100%)', '#667eea'],
    ['linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', '#f093fb'],
    ['linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', '#4facfe'],
    ['linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', '#43e97b'],
    ['linear-gradient(135deg, #fa709a 0%, #fee140 100%)', '#fa709a']
  ];
  
  const colors = gradientColors[index % gradientColors.length];
  
  const featuresHTML = screenshot.features
    .map(f => `<li style="font-size: 20px; color: #666; margin: 15px 0; display: flex; align-items: center;">
      <span style="color: ${colors[1]}; margin-right: 10px;">✓</span> ${f}
    </li>`)
    .join('');

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${screenshot.title}</title>
    </head>
    <body style="margin: 0; padding: 0; height: 1080px; background: ${colors[0]}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      <div style="
        max-width: 1400px;
        margin: 0 auto;
        padding: 80px 60px;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
      ">
        
        <!-- Main Card -->
        <div style="
          background: white;
          border-radius: 24px;
          padding: 80px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
          margin-bottom: 40px;
        ">
          <!-- Title -->
          <h1 style="
            font-size: 96px;
            margin: 0 0 30px 0;
            background: ${colors[0]};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 800;
            letter-spacing: -2px;
          ">${screenshot.title}</h1>
          
          <!-- Subtitle -->
          <p style="
            font-size: 42px;
            color: #555;
            margin: 0 0 60px 0;
            line-height: 1.4;
            font-weight: 300;
          ">${screenshot.subtitle}</p>
          
          <!-- Features List -->
          <ul style="
            list-style: none;
            padding: 0;
            margin: 0 0 60px 0;
            border-top: 3px solid #f0f0f0;
            padding-top: 40px;
          ">
            ${featuresHTML}
          </ul>
          
          <!-- Tech Stack Badge -->
          <div style="
            display: inline-flex;
            gap: 15px;
            flex-wrap: wrap;
          ">
            ${['Next.js 15', 'TypeScript', 'Stripe', 'Prisma'].map(tech => `
              <span style="
                background: ${colors[0]};
                color: white;
                padding: 12px 24px;
                border-radius: 50px;
                font-size: 18px;
                font-weight: 600;
              ">${tech}</span>
            `).join('')}
          </div>
        </div>
        
        <!-- Footer Info -->
        <div style="
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 40px 60px;
          text-align: center;
        ">
          <p style="
            font-size: 28px;
            color: white;
            margin: 0 0 20px 0;
            font-weight: 600;
          ">🚧 Live Screenshot Coming Soon</p>
          
          <p style="
            font-size: 20px;
            color: rgba(255,255,255,0.9);
            margin: 0;
          ">
            Run <code style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 8px; font-family: monospace;">npm run dev</code> to generate real screenshots
          </p>
          
          <div style="
            margin-top: 30px;
            padding-top: 30px;
            border-top: 2px solid rgba(255,255,255,0.3);
          ">
            <p style="font-size: 18px; color: rgba(255,255,255,0.8); margin: 0;">
              📧 Contact: ginoshaw1991@hotmail.com
            </p>
            <p style="font-size: 16px; color: rgba(255,255,255,0.7); margin: 10px 0 0 0;">
              🔗 github.com/zui-S/saas-dashboard
            </p>
          </div>
        </div>
        
      </div>
    </body>
    </html>
  `);
  
  await page.waitForTimeout(1000);
  await page.screenshot({ 
    path: path.join(outputDir, screenshot.name),
    type: 'png'
  });
}
