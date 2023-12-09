import Navbar from './components/global-components/navbar';
import Banner from './components/section-components/banner';
import SearchForm from './components/section-components/search-form';
import Aboutv1 from './components/section-components/about-v1';
import Counter from './components/section-components/counter-v1';
import AboutV2 from './components/section-components/about-v2';
import Featuresv1 from './components/section-components/features-v1';
import ProSlider from './components/section-components/product-slider-v1';
import Apartment from './components/section-components/apartment-v1';
import VideoV1 from './components/section-components/video-v1';
import Category from './components/section-components/category-v1';
import Testimonial from './components/section-components/testimonial-v1';
import BlogSlider from './components/blog-components/blog-slider-v1';
import CallToActionV1 from './components/section-components/call-to-action-v1';
import Footer from './components/global-components/footer';

const Home_v1 = () => {
  return (
    <main>
        <Navbar/>
        <Banner />
        <SearchForm />
        <Aboutv1 />
        <Counter />
        <AboutV2 />
        <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <ProSlider />
        <Apartment />
        <VideoV1 />
        <Category />
        <Testimonial />
        <BlogSlider customClass="section-subtitle-2"/>
        <CallToActionV1 />
        <Footer />
    </main>
  )
}

export default Home_v1;