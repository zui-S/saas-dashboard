const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('🧡 Generating Coral Orange style screenshots...\n');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const outputDir = path.join(__dirname, 'docs', 'screenshots');

  console.log('📸 01-homepage.png');
  await generateHomepage(browser, outputDir);

  console.log('📸 02-signin.png');
  await generateSignIn(browser, outputDir);

  console.log('📸 03-dashboard.png');
  await generateDashboard(browser, outputDir);

  console.log('📸 04-pricing.png');
  await generatePricing(browser, outputDir);

  console.log('📸 05-billing.png');
  await generateBilling(browser, outputDir);

  await browser.close();
  console.log('\n✨ All screenshots generated with Coral Orange aesthetic!');
})();

// Coral Orange Color Palette
const colors = {
  // Primary - Coral Orange
  primary: '#FF6B35',
  primaryLight: '#FF8F66',
  primaryDark: '#E85D2A',
  
  // Neutrals
  black: '#1A1A1A',
  darkGray: '#4A4A4A',
  gray: '#6B6B6B',
  lightGray: '#E5E5E5',
  offWhite: '#FAFAFA',
  white: '#FFFFFF',
  
  // Functional
  success: '#2ECC71',
  error: '#E74C3C',
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        
        nav { display: flex; justify-content: space-between; align-items: center; padding: 24px 80px; background: ${colors.white}; border-bottom: 1px solid ${colors.lightGray}; }
        .logo { font-size: 28px; font-weight: 800; color: ${colors.black}; }
        .logo span { color: ${colors.primary}; }
        .nav-links { display: flex; gap: 40px; align-items: center; }
        .nav-links a { text-decoration: none; color: ${colors.gray}; font-weight: 600; font-size: 15px; }
        .nav-links a:hover { color: ${colors.black}; }
        .btn-primary { background: ${colors.black}; color: ${colors.white}; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 15px; transition: all 0.2s; }
        .btn-primary:hover { background: ${colors.primary}; }
        
        .hero { text-align: center; padding: 140px 80px 100px; background: linear-gradient(180deg, ${colors.white} 0%, ${colors.offWhite} 100%); }
        .hero-badge { display: inline-block; background: ${colors.primary}; color: ${colors.white}; padding: 8px 20px; border-radius: 100px; font-weight: 700; font-size: 14px; margin-bottom: 32px; }
        .hero h1 { font-size: 80px; font-weight: 900; margin-bottom: 32px; color: ${colors.black}; letter-spacing: -3px; line-height: 1.1; }
        .hero h1 span { color: ${colors.primary}; }
        .hero p { font-size: 22px; color: ${colors.gray}; max-width: 700px; margin: 0 auto 48px; line-height: 1.6; }
        .hero-buttons { display: flex; gap: 16px; justify-content: center; }
        .btn-large { padding: 18px 48px; font-size: 18px; border-radius: 100px; font-weight: 700; transition: all 0.2s; cursor: pointer; border: none; }
        .btn-hero { background: ${colors.primary}; color: ${colors.white}; }
        .btn-hero:hover { background: ${colors.primaryDark}; }
        .btn-outline { background: ${colors.white}; color: ${colors.black}; border: 2px solid ${colors.lightGray}; }
        .btn-outline:hover { border-color: ${colors.black}; }
        
        .features { padding: 120px 80px; background: ${colors.white}; }
        .features h2 { text-align: center; font-size: 56px; font-weight: 900; color: ${colors.black}; margin-bottom: 80px; letter-spacing: -2px; }
        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .feature-card { padding: 48px; border-radius: 24px; background: ${colors.offWhite}; transition: all 0.3s; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .feature-icon { width: 64px; height: 64px; background: ${colors.primary}; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
        .feature-icon svg { width: 32px; height: 32px; fill: white; }
        .feature-card h3 { font-size: 24px; font-weight: 800; margin-bottom: 16px; color: ${colors.black}; }
        .feature-card p { color: ${colors.gray}; line-height: 1.7; font-size: 16px; }
        
        .stats { display: flex; justify-content: space-around; padding: 80px; background: ${colors.black}; }
        .stat { text-align: center; }
        .stat-number { font-size: 72px; font-weight: 900; color: ${colors.primary}; }
        .stat-label { font-size: 16px; color: ${colors.gray}; text-transform: uppercase; letter-spacing: 2px; font-weight: 600; margin-top: 12px; }
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
        <span class="hero-badge">🚀 v2.0 Released</span>
        <h1>Build Beautiful<br><span>Data Products</span></h1>
        <p>The complete platform for modern SaaS companies. Analytics, billing, and team management in one place.</p>
        <div class="hero-buttons">
          <button class="btn-large btn-hero">Start Free Trial</button>
          <button class="btn-large btn-outline">Watch Demo</button>
        </div>
      </section>
      
      <section class="features">
        <h2>Everything You Need</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
            </div>
            <h3>Enterprise Security</h3>
            <p>Bank-level encryption and SOC 2 Type II certified. Your data is always protected.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
            </div>
            <h3>Real-time Analytics</h3>
            <p>Live dashboards with instant updates. Track metrics that matter.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
            </div>
            <h3>Smart Billing</h3>
            <p>Automated subscriptions and invoicing with Stripe integration.</p>
          </div>
        </div>
      </section>
      
      <section class="stats">
        <div class="stat">
          <div class="stat-number">99.9%</div>
          <div class="stat-label">Uptime</div>
        </div>
        <div class="stat">
          <div class="stat-number">10K+</div>
          <div class="stat-label">Users</div>
        </div>
        <div class="stat">
          <div class="stat-number">$50M+</div>
          <div class="stat-label">Processed</div>
        </div>
        <div class="stat">
          <div class="stat-number">24/7</div>
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
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: ${colors.offWhite}; min-height: 1080px; display: flex; }
        
        .left-panel { flex: 1; background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%); padding: 80px; display: flex; flex-direction: column; justify-content: center; }
        .brand { font-size: 32px; font-weight: 900; color: ${colors.white}; margin-bottom: 60px; }
        .brand span { opacity: 0.9; }
        .left-panel h1 { font-size: 64px; font-weight: 900; color: ${colors.white}; margin-bottom: 32px; letter-spacing: -2px; }
        .left-panel p { font-size: 20px; color: rgba(255,255,255,0.9); line-height: 1.6; margin-bottom: 48px; }
        .feature-list { list-style: none; }
        .feature-list li { padding: 20px 0; display: flex; align-items: center; gap: 20px; font-size: 18px; color: ${colors.white}; font-weight: 600; }
        .check-icon { width: 28px; height: 28px; background: ${colors.white}; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .check-icon svg { width: 16px; height: 16px; fill: ${colors.primary}; }
        
        .right-panel { width: 600px; background: ${colors.white}; padding: 80px; display: flex; flex-direction: column; justify-content: center; }
        .auth-header { margin-bottom: 48px; }
        .auth-header h2 { font-size: 40px; font-weight: 900; color: ${colors.black}; margin-bottom: 12px; }
        .auth-header p { color: ${colors.gray}; font-size: 18px; }
        
        .form-group { margin-bottom: 24px; }
        .form-group label { display: block; font-weight: 700; font-size: 14px; text-transform: uppercase; margin-bottom: 10px; color: ${colors.black}; }
        .form-group input { width: 100%; padding: 18px 20px; border: 2px solid ${colors.lightGray}; border-radius: 12px; font-size: 16px; }
        .form-group input:focus { outline: none; border-color: ${colors.primary}; }
        
        .btn-submit { width: 100%; background: ${colors.primary}; color: ${colors.white}; padding: 20px; border: none; border-radius: 12px; font-size: 18px; font-weight: 800; cursor: pointer; margin-top: 8px; transition: all 0.2s; }
        .btn-submit:hover { background: ${colors.primaryDark}; }
        
        .divider { text-align: center; margin: 40px 0; color: ${colors.gray}; position: relative; font-weight: 600; }
        .divider::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: ${colors.lightGray}; z-index: -1; }
        .divider span { background: ${colors.white}; padding: 0 24px; }
        
        .social-login { display: flex; flex-direction: column; gap: 16px; }
        .btn-social { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 16px; border: 2px solid ${colors.lightGray}; border-radius: 12px; background: ${colors.white}; font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
        .btn-social:hover { border-color: ${colors.black}; }
        .social-icon { width: 24px; height: 24px; }
        
        .footer-text { text-align: center; margin-top: 40px; color: ${colors.gray}; font-size: 16px; }
        .footer-text a { color: ${colors.black}; text-decoration: none; font-weight: 800; }
      </style>
    </head>
    <body>
      <div class="left-panel">
        <div class="brand">SaaS<span>.</span></div>
        <h1>Welcome Back</h1>
        <p>Sign in to access your dashboard and manage your business.</p>
        <ul class="feature-list">
          <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Real-time analytics</li>
          <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Team collaboration</li>
          <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Advanced reporting</li>
        </ul>
      </div>
      
      <div class="right-panel">
        <div class="auth-header">
          <h2>Sign In</h2>
          <p>Enter your credentials to continue</p>
        </div>
        
        <form>
          <div class="form-group">
            <label>Email</label>
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
        
        <p class="footer-text">Don't have an account? <a href="#">Sign up</a></p>
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
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: ${colors.offWhite}; display: flex; min-height: 1080px; }
        
        .sidebar { width: 280px; background: ${colors.white}; padding: 32px 24px; border-right: 1px solid ${colors.lightGray}; }
        .logo { font-size: 26px; font-weight: 900; color: ${colors.black}; margin-bottom: 48px; }
        .logo span { color: ${colors.primary}; }
        .nav-item { display: flex; align-items: center; gap: 16px; padding: 14px 16px; border-radius: 12px; color: ${colors.gray}; text-decoration: none; margin-bottom: 8px; font-weight: 600; font-size: 15px; }
        .nav-item:hover, .nav-item.active { background: ${colors.primary}; color: ${colors.white}; }
        .nav-item svg { width: 22px; height: 22px; fill: currentColor; }
        
        .main { flex: 1; padding: 40px; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .header h1 { font-size: 40px; color: ${colors.black}; font-weight: 900; }
        .user-menu { display: flex; align-items: center; gap: 16px; }
        .user-name { font-weight: 700; }
        .avatar { width: 48px; height: 48px; border-radius: 50%; background: ${colors.primary}; display: flex; align-items: center; justify-content: center; color: ${colors.white}; font-weight: 800; font-size: 20px; }
        
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 32px; }
        .stat-card { background: ${colors.white}; padding: 32px; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
        .stat-label { color: ${colors.gray}; font-size: 13px; font-weight: 700; text-transform: uppercase; margin-bottom: 12px; }
        .stat-value { font-size: 40px; font-weight: 900; color: ${colors.black}; }
        .stat-change { font-size: 14px; margin-top: 12px; font-weight: 600; }
        .stat-change.up { color: ${colors.success}; }
        
        .chart-section { background: ${colors.white}; padding: 40px; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); margin-bottom: 24px; }
        .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .chart-title { font-size: 26px; font-weight: 800; }
        .chart { height: 280px; display: flex; align-items: flex-end; gap: 16px; padding: 20px 0; }
        .bar { flex: 1; background: ${colors.primary}; border-radius: 8px 8px 0 0; }
        
        .activity-section { background: ${colors.white}; padding: 40px; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
        .activity-title { font-size: 26px; font-weight: 800; margin-bottom: 32px; }
        .activity-item { display: flex; align-items: center; gap: 20px; padding: 20px 0; border-bottom: 1px solid ${colors.lightGray}; }
        .activity-icon { width: 52px; height: 52px; border-radius: 14px; background: ${colors.offWhite}; display: flex; align-items: center; justify-content: center; font-size: 26px; }
        .activity-info { flex: 1; }
        .activity-text { font-weight: 700; font-size: 16px; }
        .activity-time { color: ${colors.gray}; font-size: 14px; margin-top: 4px; }
        .activity-amount { font-weight: 800; color: ${colors.success}; font-size: 18px; }
      </style>
    </head>
    <body>
      <aside class="sidebar">
        <div class="logo">SaaS<span>.</span></div>
        <nav>
          <a href="#" class="nav-item active"><svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>Overview</a>
          <a href="#" class="nav-item"><svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>Revenue</a>
          <a href="#" class="nav-item"><svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>Customers</a>
          <a href="#" class="nav-item"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>Analytics</a>
          <a href="#" class="nav-item"><svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>Billing</a>
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
          <div class="stat-card"><div class="stat-label">Revenue</div><div class="stat-value">$24,563</div><div class="stat-change up">↑ 12.5%</div></div>
          <div class="stat-card"><div class="stat-label">Users</div><div class="stat-value">2,453</div><div class="stat-change up">↑ 8.2%</div></div>
          <div class="stat-card"><div class="stat-label">Customers</div><div class="stat-value">184</div><div class="stat-change up">↑ 23.1%</div></div>
          <div class="stat-card"><div class="stat-label">Churn</div><div class="stat-value">2.4%</div><div class="stat-change up">↓ 0.3%</div></div>
        </div>
        
        <section class="chart-section">
          <div class="chart-header"><div class="chart-title">Revenue Overview</div></div>
          <div class="chart">
            <div class="bar" style="height: 40%;"></div><div class="bar" style="height: 65%;"></div><div class="bar" style="height: 55%;"></div>
            <div class="bar" style="height: 80%;"></div><div class="bar" style="height: 70%;"></div><div class="bar" style="height: 90%;"></div>
            <div class="bar" style="height: 85%;"></div><div class="bar" style="height: 95%;"></div><div class="bar" style="height: 75%;"></div>
            <div class="bar" style="height: 100%;"></div><div class="bar" style="height: 88%;"></div><div class="bar" style="height: 92%;"></div>
          </div>
        </section>
        
        <section class="activity-section">
          <div class="activity-title">Recent Activity</div>
          <div class="activity-item"><div class="activity-icon">💳</div><div class="activity-info"><div class="activity-text">New subscription: Pro</div><div class="activity-time">2 min ago</div></div><div class="activity-amount">+$29</div></div>
          <div class="activity-item"><div class="activity-icon">👤</div><div class="activity-info"><div class="activity-text">New user registered</div><div class="activity-time">15 min ago</div></div></div>
          <div class="activity-item"><div class="activity-icon">⬆️</div><div class="activity-info"><div class="activity-text">Upgraded to Enterprise</div><div class="activity-time">1 hour ago</div></div><div class="activity-amount">+$70</div></div>
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: ${colors.offWhite}; min-height: 1080px; padding: 80px; }
        
        .header { text-align: center; margin-bottom: 80px; }
        .header-badge { display: inline-block; background: ${colors.primary}; color: ${colors.white}; padding: 10px 24px; border-radius: 100px; font-weight: 700; font-size: 14px; margin-bottom: 24px; }
        .header h1 { font-size: 64px; font-weight: 900; color: ${colors.black}; margin-bottom: 20px; letter-spacing: -2px; }
        .header p { font-size: 22px; color: ${colors.gray}; max-width: 600px; margin: 0 auto; }
        
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 1400px; margin: 0 auto; }
        
        .pricing-card { background: ${colors.white}; border-radius: 24px; padding: 48px 40px; position: relative; transition: all 0.3s; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
        .pricing-card:hover { transform: translateY(-12px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        .pricing-card.popular { box-shadow: 0 8px 24px rgba(255, 107, 53, 0.2); border: 2px solid ${colors.primary}; }
        
        .popular-badge { position: absolute; top: -16px; left: 50%; transform: translateX(-50%); background: ${colors.primary}; color: ${colors.white}; padding: 8px 24px; border-radius: 100px; font-weight: 700; font-size: 13px; }
        
        .plan-name { font-size: 20px; font-weight: 700; color: ${colors.gray}; margin-bottom: 16px; text-transform: uppercase; }
        .plan-price { font-size: 80px; font-weight: 900; color: ${colors.black}; margin-bottom: 8px; letter-spacing: -3px; }
        .plan-price span { font-size: 24px; color: ${colors.gray}; font-weight: 500; }
        .plan-desc { color: ${colors.gray}; margin-bottom: 40px; font-size: 16px; }
        
        .features-list { list-style: none; margin-bottom: 40px; }
        .features-list li { padding: 16px 0; border-bottom: 1px solid ${colors.lightGray}; display: flex; align-items: center; gap: 16px; font-size: 16px; font-weight: 500; }
        .features-list li:last-child { border-bottom: none; }
        .check-icon { width: 24px; height: 24px; background: ${colors.success}; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .check-icon svg { width: 14px; height: 14px; fill: white; }
        .features-list li.disabled { opacity: 0.4; }
        .features-list li.disabled .check-icon { background: ${colors.lightGray}; }
        
        .btn-plan { width: 100%; padding: 18px; border-radius: 100px; font-size: 17px; font-weight: 800; cursor: pointer; border: none; transition: all 0.2s; }
        .btn-plan.primary { background: ${colors.primary}; color: ${colors.white}; }
        .btn-plan.primary:hover { background: ${colors.primaryDark}; }
        .btn-plan.secondary { background: ${colors.offWhite}; color: ${colors.black}; border: 2px solid ${colors.lightGray}; }
        .btn-plan.secondary:hover { border-color: ${colors.black}; }
        
        .trust-badge { text-align: center; margin-top: 60px; color: ${colors.gray}; font-size: 15px; }
      </style>
    </head>
    <body>
      <div class="header">
        <span class="header-badge">✨ 14-Day Free Trial</span>
        <h1>Simple Pricing</h1>
        <p>Choose the plan that fits your business.</p>
      </div>
      
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="plan-name">Free</div>
          <div class="plan-price">$0<span>/mo</span></div>
          <div class="plan-desc">Perfect for side projects.</div>
          <ul class="features-list">
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>1K events/month</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>1 team member</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Basic analytics</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Email support</li>
            <li class="disabled"><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Custom reports</li>
          </ul>
          <button class="btn-plan secondary">Start Free</button>
        </div>
        
        <div class="pricing-card popular">
          <div class="popular-badge">Most Popular</div>
          <div class="plan-name">Pro</div>
          <div class="plan-price">$29<span>/mo</span></div>
          <div class="plan-desc">For growing businesses.</div>
          <ul class="features-list">
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>100K events/month</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>5 team members</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Advanced analytics</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Priority support</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Custom reports</li>
          </ul>
          <button class="btn-plan primary">Start Pro Trial</button>
        </div>
        
        <div class="pricing-card">
          <div class="plan-name">Enterprise</div>
          <div class="plan-price">$99<span>/mo</span></div>
          <div class="plan-desc">For large organizations.</div>
          <ul class="features-list">
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Unlimited events</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Unlimited team</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Advanced analytics</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>24/7 support</li>
            <li><div class="check-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>Custom integrations</li>
          </ul>
          <button class="btn-plan secondary">Contact Sales</button>
        </div>
      </div>
      
      <div class="trust-badge">💳 Secure payments by Stripe • Cancel anytime</div>
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: ${colors.offWhite}; min-height: 1080px; padding: 40px; }
        
        .container { max-width: 1200px; margin: 0 auto; }
        .header { margin-bottom: 40px; }
        .header h1 { font-size: 42px; color: ${colors.black}; font-weight: 900; margin-bottom: 8px; }
        .header p { color: ${colors.gray}; font-size: 18px; }
        
        .billing-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 32px; }
        
        .card { background: ${colors.white}; border-radius: 20px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); margin-bottom: 32px; }
        .card-title { font-size: 28px; font-weight: 800; color: ${colors.black}; margin-bottom: 32px; }
        
        .current-plan { display: flex; justify-content: space-between; align-items: center; padding: 40px; background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%); border-radius: 16px; color: ${colors.white}; margin-bottom: 32px; }
        .plan-info h3 { font-size: 32px; margin-bottom: 12px; font-weight: 900; }
        .plan-info p { opacity: 0.9; font-size: 16px; }
        .plan-actions { text-align: right; }
        .btn-outline { background: transparent; border: 2px solid rgba(255,255,255,0.5); color: ${colors.white}; padding: 14px 32px; border-radius: 100px; font-weight: 700; cursor: pointer; }
        .btn-outline:hover { border-color: ${colors.white}; }
        
        .payment-method { display: flex; align-items: center; gap: 24px; padding: 24px; background: ${colors.white}; border: 2px solid ${colors.lightGray}; border-radius: 14px; }
        .card-icon { width: 64px; height: 42px; background: linear-gradient(135deg, #1a1f71, #00a8e1); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 16px; }
        .card-details { flex: 1; }
        .card-number { font-size: 20px; font-weight: 800; letter-spacing: 1px; }
        .card-expiry { color: ${colors.gray}; font-size: 14px; margin-top: 4px; }
        .btn-update { padding: 12px 28px; border: 2px solid ${colors.lightGray}; color: ${colors.black}; background: ${colors.white}; border-radius: 100px; font-weight: 700; cursor: pointer; }
        .btn-update:hover { border-color: ${colors.black}; }
        
        .invoice-table { width: 100%; border-collapse: collapse; }
        .invoice-table th { text-align: left; padding: 16px; color: ${colors.gray}; font-weight: 700; font-size: 13px; border-bottom: 2px solid ${colors.lightGray}; }
        .invoice-table td { padding: 20px 16px; border-bottom: 1px solid ${colors.lightGray}; font-size: 15px; }
        .status-badge { padding: 6px 16px; border-radius: 100px; font-size: 13px; font-weight: 800; }
        .status-paid { background: #d1fae5; color: #065f46; }
        .status-pending { background: #fef3c7; color: #92400e; }
        .btn-download { color: ${colors.primary}; text-decoration: none; font-weight: 700; }
        
        .upgrade-cta { background: ${colors.primary}; color: ${colors.white}; padding: 40px 32px; border-radius: 16px; margin-bottom: 24px; text-align: center; }
        .upgrade-cta h3 { font-size: 28px; margin-bottom: 16px; font-weight: 900; }
        .upgrade-cta p { opacity: 0.95; margin-bottom: 28px; font-size: 15px; }
        .btn-white { background: ${colors.white}; color: ${colors.primary}; padding: 16px 32px; border: none; border-radius: 100px; font-weight: 800; cursor: pointer; width: 100%; }
        
        .usage-card { background: ${colors.white}; padding: 32px; border-radius: 14px; border: 2px solid ${colors.lightGray}; }
        .usage-label { color: ${colors.gray}; font-size: 13px; font-weight: 700; margin-bottom: 16px; text-transform: uppercase; }
        .usage-bar { height: 10px; background: ${colors.lightGray}; border-radius: 10px; overflow: hidden; margin-bottom: 12px; }
        .usage-fill { height: 100%; background: ${colors.primary}; border-radius: 10px; }
        .usage-text { font-size: 14px; color: ${colors.gray}; font-weight: 600; }
        .usage-text.success { color: ${colors.success}; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Billing & Subscription</h1>
          <p>Manage your plan and payment methods.</p>
        </div>
        
        <div class="billing-grid">
          <div class="main-content">
            <div class="card">
              <h2 class="card-title">Current Plan</h2>
              <div class="current-plan">
                <div class="plan-info"><h3>Pro Plan</h3><p>$29/month • Next billing: April 6, 2026</p></div>
                <div class="plan-actions"><button class="btn-outline">Upgrade</button></div>
              </div>
              
              <h3 style="margin-bottom: 20px; font-size: 18px;">Payment Method</h3>
              <div class="payment-method">
                <div class="card-icon">VISA</div>
                <div class="card-details"><div class="card-number">•••• •••• •••• 4242</div><div class="card-expiry">Expires 12/2027</div></div>
                <button class="btn-update">Update</button>
              </div>
            </div>
            
            <div class="card">
              <h2 class="card-title">Invoice History</h2>
              <table class="invoice-table">
                <thead><tr><th>Invoice</th><th>Date</th><th>Amount</th><th>Status</th><th></th></tr></thead>
                <tbody>
                  <tr><td><strong>#INV-2026-003</strong></td><td>Mar 6, 2026</td><td><strong>$29.00</strong></td><td><span class="status-badge status-paid">Paid</span></td><td><a href="#" class="btn-download">Download</a></td></tr>
                  <tr><td><strong>#INV-2026-002</strong></td><td>Feb 6, 2026</td><td><strong>$29.00</strong></td><td><span class="status-badge status-paid">Paid</span></td><td><a href="#" class="btn-download">Download</a></td></tr>
                  <tr><td><strong>#INV-2026-001</strong></td><td>Jan 6, 2026</td><td><strong>$29.00</strong></td><td><span class="status-badge status-paid">Paid</span></td><td><a href="#" class="btn-download">Download</a></td></tr>
                  <tr><td><strong>#INV-2025-012</strong></td><td>Dec 6, 2025</td><td><strong>$29.00</strong></td><td><span class="status-badge status-pending">Pending</span></td><td><a href="#" class="btn-download">Download</a></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="sidebar">
            <div class="upgrade-cta">
              <h3>🚀 Go Enterprise</h3>
              <p>Unlimited events, dedicated support, custom integrations.</p>
              <button class="btn-white">Contact Sales</button>
            </div>
            
            <div class="usage-card">
              <div class="usage-label">Monthly Usage</div>
              <div class="usage-bar"><div class="usage-fill" style="width: 68%;"></div></div>
              <div class="usage-text">68,432 / 100,000 events</div>
              <div class="usage-text success">✓ Within limits</div>
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

console.log('✨ Coral Orange screenshot generator ready');
