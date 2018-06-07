import React from 'react'
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'

class Blog extends React.Component {
    state = {
      posts: []
    }
    client = contentful.createClient({
      space: 'xche690pbrqv',
      accessToken: 'b116f8156897c9c7ff3bfd3fd9c2c3148b694fd1244a65b2ddccf23fbb53e3a2'
    })
    componentDidMount() {
      this.fetchPosts().then(this.setPosts);
    }
    fetchPosts = () => this.client.getEntries()
    setPosts = response => {
        this.setState({
          posts: response.items
        })
      }
      render() {
        return (
            <div style={{backgroundColor:'orange'}}>
          <PageHeader color="is-warning" title="Everyday coding">
         </PageHeader>
          { this.state.posts.map(({fields}, i) =>
          <BlogItem key={i} {...fields} />
      )}
      </div>
        )
      }
    }
    export default Blog