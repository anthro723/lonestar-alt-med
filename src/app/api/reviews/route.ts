import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = "anthro723/lonestar-alt-med";
const FILE_PATH = "reviews/feedback.json";

async function githubApi(method: string, path: string, body?: any) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res;
}

// GET — load saved reviews from GitHub
export async function GET() {
  try {
    const res = await githubApi("GET", `contents/${FILE_PATH}`);
    if (res.status === 404) {
      return NextResponse.json({ comments: [], lastUpdated: null });
    }
    const data = await res.json();
    const content = Buffer.from(data.content, "base64").toString("utf8");
    return NextResponse.json(JSON.parse(content));
  } catch (e: any) {
    return NextResponse.json({ comments: [], error: e.message }, { status: 500 });
  }
}

// POST — save reviews to GitHub (commit to repo)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { comments, author } = body;

    const payload = {
      comments,
      author,
      lastUpdated: new Date().toISOString(),
      site: "Lonestar Alternative Medicine",
      totalComments: comments.length,
      totalImages: comments.reduce((sum: number, c: any) => sum + (c.images?.length || 0), 0),
    };

    const content = Buffer.from(JSON.stringify(payload, null, 2)).toString("base64");

    // Check if file exists (need SHA for update)
    let sha: string | undefined;
    const existing = await githubApi("GET", `contents/${FILE_PATH}`);
    if (existing.ok) {
      const data = await existing.json();
      sha = data.sha;
    }

    // Create or update the file
    const res = await githubApi("PUT", `contents/${FILE_PATH}`, {
      message: `Review update from ${author || "reviewer"} — ${comments.length} comments, ${payload.totalImages} photos`,
      content,
      sha,
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      commentCount: comments.length,
      imageCount: payload.totalImages,
      lastUpdated: payload.lastUpdated,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
