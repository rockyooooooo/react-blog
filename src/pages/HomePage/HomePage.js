import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getPosts } from '../../WebAPI'

const Root = styled.div`
  width: 50rem;
  margin: 0 auto;
`

const PostContainer = styled.article`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const PostTitle = styled(Link)`
  font-size: 1.5rem;
  color: #333;
`

const PostDate = styled.p`
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.8);
`

const Post = ({ post }) => {
  const { title, createdAt } = post

  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{title}</PostTitle>
      <PostDate>{new Date(createdAt).toLocaleString()}</PostDate>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.number,
    userId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    id: PropTypes.number
  })
}

const HomePage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts)
    })
  }, [])

  return (
    <Root>
      {posts.map((post) => <Post key={post.id} post={post} />)}
    </Root>
  )
}

export default HomePage;
