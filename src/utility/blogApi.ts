import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const html = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { content: '🔗' })
        .use(rehypeStringify)
        .process(content);
      return {
        id,
        title: data.title,
        date: data.date,
        html: html.toString(),
      };
    })
  );
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostById(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { content: '🔗' })
    .use(rehypeStringify)
    .process(content);
  return {
    id,
    title: data.title,
    date: data.date,
    html: html.toString(),
  };
}   