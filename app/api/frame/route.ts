import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  let idAsNumber = parseInt(id);

  const nextId = idAsNumber + 1;
  const prevId = idAsNumber - 1;

  const heartAnimation = `
  <style>
    .heart {
      position: absolute;
      display: none;
      color: red;
      font-size: 2rem;
      animation: fadeInOut 1.5s ease forwards;
    }

    @keyframes fadeInOut {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      50% {
        transform: scale(1.5);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  </style>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('meta[property="fc:frame:button:1"]').forEach(button => {
        button.addEventListener('click', () => {
            var heart = document.getElementById('heart');
            heart.style.display = 'block';
            heart.style.left = event.clientX + 'px';
            heart.style.top = event.clientY + 'px';

            setTimeout(function() {
                heart.style.display = 'none';
            }, 1000);
          });
        });
      });
  </script>
  `;


// 1: Like Follow Next
// 2-9:Like Follow Back Next
// 10: Like Follow Back Pinata
  if (idAsNumber === 10) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 10</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/10.png" />
    <meta property="fc:frame:button:1" content="Like" />
    <meta property="fc:frame:button:2" content="Follow" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:button:3" content="Back" />
    <meta property="fc:frame:button:3:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${prevId}" />
    <meta property="fc:frame:button:4" content="Pinata" />
    <meta property="fc:frame:button:4:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head><body><div id="heart" class="heart">❤️</div></body></html>`);
  } else if (idAsNumber == 1) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/${id}.png" />
    <meta property="fc:frame:button:1" content="Like" />
    <meta property="fc:frame:button:2" content="Follow" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
    <meta property="fc:frame:button:3" content="Next" />
    <meta property="fc:frame:button:3:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    <script>
      const likeButton = document.querySelector('[property="fc:frame:button:1"]');
      const successDiv = document.querySelector('#success');
      likeButton.addEventListener('click', () => {
        successDiv.innerText = 'Liked!';
      });
    </script>
  </head><body><div id="heart" class="heart">❤️</div></body></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/${id}.png" />
    <meta property="fc:frame:button:1" content="Like" />
    <meta property="fc:frame:button:2" content="Follow" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
    <meta property="fc:frame:button:3" content="Back" />
    <meta property="fc:frame:button:3:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${prevId}" />
    <meta property="fc:frame:button:4" content="Next" />
    <meta property="fc:frame:button:4:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
    ${heartAnimation}
  </head><body><div id="heart" class="heart">❤️</div></body></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
