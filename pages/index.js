import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';  
import store from 'store-js'       
import ResourceListWithProducts from '../components/ResourceList'
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'

class Index extends React.Component {
  constructor() {
    super()
    this.handleSelection = this.handleSelection.bind(this)
  }
  state = { open: false };
  render() {
    const emptyState = !store.get('ids');
    return (
      <Page>
        <TitleBar
          title="Sample App"
          primaryAction= {
            {
              content: 'Select Products',
              onAction: () => this.setState({open: true}),
            }
          }
        />
        <ResourcePicker 
          resourceType = "Product"
          showVariants = {false} 
          open = {this.state.open} 
          onSelection = {(resource)=> this.handleSelection(resource)}
          onCancel ={()=> this.setState({ open: false })}
        />
        {emptyState ? 
          (<Layout>
            <EmptyState
              heading="Select products to start"
              action={{
                content: 'Select products',
                onAction: () => this.setState({ open: true }),
              }}
              image={img}
            >
              <p>Select products to change their price temporarily.</p>
            </EmptyState>
          </Layout>)
          :
          (<ResourceListWithProducts />)
        }
      </Page> 
    );
  }
  handleSelection (resource)  {
    const idsFromResources = resource.selection.map((product)=> product.id)
    this.setState({ open: false })
    store.set('ids', idsFromResources)
  }
}

export default Index