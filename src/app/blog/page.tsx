import { getAllPosts } from '@/utility/blogApi';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}   