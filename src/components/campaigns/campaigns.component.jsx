import React, { useContext } from 'react';
import { CampaignContext } from '../../context/campaigns.context';
import Campaign from '../campaign/campaign.component';

const Campaigns = () => {
    const { campaigns} = useContext(CampaignContext);
    console.log('Campaigns.Component',campaigns);
    return(
        <div>
            <h2>Open Campaigns</h2>
            {
                campaigns.length ? (campaigns.map((campaign)=>(
                    <Campaign campaign={campaign}/>))
                ):(null)
                 
            }
        </div>
    );
}

export default Campaigns;