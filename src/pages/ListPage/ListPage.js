import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Post from './Post'
import { getListPosts, getPosts } from '../../WebAPI'
import Paginator from './Paginator'

const ListPageContainer = styled.div``

const PostsContainer = styled.div`
  padding: 3rem 0;
`

const ListPage = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)

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
      <Paginator page={page} setPage={setPage} lastPage={lastPage} />
    </ListPageContainer>
  )
}

export default ListPage;
