import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export const POST = async (req, context) => {
  try {
    const { data: queryData, error: queryError } = await supabase
      .from("posts")
      .select();
    return new NextResponse(JSON.stringify(queryData), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
