import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qklvotdnxcxnlijugeyh.supabase.co";
const supabaseKey = "sb_publishable_H-5HMYSDOBSiUVGezPP8XA_3UiLJeGL";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
