
// import react from 'react';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './videoPlayer.js';
import VideoList from './VideoList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[1],
    };
    clickHandler: (newVideo) => (
      this.setState({video: newVideo})
    );
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video= {this.state.video} />
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          </div>
          <div className="col-md-5">
            <VideoList videos= {this.state.videos} />
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
          </div>
          
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
