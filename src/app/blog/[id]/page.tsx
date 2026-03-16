import { getAllPosts, getPostById } from '@/utility/blogApi';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams(){
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id
  }))
}

type Props = {
  params: Promise<{id: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
){
  const id = (await params).id
  const post = await getPostById(id);
  
  return {
    title: post.title
  }
}

export default async function PostPage({ params }: Props) {
  
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <Box sx={{ marginX: { xs: "5%", md: "10%" }}}>
    <article>
      <Typography variant="body2">{post.date}</Typography>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
    </Box>
  );
}