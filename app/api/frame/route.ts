import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
//   const type: any = searchParams.get("type");
  const id: any = searchParams.get("id");
//   const idAsNumber = parseInt(id);
  let idAsNumber = parseInt(id);


  const nextId = idAsNumber + 1;
  const prevId = idAsNumber - 1;

  
  // 0:Begin
  // 1: Like Follow Next
  // 2-9: Back Like Follow Next
  // 10: Back Like Follow Pinata
  if (idAsNumber === 10) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 10</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/10.png" />
    <meta property="fc:frame:button:1" content="Back" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${prevId}$type=back" />
    <meta property="fc:frame:button:2" content="Like" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${prevId}$type=back" />
    <meta property="fc:frame:button:3" content="coin-zcber" />
    <meta property="fc:frame:button:3:action" content="post_redirect" />
    <meta property="fc:frame:button:4" content="Pinata" />
    <meta property="fc:frame:button:4:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else if (idAsNumber == 1) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/${id}.png" />
    <meta property="fc:frame:button:1" content="Like" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    <meta property="fc:frame:button:2" content="Follow" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    <meta property="fc:frame:button:3" content="Next" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
  else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/${id}.png" />
    <meta property="fc:frame:button:1" content="Back" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${prevId}" />
    <meta property="fc:frame:button:2" content="Like" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    <meta property="fc:frame:button:3" content="Follow" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    <meta property="fc:frame:button:4" content="Next" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
