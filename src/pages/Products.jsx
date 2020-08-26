import React, { PureComponent } from 'react'
import Layout from '../components/Layout'




export class Products extends PureComponent {
    render() {
    return (
        <div>
            <div className={'imagen'}>
                <img alt={'product.image'} src={'product.image'} />
            </div>
            <div className={'description'}>
                <h1>{'product.name'}</h1>
                <p>{'product.description'}</p>
                <div>
                    ${'product.price'}
                </div>
                <button onClick={'history.goBack'}>
                    Go Back
                </button>
            </div>
        </div>
  //  <Redirect to="/NotFound" />
)
}
}

export default Products;