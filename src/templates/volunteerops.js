import React from "react";
import PropTypes from 'prop-types'

import '../styles/volunteer.css'

import { graphql } from "gatsby";

import Layout from '../components/Layout';

// TODO: Fix the names for the components

const VolunteerPage = ({
    title,
    description,
    points
}) => {
    return (
        <Layout>
            <div className="content outer">
                <div className="inner">
                    <h1 className="title is-1">{ title }</h1>
                    <div>
                        <p>{ description }</p>
                        <ol>
                            { points.map(({ point }) => <li key={ point.key }><strong>{point.title}:</strong> {point.description}</li>)}
                        </ol>
                        <div>
                            If you're interested in volunteering with us, please contact
                            <ul style={{ listStyle: 'none' }}>
                                <li>Rohit: +91 94439 09004</li>
                                <li>Megh: +91 83104 28703</li>
                            </ul>
                            Or drop a message in the contact section.<br/>
                            We look forward to working with you to create a better world for future generations.
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

VolunteerPage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    points: PropTypes.array
};

const ProductPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <VolunteerPage title={ frontmatter.title } description={ frontmatter.description } points={ frontmatter.points } />
    );
}

ProductPage.propTypes = {
data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
    }),
}),
};
  
export default ProductPage;

export const productPageQuery = graphql`
    query VolunteerPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title,
                description,
                points {
                    point {
                        key,
                        title,
                        description
                    }
                }
            }
        }
    }
`
