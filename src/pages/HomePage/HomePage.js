import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Post from '../../components/Post'
import { getPosts } from '../../WebAPI'

const Root = styled.div`
  width: 50rem;
  margin: 0 auto;
`

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
