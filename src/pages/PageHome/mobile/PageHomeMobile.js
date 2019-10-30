// packages
import React from 'react'
import BannerTop from '../../../components/BannerTop/BannerTopMobile'
import Header from '../../../components/Header/HeaderMobile'
import BannerYellow from '../../../components/BannerYellow/BannerYellowMobile'
import Padding from '../../../components/Padding/Padding'
import SectionServices from '../../../components/SectionServices/SectionServicesMobile'
import ContentImagesInfo from '../../../components/ContentImagesInfo/ContentImagesInfoMobile'
import SectionAdvantages from '../../../components/SectionAdvantages/SectionAdvantagesMobile'
import BannerOurService from '../../../components/BannerOurService/BannerOurServiceMobile'
import SectionWhatDo from '../../../components/SectionWhatDo/SectionWhatDoMobile'
import Footer from '../../../components/Footer/FooterMobile'

const PageHomeMobile = () => (
  <div>
    <Header />
    <BannerTop />
    <BannerYellow />
    <Padding value={100} />
    <SectionServices />
    <Padding value={80} />
    <ContentImagesInfo />
    <Padding value={80} />
    <SectionAdvantages />
    <Padding value={80} />
    <BannerOurService />
    <Padding value={80} />
    <SectionWhatDo />
    <Padding value={80} />
    <Footer />
  </div>
)

export default React.memo(PageHomeMobile)
