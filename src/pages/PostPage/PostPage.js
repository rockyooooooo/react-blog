import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getPost, getUser } from '../../WebAPI'

const PostContainer = styled.div`
  width: 42.5rem;
  margin: 0 auto;
`

const Title = styled.h2`
  border-bottom: 1px solid #333;
  margin: 0;
  padding: 1rem 0;
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.75rem;
  color: #292929;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 ;
`

const Author = styled.span``

const Time = styled.span``

const Content = styled.main``

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data)
    })
  }, [id])

  useEffect(() => {
    if (!post) return
    getUser(post.userId).then((data) => {
      setUser(data)
    })
  }, [post])

  return (
    <>
      {post && user && <PostContainer>
          <div>
            <Title>{post.title}</Title>
            <Info>
              <Author>{user && user.nickname}</Author>
              <Time>{new Date(post.createdAt).toLocaleString()}</Time>
            </Info>
          </div>
          <Content>{post.body}</Content>
      </PostContainer>}
    </>
  )
}

export default PostPage