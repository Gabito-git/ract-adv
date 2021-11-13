import { lazy, LazyExoticComponent } from "react";


type JSXComponent = () => JSX.Element

interface Route{
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    children?: Route[]
}

// Definición de carga de componentes de manera lazy 

const LazyPage1 = lazy(() => import(/* webpackChunkName:"LazyPage1" */'../01-lazyload/pages/LazyPage1'))
const LazyPage2 = lazy(() => import(/* webpackChunkName:"LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const LazyPage3 = lazy(() => import(/* webpackChunkName:"LazyPage3" */'../01-lazyload/pages/LazyPage3'))

export const routes:Route[] = [
    {
        path: '/Lazy1',
        Component: LazyPage1,
        name: 'LazyPage-1'
    },
    {
        path: '/Lazy2',
        Component: LazyPage2,
        name: 'LazyPage-2'
    },
    {
        path: '/Lazy3',
        Component: LazyPage3,
        name: 'LazyPage-3'
    }
]