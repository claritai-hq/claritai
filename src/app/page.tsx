import Link from 'next/link'
export default function Home() {
  return (
    <div style={{background:'#0a0a0f',color:'#f8fafc',minHeight:'100vh',fontFamily:'Inter,system-ui,sans-serif'}}>
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 32px',maxWidth:'1152px',margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <div style={{background:'#3b82f6',borderRadius:'8px',width:'32px',height:'32px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{color:'white',fontWeight:'bold',fontSize:'14px'}}>C</span>
          </div>
          <span style={{fontSize:'18px',fontWeight:'700',color:'white'}}>Claritai</span>
        </div>
        <div style={{display:'flex',gap:'16px',alignItems:'center'}}>
          <Link href="/auth/login" style={{fontSize:'14px',color:'#64748b',textDecoration:'none'}}>Sign in</Link>
          <Link href="/auth/signup" style={{padding:'8px 16px',background:'#3b82f6',borderRadius:'8px',fontSize:'14px',fontWeight:'600',color:'white',textDecoration:'none'}}>Get started free</Link>
        </div>
      </nav>

      <section style={{padding:'96px 32px 80px',textAlign:'center',maxWidth:'896px',margin:'0 auto'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 12px',borderRadius:'999px',background:'#3b82f618',border:'1px solid #3b82f630',fontSize:'12px',fontWeight:'500',color:'#3b82f6',marginBottom:'32px'}}>
          <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#60a5fa',display:'inline-block'}}/>
          Now in open beta — free forever
        </div>
        <h1 style={{fontSize:'48px',fontWeight:'700',lineHeight:'1.1',color:'white',marginBottom:'24px'}}>
          See every dollar your team<br/><span style={{color:'#3b82f6'}}>spends on AI.</span>
        </h1>
        <p style={{fontSize:'18px',color:'#64748b',marginBottom:'40px',maxWidth:'560px',margin:'0 auto 40px'}}>
          Before the invoice lands. Real-time tracking, per-person attribution, and cost-saving recommendations.
        </p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center'}}>
          <Link href="/auth/signup" style={{padding:'12px 24px',background:'#3b82f6',borderRadius:'12px',fontSize:'16px',fontWeight:'600',color:'white',textDecoration:'none'}}>Start for free →</Link>
          <Link href="/dashboard" style={{padding:'12px 24px',border:'1px solid #1e1e2e',borderRadius:'12px',fontSize:'16px',fontWeight:'600',color:'#94a3b8',textDecoration:'none'}}>View demo</Link>
        </div>
        <p style={{fontSize:'14px',color:'#64748b',marginTop:'20px'}}>No credit card required</p>
      </section>

      <section style={{padding:'0 32px 80px',maxWidth:'1152px',margin:'0 auto'}}>
        <div style={{borderRadius:'16px',overflow:'hidden',border:'1px solid #1e1e2e',background:'#12121a'}}>
          <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'12px 16px',borderBottom:'1px solid #1e1e2e',background:'#0d0d14'}}>
            <div style={{display:'flex',gap:'6px'}}>
              <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#ef4444'}}/>
              <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#f59e0b'}}/>
              <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#22c55e'}}/>
            </div>
            <div style={{flex:1,background:'#0a0a0f',borderRadius:'4px',padding:'4px 12px',fontSize:'12px',color:'#64748b',textAlign:'center'}}>app.claritai.com/dashboard</div>
          </div>
          <div style={{padding:'24px'}}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px',marginBottom:'20px'}}>
              {[['This Month','$3,840','+12%'],['Daily Avg','$128','+5%'],['Top Provider','OpenAI','62%'],['Active Users','8','+2']].map(([l,v,c])=>(
                <div key={l} style={{borderRadius:'12px',padding:'16px',background:'#0d0d14',border:'1px solid #1e1e2e'}}>
                  <p style={{fontSize:'12px',color:'#64748b',marginBottom:'8px'}}>{l}</p>
                  <p style={{fontSize:'20px',fontWeight:'700',color:'white'}}>{v}</p>
                  <p style={{fontSize:'12px',color:'#22c55e',marginTop:'4px'}}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 32px',maxWidth:'1152px',margin:'0 auto'}}>
        <h2 style={{fontSize:'30px',fontWeight:'700',color:'white',textAlign:'center',marginBottom:'16px'}}>Everything you need to control AI costs</h2>
        <p style={{textAlign:'center',color:'#64748b',marginBottom:'64px'}}>Built for teams that use AI seriously.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
          {[
            ['📊','Real-time tracking','Sync with OpenAI, Anthropic, and Gemini. See spend update live, not at end-of-month.','#3b82f6'],
            ['👥','Per-person attribution','Know who spent what. Sarah ran a $300 Claude job Tuesday. You know within the hour.','#8b5cf6'],
            ['💡','Cost optimization','Automatic recommendations: switch to GPT-4o-mini here, save $240/mo at 95% quality.','#22c55e'],
          ].map(([icon,title,desc,color])=>(
            <div key={title} style={{borderRadius:'12px',padding:'24px',background:'#12121a',border:'1px solid #1e1e2e'}}>
              <div style={{width:'44px',height:'44px',borderRadius:'12px',background:color+'18',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',marginBottom:'20px'}}>{icon}</div>
              <h3 style={{fontSize:'14px',fontWeight:'600',color:'white',marginBottom:'8px'}}>{title}</h3>
              <p style={{fontSize:'14px',color:'#64748b',lineHeight:'1.6'}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'80px 32px',maxWidth:'768px',margin:'0 auto',textAlign:'center'}}>
        <h2 style={{fontSize:'30px',fontWeight:'700',color:'white',marginBottom:'48px'}}>Simple pricing</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
          <div style={{borderRadius:'16px',padding:'32px',background:'#12121a',border:'2px solid #3b82f6',textAlign:'left'}}>
            <p style={{fontSize:'14px',fontWeight:'500',color:'#3b82f6'}}>Free</p>
            <p style={{fontSize:'36px',fontWeight:'700',color:'white',marginTop:'4px'}}>$0</p>
            <ul style={{listStyle:'none',margin:'24px 0',padding:0,display:'flex',flexDirection:'column',gap:'12px'}}>
              {['1 user','2 integrations','30-day history','Email alerts','Cost insights'].map(f=>(
                <li key={f} style={{fontSize:'14px',color:'white',display:'flex',alignItems:'center',gap:'8px'}}>✅ {f}</li>
              ))}
            </ul>
            <Link href="/auth/signup" style={{display:'block',padding:'12px',background:'#3b82f6',borderRadius:'12px',fontSize:'14px',fontWeight:'600',color:'white',textDecoration:'none',textAlign:'center'}}>Get started free</Link>
          </div>
          <div style={{borderRadius:'16px',padding:'32px',background:'#12121a',border:'1px solid #1e1e2e',textAlign:'left'}}>
            <p style={{fontSize:'14px',fontWeight:'500',color:'#64748b'}}>Pro</p>
            <p style={{fontSize:'36px',fontWeight:'700',color:'white',marginTop:'4px'}}>TBD</p>
            <ul style={{listStyle:'none',margin:'24px 0',padding:0,display:'flex',flexDirection:'column',gap:'12px'}}>
              {['Unlimited users','All integrations','1-year history','Slack alerts','Priority support'].map(f=>(
                <li key={f} style={{fontSize:'14px',color:'#64748b',display:'flex',alignItems:'center',gap:'8px'}}>○ {f}</li>
              ))}
            </ul>
            <button disabled style={{width:'100%',padding:'12px',background:'#1e1e2e',borderRadius:'12px',fontSize:'14px',color:'#64748b',border:'none',cursor:'not-allowed'}}>Coming soon</button>
          </div>
        </div>
      </section>

      <footer style={{padding:'32px',borderTop:'1px solid #1e1e2e',display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:'1152px',margin:'0 auto'}}>
        <span style={{fontSize:'14px',fontWeight:'700',color:'white'}}>Claritai</span>
        <span style={{fontSize:'14px',color:'#64748b'}}>© 2025 Claritai. All rights reserved.</span>
        <div style={{display:'flex',gap:'24px'}}>
          <Link href="/auth/login" style={{fontSize:'14px',color:'#64748b',textDecoration:'none'}}>Sign in</Link>
          <Link href="/auth/signup" style={{fontSize:'14px',color:'#64748b',textDecoration:'none'}}>Sign up</Link>
        </div>
      </footer>
    </div>
  )
}