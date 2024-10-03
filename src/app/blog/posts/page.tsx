import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import React from 'react';

export default function Page() {
  return (
    <>
      <h1 className="text-purple-800">Posts</h1>
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>)
}