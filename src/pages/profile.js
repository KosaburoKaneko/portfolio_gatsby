import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import dimensions from 'styles/dimensions';
import Layout from 'components/Layout';
import colors from 'styles/colors';
import { RichText } from 'prismic-reactjs';
// import ProjectCard from "../components/ProjectCard";

// const Section = styled("div")`
//     margin-bottom: 8em;
//     display: flex;
//     flex-direction: column;

//     @media(max-width:${dimensions.maxwidthTablet}px) {
//         margin-bottom: 4em;
//     }

//     & ${Divider}:nth-of-type(1) hr { border: 2px solid ${colors.blue500}; }
//     & ${Divider}:nth-of-type(2) hr { border: 2px solid ${colors.orange500}; }
//     & ${Divider}:nth-of-type(3) hr { border: 2px solid ${colors.purple500}; }
//     & ${Divider}:nth-of-type(4) hr { border: 2px solid ${colors.green500}; }
//     & ${Divider}:nth-of-type(5) hr { border: 2px solid ${colors.teal500}; }

//     &:last-of-type {
//         margin-bottom: 0;
//     }
// `

const SectionTitle = styled('h1')`
    margin-bottom: 1em;
`;

// const SectionSubTitle = styled("h3")`
//     margin-top: 2.5em;
// `

// const SectionTerm = styled("div")`
//     color: #a9aaab;
// `

const Divider = styled('hr')`
    border: 2px solid;
    width: 2em;
    margin-top: 2em;
    bottom: 20px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
`;

const ProfileCardContainer = styled('div')`
    display: grid;
    grid-template-columns: 4fr 7fr;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    margin-bottom: 4em;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media(max-width:950px) {
        grid-template-columns: 4.5fr 7fr;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr;
    }

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2em;
    }

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
        transition: all 150ms ease-in-out;

        .ProfileCardAction {
            color: ${colors.blue500};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }

        .ProfileCardContent::before {
            opacity: 0.02;
            transition: all 150ms ease-in-out;
        }

        .ProfileCardImageContainer::before {
            opacity: 0.2;
            transition: all 150ms ease-in-out;
        }
    }
`;

const ProfileCardContent = styled('div')`
    background: white;
    padding: 3.3em 3em 2.25em 3em;
    position: relative;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    @media(max-width:950px) {
        padding: 3.25em 2.5em 2em 2.5em;
    }
`;
const ProfileCardTextContainer = styled('div')`
    position: relative;
    background: ${colors.grey200};
    padding: 2em 3em 2.25em 3em;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }
`;

const ProfileCardCategory = styled('h6')`
    font-weight: 600;
    color: ${colors.grey600};
`;

const ProfileCardTitle = styled('h3')`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
`;

// const ProfileCardBlurb = styled("div")`
//     margin-bottom: 0.5em;
//     margin-top: 0.5em;
//     margin-bottom: 5em;

//     @media(max-width:${dimensions.maxwidthTablet}px) {
//         margin-bottom: 2.5em;
//     }
// `

// const ProfileCardAction = styled("div")`
//     font-weight: 600;
//     text-decoration: none;
//     color: currentColor;
//     transition: all 150ms ease-in-out;

//     span {
//         margin-left: 1em;
//         transform: translateX(-8px);
//         display: inline-block;
//         transition: transform 400ms ease-in-out;
//     }
// `


const Profile = ({ profile, meta }) => (
    <>
        <Helmet
            title={'Profile | Kosaburo\'s portfolio'}
            titleTemplate={'%s | Profile | Kosaburo\'s portfolio'}
            meta={[
                {
                    name: 'description',
                    content: meta.description,
                },
                {
                    property: 'og:title',
                    content: 'Profile | Prist, Gatsby & Prismic Starter',
                },
                {
                    property: 'og:description',
                    content: meta.description,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: meta.author,
                },
                {
                    name: 'twitter:title',
                    content: meta.title,
                },
                {
                    name: 'twitter:description',
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Layout>
            {/* <Section>
                <SectionTitle>
                    {profile.experience_title[0].text}
                </SectionTitle>
                {profile.experience_inner.reverse().map((item) => (
                    <>
                        <SectionSubTitle>
                            {item.experience_subtitle[0].text}
                            <Divider />
                        </SectionSubTitle>
                        <SectionTerm>
                            {item.experience_term[0].text}
                        </SectionTerm>
                        {item.experience_body[0].text}
                    </>
                ))}
            </Section>
            <Section>
                <SectionTitle>
                    {profile.education_title[0].text}
                </SectionTitle>
                <SectionSubTitle>
                    {profile.education_sub_title[0].text}
                    <Divider />
                </SectionSubTitle>
                <SectionTerm>
                    {profile.education_term[0].text}
                </SectionTerm>
                {profile.education_body[0].text}
            </Section> */}
            <SectionTitle>
                {profile.experience_title[0].text}
            </SectionTitle>
            {profile.experience_inner.reverse().map((item) => (
                <ProfileCardContainer>
                    <ProfileCardContent className="ProfileCardContent">
                        <ProfileCardCategory>
                            {item.experience_term[0].text}
                        </ProfileCardCategory>
                        <ProfileCardTitle>
                            {item.experience_subtitle[0].text}
                        </ProfileCardTitle>
                    </ProfileCardContent>
                    <ProfileCardTextContainer>
                        {RichText.render(item.experience_body)}
                        <Divider />
                    </ProfileCardTextContainer>
                </ProfileCardContainer>
            ))}

        </Layout>
    </>
);

export default ({ data }) => {
    const profile = data.prismic.allProfiles.edges[0].node;
    const meta = data.site.siteMetadata;
    // TODO: 消す
    console.log('profile :', profile);
    console.log('meta :', meta);
    if (!profile) return null;

    return (
        <Profile profile={profile} meta={meta} />
    );
};

Profile.propTypes = {
    Profiles: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allProfiles {
                edges {
                    node {
                        profile_title
                        education_title
                        education_sub_title
                        education_term
                        education_body
                        experience_title
                        _linkType
                        experience_inner {
                            experience_body
                            experience_subtitle
                            experience_term
                        }
                    }
                
                }
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;
