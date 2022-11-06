import { 
    CampaignContainer 
} from './campaign.styles';

const Campaign = ({campaign}) => {
    console.log("Hey i' here!");
    return(
        <CampaignContainer>
            {campaign}
            <p>View Campaign</p>
        </CampaignContainer>        
    );
};

export default Campaign;