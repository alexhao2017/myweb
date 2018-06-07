import React from 'react'
import Background from '../components/Background';
class Home extends React.Component {
  render() {
    return (
      <div className="columns">
      <div className="column"><div className="timeline">
  <header className="timeline-header">
    <span className="tag is-medium is-success">Start</span>
  </header>
  <div className="timeline-item">
  <div className="timeline-marker is-image is-64x64">
      <img src="tongjilogo.png"/>
    </div>
    <div className="timeline-content">
      <p className="heading">Sep 2006</p>
      <p>Tongji University ,Shanghai</p>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-marker is-image is-64x64">
      <img src="casc.png"/>
    </div>
    
    <div className="timeline-content">
      <p className="heading">July 2011</p>
      <p>China Academy of Aerospace Aerodynamics(CAAA)</p>
    </div>
  </div>
  
  <div className="timeline-item">
    <div className="timeline-marker is-image is-64x64">
      <img src="casc.png"/>
    </div>
  <div className="timeline-content">
      <p className="heading">July 2013</p>
      <p>China Aerospace Academy of Systems Science and Engineering(CAASSE),Beijing</p>
    </div>
  </div>

 
  <div className="timeline-item">
  <div className="timeline-marker is-image is-64x64">
      <img src="usydlogo_1.png"/>
    </div>
    <div className="timeline-content">
      <p className="heading">AUG 2018</p>
      <p>University of Sydney</p>
    </div>
  </div>
  <div className="timeline-header">
    <span className="tag is-medium is-success">NOW</span>
  </div>
</div></div>
      <div className="is-divider-vertical" data-content="CN/AUS"></div>
      <div className="column">Column 2</div>
    </div>

      

    )
  }
}
export default Home