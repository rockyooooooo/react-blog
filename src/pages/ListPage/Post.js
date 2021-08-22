import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PostContainer = styled.article`
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  border-left: 3px solid transparent;

  &:hover {
    border-left-color: black;
  }
`

const PostTitle = styled(Link)`
  color: #333;
  border-bottom: 1px dotted transparent;

  &:hover {
    border-bottom-color: darkgray;
  }
`

const PostDate = styled.p`
  flex-shrink: 0;
  color: #757575;
  font-size: 0.9rem;
  font-family: monospace;
`

const Post = ({ post }) => {
  const { title, createdAt } = post

  return (
    <PostContainer>
      <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
      <PostTitle to={`/posts/${post.id}`}>{title}</PostTitle>
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

export default Post