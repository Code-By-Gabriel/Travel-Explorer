export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { label: 'Destinations', href: '/destinations' },
        { label: 'Travel Guides', href: '/guides' },
        { label: 'Best Time to Visit', href: '/best-time' },
        { label: 'Travel Tips', href: '/tips' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'GDPR', href: '/gdpr' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'Pinterest', icon: 'pinterest', href: '#' },
    { name: 'YouTube', icon: 'youtube', href: '#' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌍</span>
              <span className="text-xl font-bold text-blue-600">Travel Explorer</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Your trusted guide to discovering the world&apos;s most amazing destinations. 
              We help travelers find unique experiences and create unforgettable memories.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <i className={`fab fa-${social.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Subscribe for travel inspiration and exclusive deals
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Travel Explorer. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-600 text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-600 text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-600 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}