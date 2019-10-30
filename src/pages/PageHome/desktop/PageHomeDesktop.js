// packages
import React from 'react'
import s from './pageHomeDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import BannerTop from '../../../components/BannerTop/BannerTop'
import BannerYellow from '../../../components/BannerYellow/BannerYellow'
import Padding from '../../../components/Padding/Padding'
import SectionServices from '../../../components/SectionServices/SectionServices'
import SectionAdvantages from '../../../components/SectionAdvantages/SectionAdvantages'
import ContentImagesInfo from '../../../components/ContentImagesInfo/ContentImagesInfo'
import BannerOurService from '../../../components/BannerOurService/BannerOurService'
import Footer from '../../../components/Footer/Footer'
import Header from '../../../components/Header/Header'
import SectionWhatDo from '../../../components/SectionWhatDo/SectionWhatDo'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <Header />
    <BannerTop />
    <Layout >
      <BannerYellow />
      <Padding value={100} />
      <SectionServices />
    </Layout>
    <Padding value={160} />
    <ContentImagesInfo />
    <Padding value={250} />
    <Layout>
      <SectionAdvantages />
    </Layout>
    <Padding value={100} />
    <BannerOurService />
    <Padding value={160} />
    <Layout>
      <SectionWhatDo />
    </Layout>
    <Padding value={100} />
    <Footer />
  </div>
)

export default React.memo(PageHomeDesktop)
