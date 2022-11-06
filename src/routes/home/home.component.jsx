import { Outlet } from 'react-router-dom';

import Campaigns from '../../components/campaigns/campaigns.component';

const Home = () => {
    return(
        <div>
            <Campaigns/>
            <Outlet/>
        </div>
    );
};

export default Home;