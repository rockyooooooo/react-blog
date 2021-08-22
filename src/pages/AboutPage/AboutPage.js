import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
`

const Title = styled.h2`
  font-size: 3rem;
`

const Description = styled.p`
  font-size: 0.8rem;
  color: #757575;
`

const AboutPage = () => {
  return (
    <Container>
      <Title>Large</Title>
      <Description>一個想假裝自己是 Medium 的部落格</Description>
    </Container>
  )
}

export default AboutPage;
