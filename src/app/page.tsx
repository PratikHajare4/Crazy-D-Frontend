import Image from "next/image";
import banner from '../../public/product-banner.jpg'
import Product from "./componets/Product";


export default function Home() {
  return (
  <>
   <div className="">
   <Image src={banner}  height="1000" placeholder='blur' alt='logo'  />

   <div className="m-10">
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   <Product/>
   </div>
   </div>

  </>
  );
}
