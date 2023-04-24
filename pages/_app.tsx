import { AppProps } from 'next/app'
import MainLayout from '../app/layout'
import { Fragment } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Fragment>
    )
}

export default MyApp