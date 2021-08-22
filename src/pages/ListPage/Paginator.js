import styled from 'styled-components'
import PropTypes from 'prop-types'

const PaginatorContainer = styled.div`
  display: block;
  text-align: center;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  font-family: inherit;
  width: 4rem;
  cursor: ${(props) => props.$active && "pointer;"};
  transition: background 300ms ease;

  &:hover {
    background: ${(props) => props.$active && "#75757575;"}
  }
`

const Paginator = ({ page, setPage, lastPage }) => {
  return (
    <PaginatorContainer>
      {
        page > 1 ?
        <>
          <Button $active={true} onClick={() => setPage(1)}>First</Button>
          <Button $active={true} onClick={() => setPage((prev) => prev - 1)}>Prev</Button>
        </> :
        <>
          <Button $active={false} />
          <Button $active={false} />
        </>
      }
      {
        page < lastPage ? 
        <>
          <Button $active={true} onClick={() => setPage((prev) => prev + 1)}>Next</Button>
          <Button $active={true} onClick={() => setPage(lastPage)}>Last</Button>
        </> :
        <>
          <Button $active={false} />
          <Button $active={false} />
        </>
      }
    </PaginatorContainer>
  )
}

Paginator.propTypes = {
  page:PropTypes.number,
  setPage: PropTypes.func,
  lastPage: PropTypes.number
}

export default Paginator