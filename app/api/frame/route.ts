import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  let idAsNumber = parseInt(id);


  const nextId = idAsNumber + 1;
  const prevId = idAsNumber - 1;

  const likeEffectScript = `
    <style>
      .heart {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: red;
        clip-path: polygon(50% 0%, 61% 12%, 75% 12%, 85% 25%, 85% 37%, 50% 75%, 15% 37%, 15% 25%, 25% 12%, 39% 12%);
        opacity: 0;
        animation: fadeInOut 2s ease;
      }

      @keyframes fadeInOut {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        10% {
          opacity: 1;
          transform: scale(1.2);
        }
        50% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0);
        }
      }
    </style>
    <script>
      function showHeartEffect() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.top = '50%';
        heart.style.left = '50%';
        heart.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
      }

      document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-like-button]').forEach(button => {
          button.addEventListener('click', () => showHeartEffect());
        });
      });
    </script>
  `;

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
    <meta property="fc:frame:button:1:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${prevId}" />
    <meta property="fc:frame:button:2" content="Like" />
    <meta property="fc:frame:button:2:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${prevId}" />
    <meta property="fc:frame:button:3" content="Follow" />
    <meta property="fc:frame:button:3:action" content="post_redirect" />
    <meta property="fc:frame:button:4" content="Pinata" />
    <meta property="fc:frame:button:4:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
    ${likeEffectScript}
  </head></html>`);
  } else if (idAsNumber == 1) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/${id}.png" />
    <meta property="fc:frame:button:1" content="Like" />
    <meta property="fc:frame:button:1:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    <meta property="fc:frame:button:2" content="Follow" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:button:3" content="Next" />
    <meta property="fc:frame:button:3:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    ${likeEffectScript}
  </head></html>`);
  }
  else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/${id}.png" />
    <meta property="fc:frame:button:1" content="Back" />
    <meta property="fc:frame:button:1:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${prevId}" />
    <meta property="fc:frame:button:2" content="Like" />
    <meta property="fc:frame:button:2:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    <meta property="fc:frame:button:3" content="Follow" />
    <meta property="fc:frame:button:3:action" content="post_redirect" />
    <meta property="fc:frame:button:4" content="Next" />
    <meta property="fc:frame:button:4:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    ${likeEffectScript}
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
