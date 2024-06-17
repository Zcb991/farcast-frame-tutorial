import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Farcast',
  description: 'Farcast NFT',
  openGraph: {
    title: 'Farcast',
    description: 'Farcast NFT',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRoQoAn3p1cbYd6Kjm6vmvA51UgzSAJr7LQV75VpKEx4j/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}
