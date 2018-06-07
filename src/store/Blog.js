import * as contentful from 'contentful'
import * as actions from './blog/actions'
const client = contentful.createClient({
  space: 'xche690pbrqv',
  accessToken: 'b116f8156897c9c7ff3bfd3fd9c2c3148b694fd1244a65b2ddccf23fbb53e3a2'
})
const error = err => console.log(err)
export function loadBlog() {
    return dispatch => {
      dispatch(actions.blogLoading())
      return client.getEntries()
        .then(({items}) => {
          dispatch(actions.loadBlogSuccess(items))
        })
        .catch(error => {
          console.log(error)
          dispatch(actions.blogLoading(false))
        })
    }
  }