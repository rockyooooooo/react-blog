import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Post from '../../components/utils/Post'
import { getListPosts, getPosts } from '../../WebAPI'
import Paginator from './Paginator'

const ListPageContainer = styled.div``

const PostsContainer = styled.div`
  padding: 0 0 3rem;
`

const ListPage = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  useEffect(() => {
    getPosts().then((posts) => {
      setLastPage(Math.ceil(posts.length / 5))
    })
  }, [])

  useEffect(() => {
    getListPosts(page).then((posts) => {
      setPosts(posts)
    })
  }, [page])

  return (
    <ListPageContainer>
      <PostsContainer>
        {posts.map((post) => <Post key={post.id} post={post} />)}
      </PostsContainer>
      {/* 只用 post.length 跟 lastPage 的話會在畫面顯示 0 */}
      {!!posts.length && !!lastPage && <Paginator page={page} setPage={setPage} lastPage={lastPage} />}
    </ListPageContainer>
  )
}

export default ListPage;
