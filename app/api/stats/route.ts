import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    // Scrape data from the GitHub profile
    const response = await axios.get("https://github.com/karmalia");

    const $ = cheerio.load(response.data);

    // Extract the GitHub Streak image source from the scraped HTML
    const streakImageSrc = $("img[alt='GitHub Streak']").attr("src");

    // Prepare the data to be sent back as the API response
    const data = {
      streakImageSrc,
    };

    // Send the data as the API response
    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
