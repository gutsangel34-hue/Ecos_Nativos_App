import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ftmyktwgpqhxpdsdmtjt.supabase.co'
const supabaseAnonKey = 'sb_publishable_pLmUbi1mk-4_wrGEfx7XKA_JHFll7Pu'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)