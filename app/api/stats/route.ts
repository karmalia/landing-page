import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const response = await axios.get("https://github.com/karmalia");
    const $ = cheerio.load(response.data);
    const streakImageSrc = $("img[alt='GitHub Streak']").attr("src");

    const data = {
      streakImageSrc,
    };

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
