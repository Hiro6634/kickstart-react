import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import NewCampaign from './routes/new-campaign/new-campaign.component';

const  App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/new' element={<NewCampaign/>}/>
      </Route>
    </Routes>
  );
}

export default App;
