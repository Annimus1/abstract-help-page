import "./prompt.css"

function Prompt() {
  return (
    <div id="prompt">
        <h1>How can we help?</h1>
        <form className="wrapper" role="search" data-search="" data-instant="true" action="/hc/en-us/search" accept-charset="UTF-8" method="get">
          <input type="search" placeholder="Search "/>
          <div id="submit">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
          </div>
        </form>
      </div>
  )
}

export default Prompt