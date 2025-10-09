import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'AME-TREC',
  description:
    '「ここすき」が、ギュッと。',
  href: 'https://ame-trec.github.io/ame-trec2.0/',
  author: '柚木とくやま',
  locale: 'JP',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
    {
    href: '/mtr',
    label: 'mtr',
  },
      {
    href: '/mtr_kiyaku',
    label: 'mtrkiyaku',
  },    
  {
    href: '/blog',
    label: 'blog',
  },  
  {
    href: '/about',
    label: 'about',
  },
   {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfccAaElbIItkoQb8fmS9czLIYNEeN-Lo4E8teYVMFc0pft5w/viewform?usp=header',
    label: 'clap',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
