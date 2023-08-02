import './StyleSheet/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Home } from './pages/home';
import { Gis } from './pages/gis';
import { About } from './pages/about';
import { Libraries } from './pages/governmentServices/libraries';
import { WomenPoliceStation } from './pages/governmentServices/womenPoliceStation';
import { FireStation } from './pages/governmentServices/firestation';
import { AgricultureOffices } from './pages/governmentServices/agricultureOffices(Beneficiary)';
import { CommunityHall } from './pages/governmentServices/communityHall';
import { GovArtCollege } from './pages/governmentServices/govArtCollege';
import { GovSchool } from './pages/governmentServices/govSchool';
import { GovSubsidizationProgramme } from './pages/governmentServices/govSubsidiZationProgramme';
import { MunicipalityOffice } from './pages/governmentServices/municipalityOffices'
import { PoliceStation } from './pages/governmentServices/policeStation';
import { PrimaryHealthCenter } from './pages/governmentServices/primaryHealthCenter';
import { ProposedMarketForFormers } from './pages/governmentServices/proposedMarketForFarmers'
import { RailwayStation } from './pages/governmentServices/railwayStation(water)';


function App() {
  return (
    <Router basename='/TN-Tenkasi'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/gis' element={<Gis />} />
          <Route path='/about' element={<About />} />
          <Route path='/gov/libraries' element={<Libraries />} />
          <Route path='/gov/womenpolicestation' element={<WomenPoliceStation />} />
          <Route path='/gov/firestation' element={<FireStation />} />
          <Route path='/gov/agricultureoffices' element={<AgricultureOffices />} />
          <Route path='/gov/communityhall' element={<CommunityHall />} />
          <Route path='/gov/govartcollege' element={<GovArtCollege />} />
          <Route path='/gov/govschool' element={<GovSchool />} />
          <Route path='/gov/govsubsidizationprogramme' element={<GovSubsidizationProgramme />} />
          <Route path='/gov/municipalityoffice' element={<MunicipalityOffice />} />
          <Route path='/gov/policestation' element={<PoliceStation />} />
          <Route path='/gov/primaryhealthcenter' element={<PrimaryHealthCenter />} />
          <Route path='/gov/proposedmarketforfarmers' element={<ProposedMarketForFormers />} />
          <Route path='/gov/railwaystation' element={<RailwayStation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
