import '../../css/Landing.scss';

export const Landing = () => {
  return (
    <div className="landingMain">
      <div className="landingContent">
        <nav className="landingNav">

        </nav>
        {/* <hr className="break-full-width" /> */}
        <div className="landingBody">
          <div className="landingBodyContent">
            <h1>Welcome to Faros</h1>
            <h2>
              Faros is a web application that allows users to visualize their Kubernetes clusters and their resources.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}