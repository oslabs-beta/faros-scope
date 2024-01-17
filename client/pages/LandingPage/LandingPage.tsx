import { Link } from 'react-router-dom';
import { ColoredText } from '../../components/reusable/text/ColoredText';
import './Landing.module.scss'

export const LandingPage = () => {
  return (
    <div className="landingMain">
      <div className="landingContent">
        <div className="landingBody">
          <div className="landingBodyContent">
            {/* <nav className="landingNav"></nav> */}
            <h1 id='farosText'>
              <ColoredText color="Red">
                Faros
              </ColoredText>
            </h1>
            <header className="landingHeader">
              {/* <h1>
                Welcome to <ColoredText color="Red">Faros</ColoredText>
              </h1> */}
              <h2>
                Faros is a web application that helps users visualize their{' '}
                <ColoredText color="Blue">Kubernetes</ColoredText> Clusters and
                their resources with{' '}
                <ColoredText color="Orange">Real-Time</ColoredText> updates.
              </h2>
              <h3>
                We're devoted to providing our users a{' '}
                <ColoredText color="Orange">Simple</ColoredText> and{' '}
                <ColoredText color="Orange">Responsive</ColoredText> User
                Experience while giving them as much{' '}
                <ColoredText color="Orange">information</ColoredText> and{' '}
                <ColoredText color="Orange">control</ColoredText> over their
                clusters as possible.
              </h3>
              <h3>
                Take control of your{' '}
                <ColoredText color="Blue">Kubernetes</ColoredText> Cluster
                today!
              </h3>
            </header>
            <Link to="/">
              {' '}
              {/* TODO: Change to /login when it's ready */}
              <button className="landingButton">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
