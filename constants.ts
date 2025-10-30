import type { PortfolioItem, Skill, SocialLink } from './types';
import {
  PhotoshopIcon, IllustratorIcon, BlenderIcon, UnityIcon, PremiereProIcon, AfterEffectsIcon,
  TwitchIcon, InstagramIcon, YoutubeIcon, DiscordIcon, MailIcon
} from './components/Icons';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Cosmic Dreamer',
    category: 'Digital Illustration',
    imageUrl: 'https://images8.alphacoders.com/132/thumb-1920-1320623.jpeg',
    description: 'A vibrant digital painting created with Photoshop, exploring themes of space and fantasy.'
  },
  {
    id: 2,
    title: 'Urban Exploration',
    category: 'Photography',
    imageUrl: 'https://images.alphacoders.com/138/thumb-1920-1383864.png',
    description: 'A series of photographs capturing the hidden beauty of cityscapes at night.'
  },
  {
    id: 3,
    title: 'Stream Overlays',
    category: 'Streaming Assets',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamingvisuals.com%2Fwp-content%2Fuploads%2F2022%2F06%2FMetallic-Stream-Package.jpg&f=1&nofb=1&ipt=8f652f1a4a84355db0e2be4b348399dc0e7e248c12daf4d935f13c5941b84a16',
    description: 'Custom-designed animated overlays for a Twitch streamer, created using After Effects.'
  },
  {
    id: 4,
    title: 'Character Concept',
    category: 'Concept Art',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2F19363e40666119.5787e9239bd90.jpg&f=1&nofb=1&ipt=0ca64f6d9c983c4f11f0cae9b2b8d20d82735017fe2a029b6af22a08778c3695',
    description: 'Concept art for a video game character, from initial sketches to final render in Blender.'
  },
  {
    id: 5,
    title: 'Mountain Vista',
    category: 'Photography',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsecure-cdn.scdn6.secure.raxcdn.com%2Fmedia%2Fuserfiles%2Fsubsite_261%2Fimages%2Fbanners-life%2Fmountain-vista.jpg&f=1&nofb=1&ipt=193cc95f8f5f9f825a8332bb3da56e2e06859bf377b592ec09e153d08a13d377',
    description: 'A breathtaking landscape shot from a recent hiking trip, edited in Lightroom.'
  },
  {
    id: 6,
    title: 'Game Environment',
    category: '3D Art',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.sketchfab.com%2Fmodels%2Fcf7b185680d54fadb8ad59a18904cb1a%2Fthumbnails%2F17e5a30a5f9d42d9a916fd67ecbbca33%2F7c7f30c7e71349bd913437c4018b4d92.jpeg&f=1&nofb=1&ipt=4e9d87ed3993263facf2d3a477e7f5fda6c0812e04b60c2d03a1325ad0fd6490',
    description: 'A low-poly 3D environment modeled and textured in Blender, designed for a Unity game.'
  },
    {
    id: 7,
    title: 'Creative Workspace',
    category: 'Photography',
    imageUrl: 'https://i.pinimg.com/736x/ad/4e/16/ad4e168e8e09d0504054b0788bb8f33c.jpg',
    description: 'A shot of my personal workspace where creativity happens.'
  },
  {
    id: 8,
    title: 'Abstract Motion',
    category: 'Motion Graphics',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb0%2Fa8%2Fff%2Fb0a8ff43c9c21062dcce0b066c60053b.gif&f=1&nofb=1&ipt=a37665d0fee0dbc1d56514eeeaadb7cba0a158f9c04b911b237d637e474e81c8',
    description: 'An abstract motion graphics piece created with After Effects and Premiere Pro.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Photoshop', icon: PhotoshopIcon, level: 95 },
  { name: 'Illustrator', icon: IllustratorIcon, level: 80 },
  { name: 'Blender', icon: BlenderIcon, level: 75 },
  { name: 'Unity', icon: UnityIcon, level: 60 },
  { name: 'Premiere Pro', icon: PremiereProIcon, level: 90 },
  { name: 'After Effects', icon: AfterEffectsIcon, level: 85 },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: 'https://jaanexe.github.io/jaanexe-portfolio-public/', icon: MailIcon },
  { name: 'Discord', url: 'https://jaanexe.github.io/jaanexe-portfolio-public/', icon: DiscordIcon },
  { name: 'Twitch', url: 'https://jaanexe.github.io/jaanexe-portfolio-public/', icon: TwitchIcon },
  { name: 'YouTube', url: 'https://jaanexe.github.io/jaanexe-portfolio-public/', icon: YoutubeIcon },
  { name: 'Instagram', url: 'https://jaanexe.github.io/jaanexe-portfolio-public/', icon: InstagramIcon },
];