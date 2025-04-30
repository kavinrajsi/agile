import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface PageMetaProps {
  title: string;
  description: string;
  image?: string;
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description, image }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || '/assets/og-default.jpg'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || '/assets/og-default.jpg'} />
    </Helmet>
  );
};

export default PageMeta;
