import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import  { Card, ResourceItem, ResourceList } from '@shopify/polaris' 
import store from 'store-js'

const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

class ResourceListWithProducts extends React.Component {
    render () {
        return (
            <Query 
              query = {GET_PRODUCTS_BY_ID} 
              variables = {{ids:store.get('ids')}}
            >
                {({data, loading, error})=> {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>{error.message}</div>; 
                    else {
                        console.log(data);
                        return (
                            <Card>
                                <p> stuff</p>
                            </Card>
                        )
                    }
                }}
            </Query>
        )
    }
}

export default ResourceListWithProducts;