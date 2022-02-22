
import QA from "./QA/index.js"
import React, { useContext, useState } from "react";
import Token from '/Users/alexmnahas/Elm-Catwalk/client/config.js'
import RatingsReviewsSection from './Ratings&Reviews/RatingsReviewsSection.jsx'
import axios from 'axios';
import Overview from "./Overview/Overview.jsx";
import RelatedItemsAndComparison from "./RelatedProductsList/relatedItemsAndComparison.jsx";
import { AppContext } from "./context.js";
// const App = () => {
//    return (
//       <div>



//    </div>);
// }
// import React, { useContext, useState } from "react";
// import Overview from "./Overview/Overview.jsx";

const AppProvider = (props) => {
   const [test, testUpdater] = useState(5);
   const [currentProductId, setCurrentProductId] = useState(37311);
   const [currentProduct, setCurrentProduct] = useState({});
   const [productList, setProductList] = useState([]);
   const [currentStyle, setCurrentStyle] = useState({});
   const [currentStylePhoto, setCurrentStylePhoto] = useState('');
   const [currentStyleThumbnails, setCurrentStyleThumbnails] = useState([]);
   const [styleList, setStyleList] = useState([]);
   const [user, setUser] = useState({});
   const [relatedProductsInfo, setRelatedProductsInfo] = useState([]);

   // ! Cheryl
   const [recommend, setRecommend] = useState(false);
   const[meta, setMeta] = useState ([]);
   const[product, setProduct] = useState({});
   const [rating, setRating] = useState(0);
   const [summary, setSummary] = useState('');
   const [body, setBody] = useState('');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [characteristic, setCharacteristic] = useState({});
   const [selectedratings, setSelectedRatings] = useState([])
   const [productresults, setProductResults] = useState([])
   const [average, setAverage] = useState(0);
   // ! Cheryl

   return (
      <AppContext.Provider value={{
         test, testUpdater,
         currentProductId, setCurrentProductId,
         currentProduct, setCurrentProduct,
         productList, setProductList,
         currentStyle, setCurrentStyle,
         currentStylePhoto, setCurrentStylePhoto,
         currentStyleThumbnails, setCurrentStyleThumbnails,
         styleList, setStyleList,
         user, setUser,
         relatedProductsInfo, setRelatedProductsInfo,

         // ! Cheryl
         recommend, setRecommend,
         meta, setMeta,
         product, setProduct,
         rating, setRating,
         summary, setSummary,
         body, setBody,
         name, setName,
         email, setEmail,
         characteristic, setCharacteristic,
         selectedratings, setSelectedRatings,
         productresults, setProductResults,
         average, setAverage,
         // ! Cheryl
         }}>
         {props.children}
      </AppContext.Provider>
   )
}

function App() {
   return (
      <AppProvider>
         <Overview />
         <QA/>
         <RelatedItemsAndComparison/>
         <RatingsReviewsSection/>
      </AppProvider>
   )
}

export default App;
//       )
//    }
// };


