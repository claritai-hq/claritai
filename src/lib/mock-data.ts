export const spendData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(); date.setDate(date.getDate() - (29 - i));
  const base = 80 + Math.sin(i * 0.4) * 30;
  return { date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), OpenAI: Math.round((base * 0.6 + Math.random() * 20) * 100) / 100, Anthropic: Math.round((base * 0.3 + Math.random() * 15) * 100) / 100, Gemini: Math.round((base * 0.1 + Math.random() * 8) * 100) / 100 };
});
export const teamMembers = [
  { id: '1', name: 'Sarah Chen', email: 'sarah@acme.com', role: 'Engineering Lead', thisWeek: 340, thisMonth: 1240, primaryTool: 'Claude', trend: 'up', trendPct: 18 },
  { id: '2', name: 'Marcus Johnson', email: 'marcus@acme.com', role: 'Senior Engineer', thisWeek: 280, thisMonth: 980, primaryTool: 'GPT-4o', trend: 'up', trendPct: 7 },
  { id: '3', name: 'Priya Patel', email: 'priya@acme.com', role: 'Product Manager', thisWeek: 190, thisMonth: 720, primaryTool: 'GPT-4o', trend: 'down', trendPct: 12 },
  { id: '4', name: 'Alex Rivera', email: 'alex@acme.com', role: 'Designer', thisWeek: 85, thisMonth: 310, primaryTool: 'Gemini', trend: 'stable', trendPct: 2 },
  { id: '5', name: 'Jordan Kim', email: 'jordan@acme.com', role: 'Backend Engineer', thisWeek: 220, thisMonth: 840, primaryTool: 'Claude', trend: 'up', trendPct: 24 },
  { id: '6', name: 'Taylor Brooks', email: 'taylor@acme.com', role: 'Data Analyst', thisWeek: 145, thisMonth: 490, primaryTool: 'GPT-4o-mini', trend: 'down', trendPct: 5 },
  { id: '7', name: 'Morgan Lee', email: 'morgan@acme.com', role: 'DevOps', thisWeek: 60, thisMonth: 190, primaryTool: 'GPT-4o', trend: 'stable', trendPct: 1 },
  { id: '8', name: 'Casey Williams', email: 'casey@acme.com', role: 'Frontend Engineer', thisWeek: 175, thisMonth: 590, primaryTool: 'Cursor', trend: 'up', trendPct: 15 },
];
export const insights = [
  { id: '1', type: 'recommendation', title: 'Switch 3 projects to GPT-4o-mini', description: 'Sarah, Marcus, and Jordan are using GPT-4o for simple tasks. Switch to GPT-4o-mini and save 80% at 95% quality.', savings: 240, action: 'View affected projects' },
  { id: '2', type: 'anomaly', title: 'Tuesday spend was 3.2x normal', description: "Last Tuesday hit $412 — your 30-day average is $128/day. Jordan ran a large Claude batch job at 2pm.", savings: undefined, action: 'View breakdown' },
  { id: '3', type: 'spike', title: "Jordan's usage spiked 4x this week", description: 'Jordan Kim went from $55/week to $220 this week. Likely a Claude Code session or batch job.', savings: undefined, action: "View Jordan's usage" },
  { id: '4', type: 'recommendation', title: 'Use Claude Haiku for Cursor completions', description: 'Your team uses Claude Opus for inline code completions. Haiku is 20x cheaper and built for this use case.', savings: 180, action: 'Update Cursor config' },
  { id: '5', type: 'alert', title: 'On track to exceed budget by 18%', description: "At current run rate you'll spend $4,540 this month. Budget is $3,840.", savings: undefined, action: 'Set user limits' },
];
export const integrations = [
  { id: 'openai', name: 'OpenAI', description: 'GPT-4o, GPT-4o-mini, DALL-E, Whisper', color: '#10a37f', connected: true, spend: 2380 },
  { id: 'anthropic', name: 'Anthropic', description: 'Claude 3 Opus, Sonnet, Haiku', color: '#d4a853', connected: true, spend: 1160 },
  { id: 'gemini', name: 'Google Gemini', description: 'Gemini Pro, Gemini Flash', color: '#4285f4', connected: false },
  { id: 'cursor', name: 'Cursor', description: 'AI code editor with inline completions', color: '#8b5cf6', connected: false },
  { id: 'copilot', name: 'GitHub Copilot', description: 'AI pair programmer in VS Code', color: '#24292f', connected: false },
  { id: 'notion', name: 'Notion AI', description: 'AI writing assistant in Notion', color: '#f8fafc', connected: false },
];
export const totalThisMonth = spendData.reduce((acc, d) => acc + d.OpenAI + d.Anthropic + d.Gemini, 0);
export const dailyAverage = totalThisMonth / 30;