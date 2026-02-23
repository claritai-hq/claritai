import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const { apiKey, userId } = await request.json()
    if (!apiKey || !userId) {
      return NextResponse.json({ error: 'Missing apiKey or userId' }, { status: 400 })
    }

    // Test the API key by making a simple models request
    const testRes = await fetch('https://api.openai.com/v1/models', {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    })
    
    if (!testRes.ok) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 400 })
    }

    // Store the API key
    const { error } = await supabase
      .from('api_keys')
      .upsert({ user_id: userId, provider: 'openai', api_key_encrypted: apiKey, updated_at: new Date().toISOString() })
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to save API key' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (e: any) {
    console.error('Error:', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('api_keys')
      .select('provider, created_at, updated_at')
      .eq('user_id', userId)
    
    if (error) throw error
    return NextResponse.json({ integrations: data || [] })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { userId, provider } = await request.json()
    const { error } = await supabase
      .from('api_keys')
      .delete()
      .eq('user_id', userId)
      .eq('provider', provider)
    
    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
