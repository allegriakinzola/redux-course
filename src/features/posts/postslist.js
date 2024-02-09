import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostHautor } from './postauthor'
import { TimeAgo } from './timesago'
import { ReactionButtons } from './reactionboutons'
import { selectAllPosts } from './postSlice'

export const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))


  const renderedPosts = orderedPosts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <PostHautor userID={post.user} />
      <TimeAgo timestamp={post.date} />
    </article>
  ))
  
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}