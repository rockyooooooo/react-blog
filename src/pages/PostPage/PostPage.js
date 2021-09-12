import moment from 'moment'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { blackDefault, blackTitle } from '../../constants'
import { getPost, getUser } from '../../WebAPI'

const PostContainer = styled.div`
  margin: 0 auto;
  
  @media screen and (min-width: 1024px) {
    width: 50rem;
  }
`

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.125;
  color: ${blackTitle};
  overflow: hidden;
  text-overflow: ellipsis;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
`

const Author = styled.span`
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Time = styled.span`
  color: ${blackDefault};
  font-size: 0.9rem;
`

const Content = styled.main`
  white-space: pre-wrap;
  word-break: break-word;
  margin-bottom: 4rem;
  color: ${blackDefault};
  font-size: 1.1rem;
`

const TITLE_MAX_LENGTH = 49

const PostPage = ({ setIsLoading }) => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [user, setUser] = useState(null)

  useLayoutEffect(() => {
    setIsLoading(true)
    getPost(id).then((data) => {
      setPost(data)
    })
  }, [id, setIsLoading])

  useEffect(() => {
    if (!post) return
    getUser(post.userId).then((data) => {
      setUser(data)
    })
    setIsLoading(false)
  }, [post, setIsLoading])

  const renderTitle = (title) => {
    if (title.length > TITLE_MAX_LENGTH) {
      const newTitle = title.slice(0, TITLE_MAX_LENGTH).concat('...')
      return <Title>{newTitle}</Title>
    }
    return <Title>{title}</Title>
  }

  return (
    <>
      {post && user && <PostContainer>
          {renderTitle(post.title)}
          <Info>
            <Author>{user.nickname}</Author>
            <Time>{moment(post.createdAt).format('YYYY年MM月DD日')}</Time>
          </Info>
          <Content>{post.body}</Content>
      </PostContainer>}
    </>
  )
}

PostPage.propTypes = {
  setIsLoading: PropTypes.func
}

export default PostPage