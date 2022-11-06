import { createContext, useState, useEffect } from 'react';
import factory from '../ethereum/factory';

export const CampaignContext = createContext({
    campaigns: []
});

export const CampaignProvider = ({children}) => {
    const [campaigns, setCampaigns] = useState({});

    useEffect(()=>{
        const getCampaigns = async () => {
            const campaigns = await factory.methods.getDeployedCampaigns().call();
            console.log('CONTEXT campaigns', campaigns);
            setCampaigns(campaigns);
        }
        getCampaigns();
    },[]);
    
    const value = {campaigns};
    return(
        <CampaignContext.Provider value={value}>{children}</CampaignContext.Provider>
    );
}