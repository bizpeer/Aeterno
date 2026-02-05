import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const DEFAULT_URL = 'https://vfdihvkigtpbmarwrmng.supabase.co';
const DEFAULT_KEY = 'sb_publishable_q9ciq8dda4JXdGd2fGMnGg_6ROPU-7a';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL and Anon Key not found in env. Using default credentials.');
}

export const supabase = createClient(
    supabaseUrl || DEFAULT_URL,
    supabaseAnonKey || DEFAULT_KEY
);
