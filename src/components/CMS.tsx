'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function CMS() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      window.location.href = '/api/auth/signin';
      return;
    }

    if (status === 'authenticated' && typeof window !== 'undefined') {
      // Only load CMS if not already loaded
      if (!window.CMS) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js';
        script.async = true;
        script.id = 'netlify-cms-script';
        
        script.onload = () => {
          // Initialize CMS with our configuration
          if (window.CMS) {
            window.CMS.registerPreviewStyle('/admin/cms.css');
            
            // Initialize the CMS
            window.CMS.init({
              config: {
                // This is needed to prevent the config from being loaded from /admin/config.yml
                load_config_file: false,
                // Set the backend configuration
                backend: {
                  name: 'github',
                  repo: 'Jaanexe/alex-doe-portfolio',
                  branch: 'main',
                  auth_flow: 'implicit',
                  base_url: window.location.origin,
                  auth_endpoint: 'api/auth/callback/github',
                },
                // Set the media folder
                media_folder: 'public/images/uploads',
                public_folder: '/images/uploads',
                // Set the collections
                collections: [
                  {
                    name: 'content',
                    label: 'Site Content',
                    files: [
                      {
                        file: 'src/data/hero.json',
                        label: 'Hero Section',
                        name: 'hero',
                        fields: [
                          { label: 'Name', name: 'name', widget: 'string' },
                          { label: 'Tagline', name: 'tagline', widget: 'string' },
                          { label: 'Background Image', name: 'backgroundImage', widget: 'image' },
                        ],
                      },
                      {
                        file: 'src/data/about.json',
                        label: 'About Section',
                        name: 'about',
                        fields: [
                          { label: 'Title', name: 'title', widget: 'string' },
                          { label: 'Description', name: 'description', widget: 'text' },
                          { label: 'Profile Image', name: 'image', widget: 'image' },
                        ],
                      },
                      {
                        file: 'src/data/gallery.json',
                        label: 'Gallery',
                        name: 'gallery',
                        fields: [
                          {
                            label: 'Images',
                            name: 'images',
                            widget: 'list',
                            field: { label: 'Image', name: 'image', widget: 'image' },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            });
          }
        };

        document.body.appendChild(script);

        return () => {
          const existingScript = document.getElementById('netlify-cms-script');
          if (existingScript) {
            document.body.removeChild(existingScript);
          }
          // Clean up CMS instance if needed
          if (window.CMS) {
            delete window.CMS;
          }
        };
      }
    }
  }, [status, session]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading CMS...</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div id="nc-root" className="min-h-screen" />
    </div>
  );
}
