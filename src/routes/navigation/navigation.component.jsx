import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { 
    LogoContainer, 
    NavigationContainer,
    NavLinks,
    NavLink
} from './navigation.styles';

const Navigation = () => {
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    CrowdCoin
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/'>
                        Campaigns
                    </NavLink>
                    <NavLink to='/'>
                        +
                    </NavLink>
                </NavLinks>                
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;