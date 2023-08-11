import logo from './logo.svg';
import './App.css';

import {
  NavBarHeader2,
  HeroLayout2,
  MarketingPricing,
  Features2x2,
  CTASection,
  MarketingFooter
}  from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBarHeader2 width={"100vw"} />
      <HeroLayout2 width={"100vw"} />
      <MarketingPricing width={"100vw"} />
      <Features2x2 width={"100vw"} />
      <CTASection width={"100vw"} />
      <MarketingFooter width={"100vw"} />
    </div>
  );
}

export default App;
