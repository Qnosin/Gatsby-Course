import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/Layout'
import {portfolio} from '../../styles/projects.module.css';
import { projects } from '../../styles/projects.module.css';
export default function Projects({data}) {
    const  projectsData = data.allMarkdownRemark.nodes
  return (
    <Layout>
    <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & websites i created</h3>
        <div className={projects}>
            {projectsData.map((project)=>{
                return(
                    <Link to={`/projects/${project.frontmatter.slug}`} key={project.id} >
                        <div>
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.stack}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
    </Layout>
  )
}

export const query = graphql `
query ProjectPage{ 
    allMarkdownRemark {
      nodes {
        frontmatter {
          stack
          title
        }
        id
      }
    }
    site{
        siteMetadata{
            contact
        }
    }
  }  
`
