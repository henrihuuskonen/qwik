import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import {generateList} from "../../common/data";
import dynamic from "next/dynamic";
import {Suspense} from 'react';

const DynamicClock = dynamic(() => import('../components/clock'), {
    suspense: true,
})

interface HomeProps {
    list: { id: string }[]
}

const Home: NextPage<HomeProps> = ({list}) => {
    return (
        <div>
            <Head>
                <title>Welcome to Next.js</title>
            </Head>

            <main>
                <h1>
                    Next.js example
                </h1>

                <ul>
                    {list.map(el => {
                        return <li key={el.id}>{el.id}</li>
                    })}
                </ul>
                <Suspense fallback={`Loading...`}>
                    <DynamicClock/>
                </Suspense>

            </main>

            <footer>
            </footer>
        </div>
    )
}

export const getServerSideProps = (context: GetServerSideProps) => {
    return {
        props: {list: generateList()}, // will be passed to the page component as props
    }
}

export default Home
