import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the config file directly from the public directory
    const configContent = `
backend:
  name: github
  repo: Jaanexe/alex-doe-portfolio
  branch: main
  auth_flow: "implicit"
  base_url: ${process.env.NEXTAUTH_URL}
  auth_endpoint: api/auth/callback/github

# Media and public folders
media_folder: "public/images/uploads"
public_folder: "/images/uploads"

# Collections
collections:
  - name: "content"
    label: "Site Content"
    files:
      - file: "src/data/hero.json"
        label: "Hero Section"
        name: "hero"
        fields:
          - { label: "Name", name: "name", widget: "string" }
          - { label: "Tagline", name: "tagline", widget: "string" }
          - { label: "Background Image", name: "backgroundImage", widget: "image" }

      - file: "src/data/about.json"
        label: "About Section"
        name: "about"
        fields:
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Description", name: "description", widget: "text" }
          - { label: "Profile Image", name: "image", widget: "image" }

      - file: "src/data/gallery.json"
        label: "Gallery"
        name: "gallery"
        fields:
          - label: "Images"
            name: "images"
            widget: "list"
            field: { label: "Image", name: "image", widget: "image" }
`;

    return new NextResponse(configContent.trim(), {
      headers: {
        'Content-Type': 'text/yaml',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
    });
  } catch (error) {
    console.error('Error generating config:', error);
    return new NextResponse('Error loading configuration', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
