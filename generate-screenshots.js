const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('🚀 Generating realistic page screenshots...\n');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const outputDir = path.join(__dirname, 'docs', 'screenshots');

  // Homepage - Hero + Features + CTA
  console.log('📸 01-homepage.png - Landing page with hero section');
  await generateHomepage(browser, outputDir);

  // Sign In - Login form
  console.log('📸 02-signin.png - Authentication form');
  await generateSignIn(browser, outputDir);

  // Dashboard - Analytics with charts
  console.log('📸 03-dashboard.png - Analytics dashboard');
  await generateDashboard(browser, outputDir);

  // Pricing - Three tier cards
  console.log('📸 04-pricing.png - Pricing plans comparison');
  await generatePricing(browser, outputDir);

  // Billing - Subscription management
  console.log('📸 05-billing.png - Billing & subscription');
  await generateBilling(browser, outputDir);

  await browser.close();
  console.log('\n✨ All screenshots generated!');
})();

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
        
        /* Navigation */
        nav { display: flex; justify-content: space-between; align-items: center; padding: 20px 80px; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .logo { font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .nav-links { display: flex; gap: 40px; }
        .nav-links a { text-decoration: none; color: #666; font-weight: 500; }
        .btn-primary { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; }
        
        /* Hero */
        .hero { text-align: center; padding: 120px 80px; background: linear-gradient(135deg, #f5f7fa, #e4e8ec); }
        .hero h1 { font-size: 72px; font-weight: 800; margin-bottom: 30px; color: #1a1a1a; letter-spacing: -2px; }
        .hero h1 span { background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero p { font-size: 28px; color: #666; max-width: 800px; margin: 0 auto 50px; line-height: 1.6; }
        .hero-buttons { display: flex; gap: 20px; justify-content: center; }
        .btn-large { padding: 18px 48px; font-size: 20px; border-radius: 12px; }
        .btn-secondary { background: white; color: #667eea; border: 2px solid #667eea; }
        
        /* Features */
        .features { padding: 100px 80px; background: white; }
        .features h2 { text-align: center; font-size: 48px; margin-bottom: 80px; color: #1a1a1a; }
        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .feature-card { padding: 40px; border-radius: 16px; background: #f8f9fa; }
        .feature-icon { font-size: 48px; margin-bottom: 20px; }
        .feature-card h3 { font-size: 24px; margin-bottom: 15px; color: #1a1a1a; }
        .feature-card p { color: #666; line-height: 1.6; }
        
        /* Stats */
        .stats { display: flex; justify-content: space-around; padding: 80px; background: linear-gradient(135deg, #667eea, #764ba2); }
        .stat { text-align: center; color: white; }
        .stat-number { font-size: 64px; font-weight: 800; }
        .stat-label { font-size: 20px; opacity: 0.9; }
      </style>
    </head>
    <body>
      <nav>
        <div class="logo">📊 SaaS Dashboard</div>
        <div class="nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#" class="btn-primary">Get Started</a>
        </div>
      </nav>
      
      <section class="hero">
        <h1>Build Beautiful <span>Data Dashboards</span></h1>
        <p>Professional SaaS analytics platform with real-time data visualization, user management, and subscription billing.</p>
        <div class="hero-buttons">
          <a href="#" class="btn-primary btn-large">Start Free Trial →</a>
          <a href="#" class="btn-secondary btn-large">View Demo</a>
        </div>
      </section>
      
      <section class="features">
        <h2>Everything You Need</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🔐</div>
            <h3>Secure Authentication</h3>
            <p>Clerk integration with social login, password reset, and protected routes out of the box.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💳</div>
            <h3>Stripe Payments</h3>
            <p>Complete subscription billing with three pricing tiers and customer portal.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Real-time Analytics</h3>
            <p>Beautiful charts and metrics powered by Recharts with live data updates.</p>
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #667eea, #764ba2); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
        
        .container { display: flex; width: 100%; max-width: 1200px; gap: 80px; padding: 80px; }
        
        .left-panel { flex: 1; color: white; }
        .left-panel h1 { font-size: 56px; font-weight: 800; margin-bottom: 30px; line-height: 1.2; }
        .left-panel p { font-size: 20px; opacity: 0.9; line-height: 1.6; margin-bottom: 40px; }
        .features-list { list-style: none; }
        .features-list li { padding: 15px 0; display: flex; align-items: center; gap: 15px; font-size: 18px; }
        .features-list li::before { content: '✓'; font-weight: 800; }
        
        .right-panel { flex: 1; }
        .auth-card { background: white; padding: 60px; border-radius: 24px; box-shadow: 0 30px 80px rgba(0,0,0,0.2); }
        .auth-card h2 { font-size: 36px; margin-bottom: 10px; color: #1a1a1a; }
        .auth-card p { color: #666; margin-bottom: 40px; }
        
        .form-group { margin-bottom: 24px; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 8px; color: #333; }
        .form-group input { width: 100%; padding: 16px; border: 2px solid #e0e0e0; border-radius: 12px; font-size: 16px; transition: border-color 0.2s; }
        .form-group input:focus { outline: none; border-color: #667eea; }
        
        .btn-submit { width: 100%; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 18px; border: none; border-radius: 12px; font-size: 18px; font-weight: 600; cursor: pointer; margin-top: 10px; }
        
        .divider { text-align: center; margin: 30px 0; color: #999; position: relative; }
        .divider::before { content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: #e0e0e0; z-index: -1; }
        .divider span { background: white; padding: 0 20px; }
        
        .social-login { display: flex; flex-direction: column; gap: 12px; }
        .btn-social { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 14px; border: 2px solid #e0e0e0; border-radius: 12px; background: white; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .btn-social:hover { border-color: #667eea; }
        
        .footer-text { text-align: center; margin-top: 30px; color: #666; }
        .footer-text a { color: #667eea; text-decoration: none; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="left-panel">
          <h1>Welcome Back!</h1>
          <p>Sign in to access your dashboard and manage your SaaS business.</p>
          <ul class="features-list">
            <li>Real-time analytics dashboard</li>
            <li>Subscription management</li>
            <li>Team collaboration tools</li>
            <li>Export and reporting</li>
          </ul>
        </div>
        
        <div class="right-panel">
          <div class="auth-card">
            <h2>Sign In</h2>
            <p>Enter your credentials to continue</p>
            
            <form>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" value="demo@example.com">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" value="demo123456">
              </div>
              <button type="button" class="btn-submit">Sign In →</button>
            </form>
            
            <div class="divider"><span>or continue with</span></div>
            
            <div class="social-login">
              <button class="btn-social">
                <span style="font-size: 20px;">🔵</span> Continue with Google
              </button>
              <button class="btn-social">
                <span style="font-size: 20px;">⚫</span> Continue with GitHub
              </button>
            </div>
            
            <p class="footer-text">
              Don't have an account? <a href="#">Sign up for free</a>
            </p>
          </div>
        </div>
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f7fa; display: flex; min-height: 1080px; }
        
        /* Sidebar */
        .sidebar { width: 280px; background: white; padding: 30px; border-right: 1px solid #e0e0e0; }
        .logo { font-size: 24px; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 40px; }
        .nav-item { display: flex; align-items: center; gap: 15px; padding: 15px; border-radius: 12px; color: #666; text-decoration: none; margin-bottom: 8px; transition: all 0.2s; }
        .nav-item:hover, .nav-item.active { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
        .nav-item span { font-size: 20px; }
        
        /* Main Content */
        .main { flex: 1; padding: 40px; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .header h1 { font-size: 36px; color: #1a1a1a; }
        .user-menu { display: flex; align-items: center; gap: 15px; }
        .avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; }
        
        /* Stats Grid */
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 40px; }
        .stat-card { background: white; padding: 30px; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .stat-label { color: #666; font-size: 14px; margin-bottom: 10px; }
        .stat-value { font-size: 36px; font-weight: 800; color: #1a1a1a; }
        .stat-change { font-size: 14px; margin-top: 10px; }
        .stat-change.up { color: #10b981; }
        .stat-change.down { color: #ef4444; }
        
        /* Chart Section */
        .chart-section { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); margin-bottom: 24px; }
        .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .chart-title { font-size: 24px; font-weight: 700; }
        .chart-legend { display: flex; gap: 30px; }
        .legend-item { display: flex; align-items: center; gap: 10px; }
        .legend-dot { width: 12px; height: 12px; border-radius: 50%; }
        
        /* Fake Chart */
        .chart { height: 300px; display: flex; align-items: flex-end; gap: 20px; padding: 20px 0; border-bottom: 2px solid #e0e0e0; }
        .bar { flex: 1; background: linear-gradient(to top, #667eea, #764ba2); border-radius: 8px 8px 0 0; position: relative; }
        .bar:hover { opacity: 0.8; }
        
        /* Recent Activity */
        .activity-section { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .activity-title { font-size: 24px; font-weight: 700; margin-bottom: 30px; }
        .activity-item { display: flex; align-items: center; gap: 20px; padding: 20px 0; border-bottom: 1px solid #f0f0f0; }
        .activity-icon { width: 48px; height: 48px; border-radius: 12px; background: #f5f7fa; display: flex; align-items: center; justify-content: center; font-size: 24px; }
        .activity-info { flex: 1; }
        .activity-text { font-weight: 600; color: #1a1a1a; }
        .activity-time { color: #999; font-size: 14px; }
        .activity-amount { font-weight: 700; color: #10b981; }
      </style>
    </head>
    <body>
      <aside class="sidebar">
        <div class="logo">📊 Dashboard</div>
        <nav>
          <a href="#" class="nav-item active"><span>📊</span> Overview</a>
          <a href="#" class="nav-item"><span>💰</span> Revenue</a>
          <a href="#" class="nav-item"><span>👥</span> Customers</a>
          <a href="#" class="nav-item"><span>📈</span> Analytics</a>
          <a href="#" class="nav-item"><span>💳</span> Billing</a>
          <a href="#" class="nav-item"><span>⚙️</span> Settings</a>
        </nav>
      </aside>
      
      <main class="main">
        <div class="header">
          <h1>Dashboard Overview</h1>
          <div class="user-menu">
            <span>Welcome, Demo User</span>
            <div class="avatar">D</div>
          </div>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-label">Total Revenue</div>
            <div class="stat-value">$24,563</div>
            <div class="stat-change up">↑ 12.5% from last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Active Users</div>
            <div class="stat-value">2,453</div>
            <div class="stat-change up">↑ 8.2% from last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">New Customers</div>
            <div class="stat-value">184</div>
            <div class="stat-change up">↑ 23.1% from last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Churn Rate</div>
            <div class="stat-value">2.4%</div>
            <div class="stat-change down">↓ 0.3% from last month</div>
          </div>
        </div>
        
        <section class="chart-section">
          <div class="chart-header">
            <div class="chart-title">Revenue Overview</div>
            <div class="chart-legend">
              <div class="legend-item"><div class="legend-dot" style="background: #667eea;"></div> This Month</div>
              <div class="legend-item"><div class="legend-dot" style="background: #ccc;"></div> Last Month</div>
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
            <div class="activity-icon">💳</div>
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #f5f7fa, #e4e8ec); min-height: 1080px; padding: 80px; }
        
        .header { text-align: center; margin-bottom: 80px; }
        .header h1 { font-size: 56px; font-weight: 800; color: #1a1a1a; margin-bottom: 20px; }
        .header p { font-size: 24px; color: #666; max-width: 600px; margin: 0 auto; }
        
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; max-width: 1400px; margin: 0 auto; }
        
        .pricing-card { background: white; border-radius: 24px; padding: 50px 40px; position: relative; transition: transform 0.3s; }
        .pricing-card:hover { transform: translateY(-10px); }
        .pricing-card.popular { box-shadow: 0 30px 80px rgba(102, 126, 234, 0.2); border: 3px solid #667eea; }
        
        .popular-badge { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 8px 24px; border-radius: 50px; font-weight: 700; font-size: 14px; }
        
        .plan-name { font-size: 24px; font-weight: 700; color: #666; margin-bottom: 20px; }
        .plan-price { font-size: 72px; font-weight: 800; color: #1a1a1a; margin-bottom: 10px; }
        .plan-price span { font-size: 24px; color: #999; font-weight: 400; }
        .plan-desc { color: #666; margin-bottom: 40px; line-height: 1.6; }
        
        .features-list { list-style: none; margin-bottom: 40px; }
        .features-list li { padding: 15px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center; gap: 15px; }
        .features-list li::before { content: '✓'; color: #10b981; font-weight: 800; font-size: 20px; }
        .features-list li.disabled { opacity: 0.5; }
        .features-list li.disabled::before { content: '✗'; color: #999; }
        
        .btn-plan { width: 100%; padding: 18px; border-radius: 12px; font-size: 18px; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s; }
        .btn-plan.primary { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
        .btn-plan.secondary { background: #f5f7fa; color: #667eea; }
        
        .trust-badge { text-align: center; margin-top: 80px; color: #999; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the plan that's right for your business. All plans include a 14-day free trial.</p>
      </div>
      
      <div class="pricing-grid">
        <!-- Free Plan -->
        <div class="pricing-card">
          <div class="plan-name">Free</div>
          <div class="plan-price">$0<span>/month</span></div>
          <div class="plan-desc">Perfect for getting started with basic analytics.</div>
          <ul class="features-list">
            <li>Up to 1,000 events/month</li>
            <li>1 team member</li>
            <li>Basic analytics</li>
            <li>Email support</li>
            <li class="disabled">Custom reports</li>
            <li class="disabled">API access</li>
            <li class="disabled">Priority support</li>
          </ul>
          <button class="btn-plan secondary">Start Free</button>
        </div>
        
        <!-- Pro Plan -->
        <div class="pricing-card popular">
          <div class="popular-badge">MOST POPULAR</div>
          <div class="plan-name">Pro</div>
          <div class="plan-price">$29<span>/month</span></div>
          <div class="plan-desc">For growing businesses that need advanced features.</div>
          <ul class="features-list">
            <li>Up to 100,000 events/month</li>
            <li>5 team members</li>
            <li>Advanced analytics</li>
            <li>Priority email support</li>
            <li>Custom reports</li>
            <li>API access</li>
            <li class="disabled">Dedicated support</li>
          </ul>
          <button class="btn-plan primary">Start Pro Trial</button>
        </div>
        
        <!-- Enterprise Plan -->
        <div class="pricing-card">
          <div class="plan-name">Enterprise</div>
          <div class="plan-price">$99<span>/month</span></div>
          <div class="plan-desc">For large organizations with custom needs.</div>
          <ul class="features-list">
            <li>Unlimited events</li>
            <li>Unlimited team members</li>
            <li>Advanced analytics</li>
            <li>24/7 dedicated support</li>
            <li>Custom reports</li>
            <li>API access</li>
            <li>Custom integrations</li>
          </ul>
          <button class="btn-plan secondary">Contact Sales</button>
        </div>
      </div>
      
      <div class="trust-badge">
        <p>💳 Secure payments powered by Stripe • Cancel anytime • No hidden fees</p>
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
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f7fa; min-height: 1080px; padding: 40px; }
        
        .container { max-width: 1200px; margin: 0 auto; }
        .header { margin-bottom: 40px; }
        .header h1 { font-size: 36px; color: #1a1a1a; margin-bottom: 10px; }
        .header p { color: #666; }
        
        .billing-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }
        
        .card { background: white; border-radius: 16px; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); margin-bottom: 30px; }
        .card-title { font-size: 24px; font-weight: 700; margin-bottom: 30px; display: flex; align-items: center; gap: 15px; }
        
        .current-plan { display: flex; justify-content: space-between; align-items: center; padding: 30px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 12px; color: white; margin-bottom: 30px; }
        .plan-info h3 { font-size: 28px; margin-bottom: 10px; }
        .plan-info p { opacity: 0.9; }
        .plan-actions { text-align: right; }
        .btn-outline { background: transparent; border: 2px solid white; color: white; padding: 12px 32px; border-radius: 8px; font-weight: 600; cursor: pointer; }
        
        .payment-method { display: flex; align-items: center; gap: 20px; padding: 20px; background: #f8f9fa; border-radius: 12px; }
        .card-icon { width: 60px; height: 40px; background: linear-gradient(135deg, #1a1f71, #00a8e1); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 14px; }
        .card-details { flex: 1; }
        .card-number { font-size: 18px; font-weight: 600; color: #1a1a1a; }
        .card-expiry { color: #666; font-size: 14px; }
        .btn-update { padding: 10px 24px; border: 2px solid #667eea; color: #667eea; background: white; border-radius: 8px; font-weight: 600; cursor: pointer; }
        
        .invoice-table { width: 100%; border-collapse: collapse; }
        .invoice-table th { text-align: left; padding: 15px; color: #666; font-weight: 600; border-bottom: 2px solid #e0e0e0; }
        .invoice-table td { padding: 20px 15px; border-bottom: 1px solid #f0f0f0; }
        .status-badge { padding: 6px 16px; border-radius: 50px; font-size: 14px; font-weight: 600; }
        .status-paid { background: #d1fae5; color: #065f46; }
        .status-pending { background: #fef3c7; color: #92400e; }
        .btn-download { color: #667eea; text-decoration: none; font-weight: 600; }
        
        .sidebar-card { text-align: center; }
        .upgrade-cta { background: linear-gradient(135deg, #f093fb, #f5576c); color: white; padding: 40px 30px; border-radius: 16px; margin-bottom: 30px; }
        .upgrade-cta h3 { font-size: 24px; margin-bottom: 15px; }
        .upgrade-cta p { opacity: 0.9; margin-bottom: 25px; line-height: 1.6; }
        .btn-white { background: white; color: #f5576c; padding: 14px 32px; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; width: 100%; }
        
        .usage-card { background: #f8f9fa; padding: 30px; border-radius: 12px; }
        .usage-label { color: #666; font-size: 14px; margin-bottom: 15px; }
        .usage-bar { height: 12px; background: #e0e0e0; border-radius: 6px; overflow: hidden; margin-bottom: 10px; }
        .usage-fill { height: 100%; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 6px; }
        .usage-text { font-size: 14px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Billing & Subscription</h1>
          <p>Manage your subscription, payment methods, and billing history.</p>
        </div>
        
        <div class="billing-grid">
          <div class="main-content">
            <!-- Current Plan -->
            <div class="card">
              <h2 class="card-title">💳 Current Plan</h2>
              <div class="current-plan">
                <div class="plan-info">
                  <h3>Pro Plan</h3>
                  <p>$29/month • Next billing: April 6, 2026</p>
                </div>
                <div class="plan-actions">
                  <button class="btn-outline">Upgrade Plan</button>
                </div>
              </div>
              
              <h3 style="margin-bottom: 20px; font-size: 20px;">Payment Method</h3>
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
              <h2 class="card-title">📄 Invoice History</h2>
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
                    <td>#INV-2026-003</td>
                    <td>Mar 6, 2026</td>
                    <td>$29.00</td>
                    <td><span class="status-badge status-paid">Paid</span></td>
                    <td><a href="#" class="btn-download">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td>#INV-2026-002</td>
                    <td>Feb 6, 2026</td>
                    <td>$29.00</td>
                    <td><span class="status-badge status-paid">Paid</span></td>
                    <td><a href="#" class="btn-download">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td>#INV-2026-001</td>
                    <td>Jan 6, 2026</td>
                    <td>$29.00</td>
                    <td><span class="status-badge status-paid">Paid</span></td>
                    <td><a href="#" class="btn-download">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td>#INV-2025-012</td>
                    <td>Dec 6, 2025</td>
                    <td>$29.00</td>
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
              <h3>🚀 Upgrade to Enterprise</h3>
              <p>Get unlimited events, dedicated support, and custom integrations.</p>
              <button class="btn-white">Contact Sales</button>
            </div>
            
            <!-- Usage -->
            <div class="usage-card">
              <div class="usage-label">Monthly Usage</div>
              <div class="usage-bar">
                <div class="usage-fill" style="width: 68%;"></div>
              </div>
              <div class="usage-text">68,432 / 100,000 events used</div>
              <div class="usage-text" style="margin-top: 10px; color: #10b981;">✓ Within plan limits</div>
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

console.log('✨ Screenshot generation script loaded');
