const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('🎨 Generating fashion-forward screenshots with modern design...\n');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const outputDir = path.join(__dirname, 'docs', 'screenshots');

  // Homepage - Modern SaaS with bold colors
  console.log('📸 01-homepage.png - Bold modern homepage');
  await generateHomepage(browser, outputDir);

  // Sign In - Sleek authentication
  console.log('📸 02-signin.png - Minimalist sign in');
  await generateSignIn(browser, outputDir);

  // Dashboard - Data viz with vibrant colors
  console.log('📸 03-dashboard.png - Vibrant analytics dashboard');
  await generateDashboard(browser, outputDir);

  // Pricing - Creative pricing cards
  console.log('📸 04-pricing.png - Bold pricing design');
  await generatePricing(browser, outputDir);

  // Billing - Clean billing interface
  console.log('📸 05-billing.png - Modern billing management');
  await generateBilling(browser, outputDir);

  await browser.close();
  console.log('\n✨ All screenshots generated with fashion-forward design!');
})();

// Color Palette - German3 / Nano Banana inspired
const colors = {
  // Primary - Bold orange/coral
  primary: '#FF6B35',
  primaryDark: '#E85D2A',
  
  // Secondary - Deep blue
  secondary: '#1E3A5F',
  
  // Accent - Vibrant yellow
  accent: '#FFD23F',
  
  // Neutrals
  black: '#0D0D0D',
  darkGray: '#1A1A1A',
  gray: '#6B6B6B',
  lightGray: '#E5E5E5',
  offWhite: '#FAFAFA',
  white: '#FFFFFF',
  
  // Success/Error
  success: '#00C853',
  error: '#FF5252',
  
  // Gradients
  gradient1: 'linear-gradient(135deg, #FF6B35 0%, #FF8F66 100%)',
  gradient2: 'linear-gradient(135deg, #1E3A5F 0%, #2E5077 100%)',
  gradient3: 'linear-gradient(135deg, #FFD23F 0%, #FFE066 100%)',
};

async function generateHomepage(browser, outputDir) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        
        /* Navigation */
        nav { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: 24px 80px; 
          background: ${colors.white};
          border-bottom: 1px solid ${colors.lightGray};
        }
        .logo { 
          font-size: 28px; 
          font-weight: 900; 
          color: ${colors.black};
          letter-spacing: -1px;
        }
        .logo span { color: ${colors.primary}; }
        .nav-links { display: flex; gap: 48px; align-items: center; }
        .nav-links a { 
          text-decoration: none; 
          color: ${colors.gray}; 
          font-weight: 600;
          font-size: 15px;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: ${colors.black}; }
        .btn-primary { 
          background: ${colors.black}; 
          color: ${colors.white}; 
          padding: 14px 32px; 
          border-radius: 100px; 
          text-decoration: none; 
          font-weight: 700;
          font-size: 15px;
          transition: all 0.2s;
        }
        .btn-primary:hover { 
          background: ${colors.primary};
          transform: translateY(-2px);
        }
        
        /* Hero */
        .hero { 
          text-align: center; 
          padding: 140px 80px 100px; 
          background: ${colors.offWhite};
        }
        .hero-badge {
          display: inline-block;
          background: ${colors.accent};
          color: ${colors.black};
          padding: 8px 20px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 32px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hero h1 { 
          font-size: 80px; 
          font-weight: 900; 
          margin-bottom: 32px; 
          color: ${colors.black};
          letter-spacing: -3px;
          line-height: 1.1;
        }
        .hero h1 span { 
          color: ${colors.primary};
        }
        .hero p { 
          font-size: 22px; 
          color: ${colors.gray}; 
          max-width: 700px; 
          margin: 0 auto 48px; 
          line-height: 1.6;
          font-weight: 400;
        }
        .hero-buttons { 
          display: flex; 
          gap: 16px; 
          justify-content: center; 
        }
        .btn-large { 
          padding: 18px 48px; 
          font-size: 18px; 
          border-radius: 100px; 
          font-weight: 700;
          transition: all 0.2s;
        }
        .btn-hero { 
          background: ${colors.primary}; 
          color: ${colors.white};
          border: none;
        }
        .btn-hero:hover {
          background: ${colors.primaryDark};
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
        }
        .btn-outline { 
          background: ${colors.white}; 
          color: ${colors.black}; 
          border: 2px solid ${colors.lightGray};
        }
        .btn-outline:hover {
          border-color: ${colors.black};
        }
        
        /* Features */
        .features { 
          padding: 120px 80px; 
          background: ${colors.white};
        }
        .features-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .features h2 { 
          font-size: 56px; 
          font-weight: 900;
          color: ${colors.black};
          letter-spacing: -2px;
          margin-bottom: 16px;
        }
        .features-subtitle {
          font-size: 20px;
          color: ${colors.gray};
        }
        .feature-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 32px; 
        }
        .feature-card { 
          padding: 48px; 
          border-radius: 24px; 
          background: ${colors.offWhite};
          transition: all 0.3s;
          border: 1px solid transparent;
        }
        .feature-card:hover {
          border-color: ${colors.primary};
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .feature-icon { 
          width: 64px;
          height: 64px;
          background: ${colors.gradient1};
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 32px;
        }
        .feature-card h3 { 
          font-size: 24px; 
          font-weight: 800; 
          margin-bottom: 16px; 
          color: ${colors.black};
          letter-spacing: -0.5px;
        }
        .feature-card p { 
          color: ${colors.gray}; 
          line-height: 1.7;
          font-size: 16px;
        }
        
        /* Stats Bar */
        .stats { 
          display: flex; 
          justify-content: space-around; 
          padding: 80px; 
          background: ${colors.black};
        }
        .stat { 
          text-align: center; 
        }
        .stat-number { 
          font-size: 72px; 
          font-weight: 900;
          color: ${colors.white};
          letter-spacing: -2px;
        }
        .stat-number span {
          color: ${colors.primary};
        }
        .stat-label { 
          font-size: 16px; 
          color: ${colors.gray};
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          margin-top: 12px;
        }
        
        /* SVG Icons */
        .icon { width: 32px; height: 32px; fill: white; }
      </style>
    </head>
    <body>
      <nav>
        <div class="logo">SaaS<span>.</span></div>
        <div class="nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#" class="btn-primary">Get Started</a>
        </div>
      </nav>
      
      <section class="hero">
        <span class="hero-badge">🚀 New v2.0 Released</span>
        <h1>Build Beautiful<br><span>Data Products</span></h1>
        <p>The complete platform for modern SaaS companies. Analytics, billing, and team management in one place.</p>
        <div class="hero-buttons">
          <button class="btn-large btn-hero">Start Free Trial →</button>
          <button class="btn-large btn-outline">Watch Demo</button>
        </div>
      </section>
      
      <section class="features">
        <div class="features-header">
          <h2>Everything You Need</h2>
          <p class="features-subtitle">Powerful features for growing businesses</p>
        </div>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg class="icon" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            </div>
            <h3>Enterprise Security</h3>
            <p>Bank-level encryption and security. SOC 2 Type II certified. Your data is always protected.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg class="icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
            </div>
            <h3>Real-time Analytics</h3>
            <p>Live dashboards with instant updates. Track metrics that matter to your business growth.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg class="icon" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
            </div>
            <h3>Smart Billing</h3>
            <p>Automated subscriptions and invoicing. Stripe integration for seamless payments.</p>
          </div>
        </div>
      </section>
      
      <section class="stats">
        <div class="stat">
          <div class="stat-number">99.9<span>%</span></div>
          <div class="stat-label">Uptime SLA</div>
        </div>
        <div class="stat">
          <div class="stat-number">10<span>K+</span></div>
          <div class="stat-label">Active Users</div>
        </div>
        <div class="stat">
          <div class="stat-number">$50<span>M+</span></div>
          <div class="stat-label">Processed</div>
        </div>
        <div class="stat">
          <div class="stat-number">24<span>/7</span></div>
          <div class="stat-label">Support</div>
        </div>
      </section>
    </body>
    </html>
  `);
  
  await page.screenshot({ path: path.join(outputDir, '01-homepage.png') });
  await page.close();
}

async function generateSignIn(browser, outputDir) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: ${colors.offWhite};
          min-height: 1080px;
          display: flex;
        }
        
        /* Left Panel */
        .left-panel { 
          flex: 1; 
          background: ${colors.gradient2};
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .left-panel::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        }
        .brand {
          font-size: 32px;
          font-weight: 900;
          color: ${colors.white};
          margin-bottom: 60px;
          letter-spacing: -1px;
        }
        .brand span { color: ${colors.accent}; }
        .left-panel h1 { 
          font-size: 64px; 
          font-weight: 900; 
          color: ${colors.white};
          margin-bottom: 32px;
          letter-spacing: -2px;
          line-height: 1.1;
        }
        .left-panel p { 
          font-size: 20px; 
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          margin-bottom: 48px;
        }
        .feature-list { 
          list-style: none; 
        }
        .feature-list li { 
          padding: 20px 0; 
          display: flex; 
          align-items: center; 
          gap: 20px; 
          font-size: 18px;
          color: ${colors.white};
          font-weight: 500;
        }
        .check-icon {
          width: 28px;
          height: 28px;
          background: ${colors.accent};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .check-icon svg { width: 16px; height: 16px; fill: ${colors.black}; }
        
        /* Right Panel */
        .right-panel { 
          width: 600px;
          background: ${colors.white};
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .auth-header { margin-bottom: 48px; }
        .auth-header h2 { 
          font-size: 40px; 
          font-weight: 900; 
          color: ${colors.black};
          margin-bottom: 12px;
          letter-spacing: -1.5px;
        }
        .auth-header p { 
          color: ${colors.gray};
          font-size: 18px;
        }
        
        .form-group { 
          margin-bottom: 24px; 
        }
        .form-group label { 
          display: block; 
          font-weight: 700; 
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px; 
          color: ${colors.black};
        }
        .form-group input { 
          width: 100%; 
          padding: 18px 20px; 
          border: 2px solid ${colors.lightGray}; 
          border-radius: 12px; 
          font-size: 16px; 
          font-family: inherit;
          transition: all 0.2s;
        }
        .form-group input:focus { 
          outline: none; 
          border-color: ${colors.black};
        }
        
        .btn-submit { 
          width: 100%; 
          background: ${colors.black}; 
          color: ${colors.white}; 
          padding: 20px; 
          border: none; 
          border-radius: 12px; 
          font-size: 18px; 
          font-weight: 800; 
          cursor: pointer; 
          margin-top: 8px;
          font-family: inherit;
          transition: all 0.2s;
        }
        .btn-submit:hover { 
          background: ${colors.primary};
          transform: translateY(-2px);
        }
        
        .divider { 
          text-align: center; 
          margin: 40px 0; 
          color: ${colors.gray}; 
          position: relative; 
          font-weight: 600;
        }
        .divider::before { 
          content: ''; 
          position: absolute; 
          left: 0; 
          right: 0; 
          top: 50%; 
          height: 1px; 
          background: ${colors.lightGray}; 
          z-index: -1; 
        }
        .divider span { 
          background: ${colors.white}; 
          padding: 0 24px; 
        }
        
        .social-login { 
          display: flex; 
          flex-direction: column; 
          gap: 16px; 
        }
        .btn-social { 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 12px; 
          padding: 16px; 
          border: 2px solid ${colors.lightGray}; 
          border-radius: 12px; 
          background: ${colors.white}; 
          font-size: 16px; 
          font-weight: 700; 
          cursor: pointer; 
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-social:hover { 
          border-color: ${colors.black};
          transform: translateY(-2px);
        }
        .social-icon { width: 24px; height: 24px; }
        
        .footer-text { 
          text-align: center; 
          margin-top: 40px; 
          color: ${colors.gray};
          font-size: 16px;
        }
        .footer-text a { 
          color: ${colors.black}; 
          text-decoration: none; 
          font-weight: 800;
        }
        .footer-text a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <div class="left-panel">
        <div class="brand">SaaS<span>.</span></div>
        <h1>Welcome Back</h1>
        <p>Sign in to access your dashboard and manage your business.</p>
        <ul class="feature-list">
          <li>
            <div class="check-icon">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            Real-time analytics dashboard
          </li>
          <li>
            <div class="check-icon">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            Team collaboration tools
          </li>
          <li>
            <div class="check-icon">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            Advanced reporting & exports
          </li>
          <li>
            <div class="check-icon">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            24/7 priority support
          </li>
        </ul>
      </div>
      
      <div class="right-panel">
        <div class="auth-header">
          <h2>Sign In</h2>
          <p>Enter your credentials to continue</p>
        </div>
        
        <form>
          <div class="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" value="demo@saas.com">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value="••••••••">
          </div>
          <button type="button" class="btn-submit">Sign In →</button>
        </form>
        
        <div class="divider"><span>or continue with</span></div>
        
        <div class="social-login">
          <button class="btn-social">
            <svg class="social-icon" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>
          <button class="btn-social">
            <svg class="social-icon" viewBox="0 0 24 24" fill="${colors.black}"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Continue with GitHub
          </button>
        </div>
        
        <p class="footer-text">
          Don't have an account? <a href="#">Sign up for free</a>
        </p>
      </div>
    </body>
    </html>
  `);
  
  await page.screenshot({ path: path.join(outputDir, '02-signin.png') });
  await page.close();
}

async function generateDashboard(browser, outputDir) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: ${colors.offWhite};
          display: flex;
          min-height: 1080px;
        }
        
        /* Sidebar */
        .sidebar { 
          width: 280px; 
          background: ${colors.white};
          padding: 32px 24px; 
          border-right: 1px solid ${colors.lightGray};
        }
        .logo { 
          font-size: 26px; 
          font-weight: 900; 
          color: ${colors.black};
          margin-bottom: 48px;
          letter-spacing: -1px;
        }
        .logo span { color: ${colors.primary}; }
        .nav-item { 
          display: flex; 
          align-items: center; 
          gap: 16px; 
          padding: 14px 16px; 
          border-radius: 12px; 
          color: ${colors.gray}; 
          text-decoration: none; 
          margin-bottom: 8px; 
          font-weight: 600;
          font-size: 15px;
          transition: all 0.2s;
        }
        .nav-item:hover, .nav-item.active { 
          background: ${colors.black};
          color: ${colors.white};
        }
        .nav-item svg { width: 22px; height: 22px; fill: currentColor; }
        
        /* Main Content */
        .main { flex: 1; padding: 40px; }
        .header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          margin-bottom: 40px; 
        }
        .header h1 { 
          font-size: 40px; 
          color: ${colors.black};
          font-weight: 900;
          letter-spacing: -1.5px;
        }
        .user-menu { 
          display: flex; 
          align-items: center; 
          gap: 16px; 
        }
        .user-name { font-weight: 700; color: ${colors.black}; }
        .avatar { 
          width: 48px; 
          height: 48px; 
          border-radius: 50%; 
          background: ${colors.gradient1};
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: ${colors.white}; 
          font-weight: 800;
          font-size: 20px;
        }
        
        /* Stats Grid */
        .stats-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 24px; 
          margin-bottom: 32px; 
        }
        .stat-card { 
          background: ${colors.white};
          padding: 32px; 
          border-radius: 16px; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .stat-label { 
          color: ${colors.gray}; 
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px; 
        }
        .stat-value { 
          font-size: 40px; 
          font-weight: 900; 
          color: ${colors.black};
          letter-spacing: -1px;
        }
        .stat-change { 
          font-size: 14px; 
          margin-top: 12px;
          font-weight: 600;
        }
        .stat-change.up { color: ${colors.success}; }
        .stat-change.down { color: ${colors.error}; }
        
        /* Chart Section */
        .chart-section { 
          background: ${colors.white};
          padding: 40px; 
          border-radius: 16px; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          margin-bottom: 24px; 
        }
        .chart-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          margin-bottom: 32px; 
        }
        .chart-title { 
          font-size: 26px; 
          font-weight: 800;
          color: ${colors.black};
        }
        .chart-legend { 
          display: flex; 
          gap: 32px; 
        }
        .legend-item { 
          display: flex; 
          align-items: center; 
          gap: 10px;
          font-weight: 600;
          font-size: 14px;
        }
        .legend-dot { 
          width: 12px; 
          height: 12px; 
          border-radius: 50%; 
        }
        
        /* Fake Chart */
        .chart { 
          height: 280px; 
          display: flex; 
          align-items: flex-end; 
          gap: 16px; 
          padding: 20px 0; 
          border-bottom: 2px solid ${colors.lightGray};
        }
        .bar { 
          flex: 1; 
          background: ${colors.gradient1};
          border-radius: 8px 8px 0 0; 
          position: relative; 
          transition: opacity 0.2s;
        }
        .bar:hover { opacity: 0.8; }
        
        /* Recent Activity */
        .activity-section { 
          background: ${colors.white};
          padding: 40px; 
          border-radius: 16px; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.04); 
        }
        .activity-title { 
          font-size: 26px; 
          font-weight: 800;
          color: ${colors.black};
          margin-bottom: 32px; 
        }
        .activity-item { 
          display: flex; 
          align-items: center; 
          gap: 20px; 
          padding: 20px 0; 
          border-bottom: 1px solid ${colors.lightGray}; 
        }
        .activity-icon { 
          width: 52px; 
          height: 52px; 
          border-radius: 14px; 
          background: ${colors.offWhite};
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 26px;
          flex-shrink: 0;
        }
        .activity-info { flex: 1; }
        .activity-text { 
          font-weight: 700; 
          color: ${colors.black};
          font-size: 16px;
        }
        .activity-time { 
          color: ${colors.gray}; 
          font-size: 14px;
          margin-top: 4px;
        }
        .activity-amount { 
          font-weight: 800; 
          color: ${colors.success};
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <aside class="sidebar">
        <div class="logo">SaaS<span>.</span></div>
        <nav>
          <a href="#" class="nav-item active">
            <svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            Overview
          </a>
          <a href="#" class="nav-item">
            <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
            Revenue
          </a>
          <a href="#" class="nav-item">
            <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            Customers
          </a>
          <a href="#" class="nav-item">
            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
            Analytics
          </a>
          <a href="#" class="nav-item">
            <svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
            Billing
          </a>
          <a href="#" class="nav-item">
            <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            Settings
          </a>
        </nav>
      </aside>
      
      <main class="main">
        <div class="header">
          <h1>Dashboard</h1>
          <div class="user-menu">
            <span class="user-name">Demo User</span>
            <div class="avatar">D</div>
          </div>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-label">Total Revenue</div>
            <div class="stat-value">$24,563</div>
            <div class="stat-change up">↑ 12.5% vs last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Active Users</div>
            <div class="stat-value">2,453</div>
            <div class="stat-change up">↑ 8.2% vs last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">New Customers</div>
            <div class="stat-value">184</div>
            <div class="stat-change up">↑ 23.1% vs last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Churn Rate</div>
            <div class="stat-value">2.4%</div>
            <div class="stat-change down">↓ 0.3% vs last month</div>
          </div>
        </div>
        
        <section class="chart-section">
          <div class="chart-header">
            <div class="chart-title">Revenue Overview</div>
            <div class="chart-legend">
              <div class="legend-item">
                <div class="legend-dot" style="background: ${colors.primary};"></div>
                This Month
              </div>
              <div class="legend-item">
                <div class="legend-dot" style="background: ${colors.lightGray};"></div>
                Last Month
              </div>
            </div>
          </div>
          <div class="chart">
            <div class="bar" style="height: 40%;"></div>
            <div class="bar" style="height: 65%;"></div>
            <div class="bar" style="height: 55%;"></div>
            <div class="bar" style="height: 80%;"></div>
            <div class="bar" style="height: 70%;"></div>
            <div class="bar" style="height: 90%;"></div>
            <div class="bar" style="height: 85%;"></div>
            <div class="bar" style="height: 95%;"></div>
            <div class="bar" style="height: 75%;"></div>
            <div class="bar" style="height: 100%;"></div>
            <div class="bar" style="height: 88%;"></div>
            <div class="bar" style="height: 92%;"></div>
          </div>
        </section>
        
        <section class="activity-section">
          <div class="activity-title">Recent Activity</div>
          <div class="activity-item">
            <div class="activity-icon">💳</div>
            <div class="activity-info">
              <div class="activity-text">New subscription: Pro Plan</div>
              <div class="activity-time">2 minutes ago</div>
            </div>
            <div class="activity-amount">+$29.00</div>
          </div>
          <div class="activity-item">
            <div class="activity-icon">👤</div>
            <div class="activity-info">
              <div class="activity-text">New user registered</div>
              <div class="activity-time">15 minutes ago</div>
            </div>
          </div>
          <div class="activity-item">
            <div class="activity-icon">⬆️</div>
            <div class="activity-info">
              <div class="activity-text">Subscription upgraded: Enterprise</div>
              <div class="activity-time">1 hour ago</div>
            </div>
            <div class="activity-amount">+$70.00</div>
          </div>
          <div class="activity-item">
            <div class="activity-icon">📧</div>
            <div class="activity-info">
              <div class="activity-text">Invoice sent to Acme Corp</div>
              <div class="activity-time">3 hours ago</div>
            </div>
          </div>
        </section>
      </main>
    </body>
    </html>
  `);
  
  await page.screenshot({ path: path.join(outputDir, '03-dashboard.png') });
  await page.close();
}

async function generatePricing(browser, outputDir) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: ${colors.offWhite};
          min-height: 1080px;
          padding: 80px;
        }
        
        .header { 
          text-align: center; 
          margin-bottom: 80px; 
        }
        .header-badge {
          display: inline-block;
          background: ${colors.accent};
          color: ${colors.black};
          padding: 8px 20px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }
        .header h1 { 
          font-size: 64px; 
          font-weight: 900; 
          color: ${colors.black};
          margin-bottom: 20px;
          letter-spacing: -2.5px;
        }
        .header p { 
          font-size: 22px; 
          color: ${colors.gray};
          max-width: 600px; 
          margin: 0 auto; 
          line-height: 1.6;
        }
        
        .pricing-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 32px; 
          max-width: 1400px; 
          margin: 0 auto; 
        }
        
        .pricing-card { 
          background: ${colors.white};
          border-radius: 24px; 
          padding: 48px 40px; 
          position: relative; 
          transition: all 0.3s;
          border: 2px solid transparent;
        }
        .pricing-card:hover { 
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
        }
        .pricing-card.popular { 
          border-color: ${colors.primary};
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
        }
        
        .popular-badge { 
          position: absolute; 
          top: -16px; 
          left: 50%; 
          transform: translateX(-50%); 
          background: ${colors.gradient1};
          color: ${colors.white};
          padding: 8px 24px; 
          border-radius: 100px; 
          font-weight: 800; 
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .plan-name { 
          font-size: 20px; 
          font-weight: 800; 
          color: ${colors.gray};
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .plan-price { 
          font-size: 80px; 
          font-weight: 900; 
          color: ${colors.black};
          margin-bottom: 8px;
          letter-spacing: -3px;
        }
        .plan-price span { 
          font-size: 24px; 
          color: ${colors.gray};
          font-weight: 500;
          letter-spacing: 0;
        }
        .plan-desc { 
          color: ${colors.gray};
          margin-bottom: 40px; 
          line-height: 1.6;
          font-size: 16px;
        }
        
        .features-list { 
          list-style: none; 
          margin-bottom: 40px; 
        }
        .features-list li { 
          padding: 16px 0; 
          border-bottom: 1px solid ${colors.lightGray};
          display: flex; 
          align-items: center; 
          gap: 16px;
          font-size: 16px;
          font-weight: 500;
        }
        .features-list li:last-child { border-bottom: none; }
        .check-icon {
          width: 24px;
          height: 24px;
          background: ${colors.success};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .check-icon svg { width: 14px; height: 14px; fill: white; }
        .features-list li.disabled { opacity: 0.4; }
        .features-list li.disabled .check-icon { background: ${colors.lightGray}; }
        
        .btn-plan { 
          width: 100%; 
          padding: 18px; 
          border-radius: 100px; 
          font-size: 17px; 
          font-weight: 800; 
          cursor: pointer; 
          border: none;
          font-family: inherit;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-plan.primary { 
          background: ${colors.black};
          color: ${colors.white};
        }
        .btn-plan.primary:hover {
          background: ${colors.primary};
          transform: translateY(-2px);
        }
        .btn-plan.secondary { 
          background: ${colors.offWhite};
          color: ${colors.black};
          border: 2px solid ${colors.lightGray};
        }
        .btn-plan.secondary:hover {
          border-color: ${colors.black};
        }
        
        .trust-badge { 
          text-align: center; 
          margin-top: 80px; 
          color: ${colors.gray};
          font-size: 15px;
        }
        .trust-badge strong { color: ${colors.black}; }
      </style>
    </head>
    <body>
      <div class="header">
        <span class="header-badge">✨ 14-Day Free Trial</span>
        <h1>Simple Pricing</h1>
        <p>Choose the plan that fits your business. All plans include core features.</p>
      </div>
      
      <div class="pricing-grid">
        <!-- Free Plan -->
        <div class="pricing-card">
          <div class="plan-name">Free</div>
          <div class="plan-price">$0<span>/mo</span></div>
          <div class="plan-desc">Perfect for side projects and getting started.</div>
          <ul class="features-list">
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Up to 1,000 events/month
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              1 team member
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Basic analytics
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Email support
            </li>
            <li class="disabled">
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Custom reports
            </li>
            <li class="disabled">
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              API access
            </li>
          </ul>
          <button class="btn-plan secondary">Start Free</button>
        </div>
        
        <!-- Pro Plan -->
        <div class="pricing-card popular">
          <div class="popular-badge">Most Popular</div>
          <div class="plan-name">Pro</div>
          <div class="plan-price">$29<span>/mo</span></div>
          <div class="plan-desc">For growing businesses that need advanced features.</div>
          <ul class="features-list">
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Up to 100K events/month
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              5 team members
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Advanced analytics
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Priority support
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Custom reports
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              API access
            </li>
          </ul>
          <button class="btn-plan primary">Start Pro Trial</button>
        </div>
        
        <!-- Enterprise Plan -->
        <div class="pricing-card">
          <div class="plan-name">Enterprise</div>
          <div class="plan-price">$99<span>/mo</span></div>
          <div class="plan-desc">For large organizations with custom requirements.</div>
          <ul class="features-list">
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Unlimited events
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Unlimited team members
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Advanced analytics
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              24/7 dedicated support
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              Custom integrations
            </li>
            <li>
              <div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
              SLA guarantee
            </li>
          </ul>
          <button class="btn-plan secondary">Contact Sales</button>
        </div>
      </div>
      
      <div class="trust-badge">
        <strong>💳 Secure payments</strong> by Stripe • Cancel anytime • No hidden fees
      </div>
    </body>
    </html>
  `);
  
  await page.screenshot({ path: path.join(outputDir, '04-pricing.png') });
  await page.close();
}

async function generateBilling(browser, outputDir) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: ${colors.offWhite};
          min-height: 1080px;
          padding: 40px;
        }
        
        .container { 
          max-width: 1200px; 
          margin: 0 auto; 
        }
        .header { 
          margin-bottom: 40px; 
        }
        .header h1 { 
          font-size: 40px; 
          color: ${colors.black};
          font-weight: 900;
          letter-spacing: -1.5px;
          margin-bottom: 8px;
        }
        .header p { 
          color: ${colors.gray};
          font-size: 18px;
        }
        
        .billing-grid { 
          display: grid; 
          grid-template-columns: 2fr 1fr; 
          gap: 32px; 
        }
        
        .card { 
          background: ${colors.white};
          border-radius: 20px; 
          padding: 40px; 
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          margin-bottom: 32px; 
        }
        .card-title { 
          font-size: 26px; 
          font-weight: 800;
          color: ${colors.black};
          margin-bottom: 32px;
          letter-spacing: -0.5px;
        }
        
        /* Current Plan */
        .current-plan { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: 40px; 
          background: ${colors.gradient2};
          border-radius: 16px; 
          color: ${colors.white};
          margin-bottom: 32px;
        }
        .plan-info h3 { 
          font-size: 32px; 
          margin-bottom: 12px;
          font-weight: 900;
          letter-spacing: -1px;
        }
        .plan-info p { 
          opacity: 0.9;
          font-size: 16px;
        }
        .plan-actions { text-align: right; }
        .btn-outline { 
          background: transparent; 
          border: 2px solid rgba(255,255,255,0.5); 
          color: ${colors.white}; 
          padding: 14px 32px; 
          border-radius: 100px; 
          font-weight: 700; 
          cursor: pointer;
          font-family: inherit;
          font-size: 15px;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          border-color: ${colors.white};
          background: rgba(255,255,255,0.1);
        }
        
        /* Payment Method */
        .payment-method { 
          display: flex; 
          align-items: center; 
          gap: 24px; 
          padding: 24px; 
          background: ${colors.offWhite};
          border-radius: 14px; 
        }
        .card-icon { 
          width: 64px; 
          height: 42px; 
          background: linear-gradient(135deg, #1a1f71, #00a8e1);
          border-radius: 10px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: ${colors.white}; 
          font-weight: 900; 
          font-size: 16px;
          font-family: monospace;
        }
        .card-details { flex: 1; }
        .card-number { 
          font-size: 20px; 
          font-weight: 700; 
          color: ${colors.black};
          letter-spacing: 1px;
        }
        .card-expiry { 
          color: ${colors.gray}; 
          font-size: 14px;
          margin-top: 4px;
        }
        .btn-update { 
          padding: 12px 28px; 
          border: 2px solid ${colors.lightGray}; 
          color: ${colors.black}; 
          background: ${colors.white}; 
          border-radius: 100px; 
          font-weight: 700; 
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          transition: all 0.2s;
        }
        .btn-update:hover {
          border-color: ${colors.black};
        }
        
        /* Invoice Table */
        .invoice-table { 
          width: 100%; 
          border-collapse: collapse; 
        }
        .invoice-table th { 
          text-align: left; 
          padding: 16px; 
          color: ${colors.gray};
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 2px solid ${colors.lightGray};
        }
        .invoice-table td { 
          padding: 20px 16px; 
          border-bottom: 1px solid ${colors.lightGray};
          font-size: 15px;
        }
        .invoice-table tr:last-child td { border-bottom: none; }
        .status-badge { 
          padding: 6px 16px; 
          border-radius: 100px; 
          font-size: 13px; 
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .status-paid { 
          background: #d1fae5; 
          color: #065f46; 
        }
        .status-pending { 
          background: #fef3c7; 
          color: #92400e; 
        }
        .btn-download { 
          color: ${colors.primary}; 
          text-decoration: none; 
          font-weight: 700;
          font-size: 14px;
        }
        .btn-download:hover { text-decoration: underline; }
        
        /* Sidebar */
        .upgrade-cta { 
          background: ${colors.gradient1};
          color: ${colors.white}; 
          padding: 40px 32px; 
          border-radius: 16px; 
          margin-bottom: 24px;
          text-align: center;
        }
        .upgrade-cta h3 { 
          font-size: 26px; 
          margin-bottom: 16px;
          font-weight: 900;
          letter-spacing: -1px;
        }
        .upgrade-cta p { 
          opacity: 0.95; 
          margin-bottom: 28px; 
          line-height: 1.6;
          font-size: 15px;
        }
        .btn-white { 
          background: ${colors.white}; 
          color: ${colors.primary}; 
          padding: 16px 32px; 
          border: none; 
          border-radius: 100px; 
          font-weight: 800; 
          cursor: pointer; 
          width: 100%;
          font-family: inherit;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.2s;
        }
        .btn-white:hover {
          transform: translateY(-2px);
        }
        
        .usage-card { 
          background: ${colors.offWhite};
          padding: 32px; 
          border-radius: 14px; 
        }
        .usage-label { 
          color: ${colors.gray}; 
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .usage-bar { 
          height: 10px; 
          background: ${colors.lightGray};
          border-radius: 10px; 
          overflow: hidden; 
          margin-bottom: 12px; 
        }
        .usage-fill { 
          height: 100%; 
          background: ${colors.gradient1};
          border-radius: 10px; 
        }
        .usage-text { 
          font-size: 14px; 
          color: ${colors.gray};
          font-weight: 600;
        }
        .usage-text.success { 
          color: ${colors.success};
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Billing & Subscription</h1>
          <p>Manage your plan, payment methods, and billing history.</p>
        </div>
        
        <div class="billing-grid">
          <div class="main-content">
            <!-- Current Plan -->
            <div class="card">
              <h2 class="card-title">Current Plan</h2>
              <div class="current-plan">
                <div class="plan-info">
                  <h3>Pro Plan</h3>
                  <p>$29/month • Next billing: April 6, 2026</p>
                </div>
                <div class="plan-actions">
                  <button class="btn-outline">Upgrade</button>
                </div>
              </div>
              
              <h3 style="margin-bottom: 20px; font-size: 18px; font-weight: 700;">Payment Method</h3>
              <div class="payment-method">
                <div class="card-icon">VISA</div>
                <div class="card-details">
                  <div class="card-number">•••• •••• •••• 4242</div>
                  <div class="card-expiry">Expires 12/2027</div>
                </div>
                <button class="btn-update">Update</button>
              </div>
            </div>
            
            <!-- Invoice History -->
            <div class="card">
              <h2 class="card-title">Invoice History</h2>
              <table class="invoice-table">
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>#INV-2026-003</strong></td>
                    <td>Mar 6, 2026</td>
                    <td><strong>$29.00</strong></td>
                    <td><span class="status-badge status-paid">Paid</span></td>
                    <td><a href="#" class="btn-download">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td><strong>#INV-2026-002</strong></td>
                    <td>Feb 6, 2026</td>
                    <td><strong>$29.00</strong></td>
                    <td><span class="status-badge status-paid">Paid</span></td>
                    <td><a href="#" class="btn-download">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td><strong>#INV-2026-001</strong></td>
                    <td>Jan 6, 2026</td>
                    <td><strong>$29.00</strong></td>
                    <td><span class="status-badge status-paid">Paid</span></td>
                    <td><a href="#" class="btn-download">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td><strong>#INV-2025-012</strong></td>
                    <td>Dec 6, 2025</td>
                    <td><strong>$29.00</strong></td>
                    <td><span class="status-badge status-pending">Pending</span></td>
                    <td><a href="#" class="btn-download">Download PDF</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="sidebar">
            <!-- Upgrade CTA -->
            <div class="upgrade-cta">
              <h3>🚀 Go Enterprise</h3>
              <p>Unlimited events, dedicated support, custom integrations, and SLA guarantee.</p>
              <button class="btn-white">Contact Sales</button>
            </div>
            
            <!-- Usage -->
            <div class="usage-card">
              <div class="usage-label">Monthly Usage</div>
              <div class="usage-bar">
                <div class="usage-fill" style="width: 68%;"></div>
              </div>
              <div class="usage-text">68,432 / 100,000 events</div>
              <div class="usage-text success">✓ Within plan limits</div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
  
  await page.screenshot({ path: path.join(outputDir, '05-billing.png') });
  await page.close();
}

console.log('✨ Fashion-forward screenshot generator loaded');
