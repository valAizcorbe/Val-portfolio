import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: row-reverse;
position: relative;
&& {
        @media (max-width: 950px){
            flex-direction: column;
        }
    }


`