import { useState } from "react";
const Pagination = (props) => {
  const numPages = Math.ceil(props.total / props.limit);
  const viewPages = (numPages > 10? 10 : numPages);
  const [pageStart, setPageStart] = useState(0);
  return (
    <>
      <button 
        onClick={() => {
          props.setPage(props.page - 1); 
          setPageStart(Math.floor((props.page - 2) / 10));
          }} 
        disabled={props.page === 1}>
        &lt;
      </button>
      {Array(viewPages)
        .fill()
        .map((_, i) => {
          if(pageStart * 10 + i + 1 <= numPages) {
            return(
              <button
                key={pageStart * 10 + i + 1}
                onClick={() => {
                  props.setPage(pageStart * 10 + i + 1);
                }}
                aria-current={props.page === pageStart * 10 + i + 1 ? "page" : null}
              >
                {pageStart * 10 + i + 1}
              </button>
            )
        }})}
      <button 
        onClick={() =>{
          props.setPage(props.page + 1); 
          setPageStart(Math.floor(props.page / 10));}}
        disabled={props.page === numPages}
      >
        &gt;
      </button>
    </>
  );
}

export default Pagination;
