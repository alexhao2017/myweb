import React from 'react'
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import { connect } from 'react-redux'
import {Loader} from '../components/Loader'
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
         { this.props.blog.loading
    ? <Loader className="has-text-primary"></Loader>
    : <PageContent>
        { this.props.blog.posts.map(({fields}, i) =>
          <BlogItem key={i} {...fields} />
        )}
      </PageContent>}
      </div>
        )
      }
    }

   function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}
export default connect(mapStateToProps)(Blog)