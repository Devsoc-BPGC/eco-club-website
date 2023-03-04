import React from "react";
import PropTypes from 'prop-types'
import { Link } from "gatsby";

import { graphql } from "gatsby";

import Layout from '../components/Layout'

const ResourcesPage = ({
    title,
    links,
    blogs
}) => {
    return (
        <Layout>
            <div className="content">
                <h1 className="title is-1">{ title }</h1>
                <h2 className="title is-2">External Resources</h2>
                <ul style={{ listStyle: 'none' }}>
                    { links.map(link => <li key={ link.key }><Link to={ link.url } target="_blank">{ link.url }</Link></li>) }
                </ul>
                <h2 className="title is-2">Our Blogs</h2>
                <ul style={{ listStyle: 'none' }}>
                    { blogs.map(blog => <li key={ blog.key }><Link to={ `/blog/${ blog.blog }` }>{ blog.blog }</Link></li>) }
                </ul>
            </div>
        </Layout>
    )
}

ResourcesPage.propTypes = {
    title: PropTypes.string,
    links: PropTypes.object,
    blogs: PropTypes.object
};

const RenderedPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <ResourcesPage title={ frontmatter.title } links={ frontmatter.links } blogs={ frontmatter.blogs } />
    )
}

RenderedPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default RenderedPage;

export const renderedPageQuery = graphql`
    query ResourcesPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title,
                links {
                    key,
                    url
                },
                blogs {
                    key,
                    blog
                }
            }
        }
    }
`;
