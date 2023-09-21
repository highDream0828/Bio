import Head from "next/head";
import useWindowLocation from "@hooks/useWindowLocation";

type Props = {
  title: string;
  description: string;
  previewImage?: string;
  keywords?: string;
  suffix?: string;
};

export default function MetaData({
  title,
  description,
  previewImage,
  keywords,
  suffix,
}: Props) {
  const { currentURL } = useWindowLocation();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description || "Doan Kien"} />
      <title>{title + (suffix ? ` - ${suffix}` : "")}</title>
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Doan Kien"></meta>
      <meta name="robots" content="index,follow" />
      <meta
        name="keywords"
        content={`${keywords || ""} Alex, Doan Kien, scarlett1130, scarlett1130_`}
      />

      {/* Og */}
      <meta property="og:title" content={`${title || ""} Doan Kien`} />
      <meta property="og:description" content={description || "Doan Kien"} />
      <meta property="og:site_name" content="Doan Kien" />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage || ""} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@scarlett1130_" />
      <meta name="twitter:title" content={`${title || ""} Doan Kien`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage || ""} />
      <meta name="twitter:image:alt" content={title || "Doan Kien"}></meta>
      <meta name="twitter:domain" content={currentURL} />
    </Head>
  );
}
