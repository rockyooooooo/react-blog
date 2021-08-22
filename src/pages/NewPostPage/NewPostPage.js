import { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { newPost } from "../../WebAPI"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: calc(100vh - 4rem);
  width: 50vw;
  margin: 4rem auto;
`

const Title = styled.input`
  padding: 0.5rem;
  font-family: inherit;
  font-size: 1.25rem;
`

const TextArea = styled.textarea`
  resize: vertical;
  padding: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  height: 10rem;
`

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  margin-top: 1rem;
`

const NewPostPage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
    const history = useHistory()

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  const handleTextareaChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await newPost(title, content)
    history.push('/')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="title">文章標題：</label>
      <Title type="text" id="title" name="content" value={title} onChange={handleInputChange} />
      <label htmlFor="content">文章內容：</label>
      <TextArea id="content" name="content" value={content} onChange={handleTextareaChange} />
      <Button>送出文章</Button>
    </Form>
  )
}

export default NewPostPage