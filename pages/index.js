import Head from 'next/head'
import Footer from '../components/footer/footer.component'
import Navbar from '../components/navbar/navbar.component'
import Products from '../components/product/product.component'


export default function Home() {
//  test shittttt
  return (
    <>
      <Head>
        <title>Sun Shop | </title>
        <link rel="favicon" href=""/>
      </Head>
      <Navbar/>
      <Products />
      <Footer />
    </>
  )
}
