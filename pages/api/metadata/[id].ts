import type { NextRequest } from 'next/server';

export default async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const tokenId = searchParams.get('id')?.split('.')[0];

  if (Number(tokenId) > 7777 || Number(tokenId) < 1) {
    return new Response(null, {
      status: 404
    });
  }

  return new Response(
    JSON.stringify({
      name: tokenId,
      description: 'The is test NFT'
    }),
    {
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    }
  );
};

export const config = {
  runtime: 'experimental-edge'
};

// {
//   "name": "RTFKT Animus Egg 🥚",
//   "description": "The Environmental Gestation Gizmo is a state-of-the-art incubation chamber for artificial lifeforms. It is tamper-proof and suitable for trans-dimensional travel. It can safely be infused with elemental energies.\n\nWhile you wait for it to hatch, be sure to !PROTECT ⚔️🛡️⚔️ it at all cost.\n\nDigital Collectible terms and conditions apply, see https://rtfkt.com/legal-2D",
//   "image": "ipfs://QmYnWzbfyJZ8NEFsKvSaiSbezqtad6AuUb3BRh9Wa5VvMB",
//   "animation_url": "ipfs://QmWxXKcBNqgj8myJ3TtMpFj1txHotHo7154iD7zJjvZA5w",
//   "external_url": "https://rtfkt.com",
//   "attributes": [
//   {
//   "trait_type": "ARTEFACT",
//   "value": "RTFKT x Animus Egg"
//   },
//   {
//   "trait_type": "Incubation Status",
//   "value": "Offline"
//   }
//   ]
//   }
