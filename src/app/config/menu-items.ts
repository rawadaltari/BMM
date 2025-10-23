export class NavigationItem {
  icon: any;
  title: string='';
  link: string='';
}
export const defaultMenuItems: NavigationItem [] =
  [
    {
      title: 'Home',
      icon: '',
      link: '/home',
    },
    {
      title: 'Color Models',
      icon: '',
      link: '/color-models',
    },
    {
      title: 'Digital Images',
      icon: '',
      link: '/digital-images',
    },
    {
      title: 'AI Gallery',
      icon: '',
      link: '/ai-gallery-images',
    },
    {
      title: 'About',
      icon: '',
      link: '/about',
    },
  ] as NavigationItem[];
