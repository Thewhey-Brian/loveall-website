import { useEffect } from 'react';

const SEO = ({ title, description, keywords, ogImage }) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }

    if (title) {
      updateMetaTag('og:title', title, true);
    }
  }, [title, description, keywords, ogImage]);

  return null;
};

export default SEO;
