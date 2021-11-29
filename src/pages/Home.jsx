import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, { SectionBody } from '../components/Section'
import banner from '../assets/images/banner.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../components/ProductCard';


const Home = () => {

    return (
        <Helmet title="Página inicial">
            {}
            <HeroSlider
            data={heroSliderData}
            control={true}
            auto={false}
            timeOut={5000}
            />
            {}
            <ProductCard/>
            <Section>
                <SectionBody>
                    <Link to="api/produtosCategoria/2">
                        <img src={banner} alt="Banner de promoção" />
                    </Link>
                </SectionBody>
            </Section>

           


        </Helmet>
    )
}

export default Home

