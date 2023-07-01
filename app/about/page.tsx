import { Metadata } from 'next';

export const dynamic = 'force-dynamic'; // no necessary, just for demonstration

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Us',
};

export default function Blog() {
  return (
    <div>
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}