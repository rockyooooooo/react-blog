import styled from 'styled-components'
import PropTypes from 'prop-types'

const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `

const Pagination = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  width: 6rem;
  cursor: ${(props) => props.$active && "pointer;"};
  font-size: 1rem;
  color: inherit;
`

const Button = styled.button`
  background-color: ${(props) => props.$active ? "black" : "transparent"};
  color: ${(props) => props.$active ? "white" : "black"};
  cursor: ${(props) => !props.$active && "pointer"};
  border-radius: 50%;
  border: 1px solid transparent;
  width: 2.25rem;
  height: 2.25rem;

  &:hover {
    border-color: black;
  }
`

const Paginator = ({ page, setPage, lastPage }) => {
  const arr = []
  for(let i = 1; i < page; i++) {
    arr.push(i)
  }
  return (
    <PaginatorContainer>
      { 
        page > 1 ?
        <Pagination $active={true} onClick={() => setPage((prev) => prev - 1)}>＜上一頁</Pagination> :
        <Pagination $active={false} />
      }
      {
        page > 1 && arr.map((num) => <Button key={num} $active={false} onClick={() => setPage(num)}>{num}</Button>)
      }
      <Button $active={true}>{page}</Button>
      {
        page < lastPage ?
        <Pagination $active={true} onClick={() => setPage((prev) => prev + 1)}>下一頁＞</Pagination> :
        <Pagination $active={false} />
      }
      {/* {
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
      } */}
    </PaginatorContainer>
  )
}

Paginator.propTypes = {
  page:PropTypes.number,
  setPage: PropTypes.func,
  lastPage: PropTypes.number
}

export default Paginator