import React from 'react';
import Icon1 from '../../images/img(1).svg';
import Icon2 from '../../images/img.svg';
import Icon3 from '../../images/img(2).svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard , ServicesIcon, ServicesH2 , ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="types">
        <ServicesH1>
            Overview
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Build</ServicesH2>
                <ServicesP>Help to build different Turing Machine as per the requirment and run on the stirng either input by the user.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Login</ServicesH2>
                <ServicesP>Each user have their own personal dashboard were they can save and run the projects build by them as well as the projects saved public by others. 
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Manage</ServicesH2>
                <ServicesP>Each projects which the user build can be managed by the user as either the files can be public or private, which provide accessibility for others.

                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services