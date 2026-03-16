import { getAllPosts } from '@/utility/blogApi';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div>
      <h1>Blog</h1>
        {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Typography variant="h2">{post.title}</Typography>
              <Typography variant="body1">{post.date}</Typography>
            </Link>
        ))}
    </div>
  );
}   