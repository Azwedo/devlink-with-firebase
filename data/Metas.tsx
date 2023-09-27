import Head from "next/head"

export const GlobalMetaTags = (props) => {
    const { title, description} = props;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    )
}