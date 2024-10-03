import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);
  return (
    <>
      <h1 className="text-purple-800">Post</h1>
      <Post {...post} />
    </>)
}