import "./Home.css"
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Slide from "../../components/Slide/Slide";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

import SpicalOffer from "../../components/SpicalOffer/SpicalOffer";
 
 

import { products } from "../../Data/product";
import Brand from "../../components/Brand/Brand";
const Home = () => {
      const laptop = products.filter((lap) => lap.isLaptop === true);
      const mobile = products.filter((lap) => lap.isLaptop === false);
    return (
      <div>
        <Banner />
        <Category />
        <SpicalOffer />
        <HeadingTitle title="الجديد من اللابتوبات" />
        <Slide data={laptop} />
        <HeadingTitle title="الجديد من الجوالات" />
        <Slide data={mobile} />
        <HeadingTitle title="تسوق حسب الماركه" />

        <Brand />
      </div>
    );
}
export default Home;