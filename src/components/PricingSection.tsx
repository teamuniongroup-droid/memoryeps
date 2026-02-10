import { motion } from "framer-motion"; import { CircleCheck, Gift } from "lucide-react"; import PricingBanner from "./PricingBanner"; import bottles2 from "@/assets/brainxcell-2-bottles.png"; import bottles6 from "@/assets/brainxcell-6-bottles.png"; import bottles3 from "@/assets/brainxcell-3-bottles.png"; import bottles2Mobile from "@/assets/brainxcell-2-bottles-mobile.png"; import bottles3Mobile from "@/assets/brainxcell-3-bottles-mobile.png"; import bottles6Mobile from "@/assets/brainxcell-6-bottles-mobile.png"; import paymentCards from "@/assets/payment-cards.png";

interface PackageProps { title: string; bottles: number; supply: string; originalPrice: number; salePrice: number; perBottle: number; originalPerBottle: number; savings: string; discount: string; features: string[]; isBestValue?: boolean; isGoodValue?: boolean; hasShipping?: boolean; shippingCost?: string; image: string; mobileImage: string; hasSurprise?: boolean; checkoutUrl: string; mobileOrder?: string; }

const PackageCard = ({ title, bottles, supply, originalPrice, salePrice, perBottle, originalPerBottle, savings, discount, features, isBestValue, isGoodValue, hasShipping, shippingCost, image, mobileImage, hasSurprise, checkoutUrl, mobileOrder, }: PackageProps) => {

const getCardBackground = () => { if (isBestValue) return "bg-gradient-radial"; if (isGoodValue) return "bg-white"; return "bg-white"; };

const getHeaderStyle = () => { return "bg-black text-white"; };

const isLight = !isBestValue; const textColor = isLight ? "text-gray-900" : "text-white"; const subTextColor = isLight ? "text-gray-600" : "text-gray-200";

const getPriceColor = () => { if (isBestValue) return "text-[#22c55e]"; return "text-[#facc15]"; };

const getButtonStyle = () => { if (isBestValue) return "bg-[#22c55e] hover:bg-[#16a34a] text-white"; return "bg-gray-200 hover:bg-gray-300 text-gray-900"; };

return (

  {/* Header Badge */}
  


    {isBestValue ? "BEST VALUE!" : title}
  



  


    {/* Mobile: Two Column Layout */}
    


      {/* Left Column: Title + Image */}
      


        


          {isBestValue ? "BUY 3 GET + 3 FREE" : `${bottles} BOTTLES`}
        


        
{supply} Supply

      {/* Right Column: Price + Features */}
      


        {/* Price */}
        


          


            
              ${perBottle}
            
            PER
BOTTLE

              Total: ${originalPrice} ${salePrice}
            


            
              
            
          


        



        {/* Shipping */}
        


          {hasShipping ? (
            
${shippingCost} SHIPPING

        ) : (
          
FREE SHIPPING

          )}
        



        {/* Features */}
        


          


            
            
              YOU SAVE {savings}!
            
          


          


            
            {discount} DISCOUNT
          


          {features.map((feature, i) => (
            


              
              {feature}
            


          ))}
          


            
            60 DAY GUARANTEE
          


          {hasSurprise && (
            


              
              +SURPRISE 🎁
            


          )}
        


      


    



    {/* Desktop Layout */}
    


      {/* Title */}
      


        


          {isBestValue ? "BUY 3 GET + 3 FREE" : `${bottles} BOTTLES`}
        


        
{supply} Supply

      {/* Product Image */}
      


        
      



      {/* Main Price */}
      


        


          
            ${perBottle}
          
          PER
BOTTLE

            Total: ${originalPrice} ${salePrice}
          


          
            
          
          @keyframes pencilCircle {
              0% {
                stroke-dashoffset: 300;
                opacity: 1;
              }
              25% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
              75% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
              90% {
                stroke-dashoffset: 0;
                opacity: 0;
              }
              100% {
                stroke-dashoffset: 300;
                opacity: 0;
              }
            }
            .animate-pencil-circle {
              animation: pencilCircle 5s ease-in-out infinite;
            }
          `}
        
      

      {/* Shipping */}
      


        {hasShipping ? (
          
${shippingCost} SHIPPING

      ) : isBestValue ? (
        
FREE SHIPPING

        ) : (
          
FREE SHIPPING

        )}
      



      {/* Features */}
      


        


          
          
            YOU SAVE {savings}!
          
        


        {features.map((feature, i) => (
          


            
            {feature}
          


        ))}
        


          
          {discount} DISCOUNT
        


        


          
          60 DAYS GUARANTEE
        


      



      {/* Surprise */}
      {hasSurprise && (
        


          
            +SURPRISE 🎁
          
        


      )}
    

    {/* CTA Button */}
    
      BUY NOW
    

    {/* Payment Icons */}
    


      
    



    {/* Order now */}
    


      


        📦 Order now & receive by {(() => {
          const d = new Date();
          d.setDate(d.getDate() + 4);
          return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        })()}!
      


    


  
); };

const PricingSection = () => { const packages: PackageProps[] = [ { title: "Basic", bottles: 2, supply: "60 Day", originalPrice: 198, salePrice: 158, perBottle: 79, originalPerBottle: 217, savings: "$40", discount: "20%", features: [], hasShipping: true, shippingCost: "9.99", image: bottles2, mobileImage: bottles2Mobile, checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197776361:1?afid=RuSaUZ4RKO", mobileOrder: "order-3 md:order-1", }, { title: "Best Value", bottles: 6, supply: "180 Day", originalPrice: 588, salePrice: 294, perBottle: 49, originalPerBottle: 588, savings: "$294", discount: "50%", features: ["3 FREE BOTTLES"], isBestValue: true, hasSurprise: true, image: bottles6, mobileImage: bottles6Mobile, checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197777036:1?afid=RuSaUZ4RKO", mobileOrder: "order-1 md:order-2", }, { title: "Good value!", bottles: 3, supply: "90 Day", originalPrice: 297, salePrice: 207, perBottle: 69, originalPerBottle: 392, savings: "$90", discount: "30%", features: ["1 FREE BOTTLE"], isGoodValue: true, image: bottles3, mobileImage: bottles3Mobile, checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197776654:1?afid=RuSaUZ4RKO", mobileOrder: "order-2 md:order-3", }, ];

return (

    {/* Pricing Banner */}
    

    {/* Packages Grid */}
    


      {packages.map((pkg, index) => (
        
      ))}
    


  


); };

export default PricingSection;
