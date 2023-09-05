import { Link, useLocation } from "react-router-dom"
// import { withRouter } from "react-router-dom";

const Breadcrumbs = props => {
    // const {
    //     history,
    //     location: { pathname }
    //   } = props;
    //   const pathnames = pathname.split("/").filter(x => x);
      console.log(props,"history")
      const location = useLocation()

      let currentLink = ''
    
      const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
          currentLink += `/${crumb}`
    
          return (
            <div className="crumb" key={crumb}>
              <Link to={currentLink}>{crumb}</Link>
            </div>
          )
        })

  return (
    // <nav className="breadcrumbs" aria-label="breadcrumb">
    //      {pathnames.length > 0 ? (
    //     <Link onClick={() => history.push("/")}>Home</Link>
    //   ) : (
    //     <h1> Home </h1>
    //   )}
    //   {pathnames.map((name, index) => {
    //     const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    //     const isLast = index === pathnames.length - 1;
    //     return isLast ? (
    //       <p key={name}>{name}</p>
    //     ) : (
    //       <Link key={name} onClick={() => history.push(routeTo)}>
    //         {name}
    //       </Link>
    //     );
    //   })}
    // </nav>
    <div className="breadcrumbs">
      {/* <p>Home</p> */}
    {crumbs}
  </div>
  )
}

export default Breadcrumbs;