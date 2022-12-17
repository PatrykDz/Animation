import React from 'react'
import styled from 'styled-components'
import { ReactComponent as GitBranchSvg } from './images/git-branch.svg'

const GitAnimation = () => {

    return (
        <div>
            <div>
                Git Animation
            </div>

            <StyledContainer>
                <StyledGitBranchSvg className={"animated"} />
            </StyledContainer>
        </div>
    )
}

const Container = (props: React.PropsWithChildren) => (
    <div>
        {props.children}
    </div>
)

const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledGitBranchSvg = styled(GitBranchSvg)`
    margin-top: 100px;
    // transform: rotate(-90deg) scale(0.5);

    .st7 {
        fill: red;

        cx: 400px;
        cy: 35px;
    }

    #upper-branch {
        d: path("M 264.5 74.2 c 0 22.6 -18.4 41 -41 41 m 41 -41 c 0 -22.6 18.4 -41 41 -41 h 160.4");
    }

    #upper-branch:hover {
            d: path("M 264.5 74.2 c 0 22.6 -18.4 41 -41 41 m 41 -41 c 0 -22.6 18.4 -41 41 -41 h 160.4");
    }
`;


export default GitAnimation