import { NextApiRequest, NextApiResponse } from "next";
// import { topTracks } from "../../../lib/spotify";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // const response = await topTracks();
  // const { items } = await response.json();

  // const tracks = items.slice(0, 10).map((track: any) => ({
  //   title: track.name,
  //   artist: track.artists.map((artist: any) => artist.name).join(", "),
  //   url: track.external_urls.spotify,
  //   coverImage: track.album.images[1],
  // }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ status: true });//tracks
}
