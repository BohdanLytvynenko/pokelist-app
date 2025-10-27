import styled from 'styled-components';

export const H1 = styled.h1`
    text-transform: capitalize;
`;

export const PokemonDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints?.desktop}) {
        flex-direction: row;
        justify-content: space-between;
        gap: 60px;
        min-width: 900px;
    }
`;

export const PokemonImage = styled.img`
    width: 220px;
    height: 220px;
`;

export const TypesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 320px;
    width: 100%;
`;

export const Types = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    gap: 15px;
`;

export const StatName = styled.span`
    text-transform: capitalize;
`;

export const StatValue = styled.span`
    font-weight: bold;
`;

export const DetailSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 320px;
    width: 100%;
`;

export const Abilities = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`;

export const Characteristic = styled.span`
    background-color: ${props => props.$secondary ? props.theme?.colors?.bgSecondary : props.theme?.colors?.bgPrimary };
    padding: 7px 15px;
    border-radius: 10px;
    text-transform: capitalize;
    font-weight: bold;
`;

export const Loading = styled.div`
    margin-top: 50px;
    font-size: 35px;
    color: rgb(61, 231, 45);
    font-weight: 600;
    text-transform: uppercase;
`;
