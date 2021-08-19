import Link from 'next/link';
// import { Children } from 'react';

const navLink = [
  { path: '/', label: 'blog', id: 1 },
  { path: '/about', label: 'about', id: 2 }
];

export default function Layout({ children }) {
  return (
    <div className="p-10 font-mono">
      <nav className="bg-blue-400 p-5 flex justify-center">
        {navLink.map((link) => (
          <Link href={link.path} key={link.id}>
            <a className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50">{link.label}</a>
          </Link>
        ))}

      </nav>
      <main className="bg-gray-100">{children}</main>
      <footer className="bg-blue-400 p-5 text-gray-100 text-center">
        {' '}
        ◦ {new Date().getFullYear()}
      </footer>
    </div>
  );
}
