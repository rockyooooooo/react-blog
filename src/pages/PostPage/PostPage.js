import moment from 'moment'
import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { blackDefault, blackTitle } from '../../constants'
import { getPost } from '../../redux/reducers/postReducer'

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

const PostPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const post = useSelector((store) => store.posts.post)
  const author = useSelector((store) => store.posts.author)

  useLayoutEffect(() => {
    dispatch(getPost(id))
  }, [id, dispatch])

  const renderTitle = (title) => {
    if (title.length > TITLE_MAX_LENGTH) {
      const newTitle = title.slice(0, TITLE_MAX_LENGTH).concat('...')
      return <Title>{newTitle}</Title>
    }
    return <Title>{title}</Title>
  }

  return (
    <>
      {post.title && (
        <PostContainer>
          {renderTitle(post.title)}
          <Info>
            <Author>{author.nickname}</Author>
            <Time>{moment(post.createdAt).format('YYYY年MM月DD日')}</Time>
          </Info>
          <Content>{post.body}</Content>
        </PostContainer>
      )}
    </>
  )
}

export default PostPage
