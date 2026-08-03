import type { Metadata } from 'next';

const SITE_NAME = '524Tracker';
const SITE_URL = 'https://524tracker.com';
const SOCIAL_IMAGE = `${SITE_URL}/opengraph-image`;

interface PageMetadataOptions {
  title: string;
  description: string;
  path: `/${string}` | '/';
  type?: 'website' | 'article';
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const socialTitle = `${title} | ${SITE_NAME}`;
  const image = {
    url: SOCIAL_IMAGE,
    width: 1200,
    height: 630,
    alt: `${SITE_NAME} - independent credit-card date and value tools`,
  };

  return {
    title: { absolute: socialTitle },
    description,
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_US',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
