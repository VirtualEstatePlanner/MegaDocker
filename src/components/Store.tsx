import React from 'react'

const initialState = {}

export const Store = React.createContext(initialState)

function reducer() {

}

export function StoreProvider(props: any): JSX.Element {
    return <Store.Provider value="test">{props.children}</Store.Provider>
}