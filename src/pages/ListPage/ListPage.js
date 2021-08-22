import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Post from '../../components/Post'
import { getListPosts, getPosts } from '../../WebAPI'
import Paginator from './Paginator'

const Root = styled.div`
  width: 50rem;
  margin: 0 auto;
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
    <Root>
      {posts.map((post) => <Post key={post.id} post={post} />)}
      <Paginator page={page} setPage={setPage} lastPage={lastPage} />
    </Root>
  )
}

export default ListPage;
