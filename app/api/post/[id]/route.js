import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export const GET = async (req, context) => {
  try {
    const postId = context.params.id;
    const { data: queryData, error: queryError } = await supabase
      .from("posts")
      .select()
      .eq("id", postId);
    return new Response(JSON.stringify(queryData), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
