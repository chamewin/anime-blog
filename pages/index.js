import Head from "next/head";
import Image from "next/image";
import { PostCard } from './components/PostCard';

const posts = [
  { title: 'React', excerpt: 'Cock' },
  { title: 'Cock', excerpt: 'React' },
];

export default function Home() {
  return (
    <div classname="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 md:col-span-10 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <p className="text-center">side</p>
        </div>
      </div>
    </div>
  );
}
