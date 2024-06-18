import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

// type: 0，前一个，back；1，后一个，next
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "What's your favorite Farcast NFT: Begin!"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmdU2ivx86KjqUfBmhwmEuWs9xfmhsweLLwyqkJNwV2E7Y`,
//   post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Farcast',
  description: 'Farcast NFT',
  openGraph: {
    title: 'Farcast',
    description: 'Farcast NFT',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>coin-zcber</h1>
      <div>A man exploring web3</div>
      <div>my warpcast：<a href='https://warpcast.com/coinzcber'>Follow me!</a></div>
      <div>my far.quest：<a href='https://far.quest/coin-zcber.cast'>Follow me!</a></div>
      <div>Follow me = Follow you</div>
    </>
  );
}
