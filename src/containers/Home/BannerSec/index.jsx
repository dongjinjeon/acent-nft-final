import { Link } from "react-router-dom";

const BannerSec = () => {

  return (
      <section className="welcome_area" id="home">
        {/* Hero Content */}
        <div className="hero-content transparent">
          {/* blip */}
          {Array(4).fill().map((_i , key) => <div key={key} className={`dream-blip blip${key + 1}`} />)}

          <div className="container h-100">
            <div className="row h-100 align-items-center">
              {/* Welcome Content */}
              <div className="col-12 col-lg-6 col-md-12">
                <div className="welcome-content">
                  <div className="promo-section">
                    <div className="integration-link dark-int">
                      <div className="integration-icon">
                        <p className="badge">Update</p>
                      </div>
                      <span className="integration-text">Watch carefully YED Land Spot and real Metahuman</span>
                    </div>
                  </div>
                  <h1 className="big wow fadeInUp" data-wow-delay="0.2s">Acent Metaweb EDAO<br></br>
                   YED land spot <br></br> Meta Home NFT &amp; Cutting edge Extraordinary  NFTs</h1>
                  <p className="w-text wow fadeInUp" data-wow-delay="0.3s">This system is a internal NFT test site to verify by uploading it first before uploading it to an external NFT site.
                   <br>
                   </br>Anyone can easily upload it, I expect it will help you in your work.</p>
                  <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                    <Link to="/explore" className="btn dream-btn mr-3">Explore NFTs</Link>
                    <Link to="/mint" className="btn dream-btn"> Mint NFT</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default BannerSec;