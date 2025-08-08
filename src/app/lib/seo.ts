export const jsonLdOrganization = (org: {
    name: string;
    url: string;
    logo: string;
    sameAs?: string[];
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    sameAs: org.sameAs || []
  });