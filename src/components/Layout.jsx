import React from 'react'
import Header from './header'

function Layout(props) {
    return (
        <main>
            <Header />
            {props.children}
        </main>
    )
}

export default Layout
