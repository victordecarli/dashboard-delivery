import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tatuusccmpxklqlnrigu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhdHV1c2NjbXB4a2xxbG5yaWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MzgyOTksImV4cCI6MjA3OTMxNDI5OX0.A0fEa7fYwPFqjPF_7R2fqK4MvrhJ_xTmICKZxyUENCg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
