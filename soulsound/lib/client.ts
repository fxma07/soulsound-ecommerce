import sanityClient from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "oa1zsrrp",
  dataset: "production",
  apiVersion: "2023-02-24",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource): string =>
  builder.image(source).url();
