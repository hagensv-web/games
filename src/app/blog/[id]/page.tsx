import { getPostById } from '@/utility/blogApi';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}