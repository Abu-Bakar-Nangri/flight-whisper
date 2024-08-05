import React, { useState ,useEffect} from "react";
import CSS from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LocationMap from "../Location";
import FlightsSearch from "../../components/Home/FlighsSearch/FlightsSearch";
import TrendingCard from "../../components/Home/TrendingCountriesCard/TrendingCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Images/Flights Logo/pngwing.com (1).png";
import img2 from "../../Images/Flights Logo/pngwing.com (2).png";
import img3 from "../../Images/Flights Logo/pngwing.com (3).png";
import img4 from "../../Images/Flights Logo/pngwing.com (4).png";
import img5 from "../../Images/Flights Logo/pngwing.com (5).png";
import img6 from "../../Images/Flights Logo/pngwing.com (6).png";
import img7 from "../../Images/Flights Logo/pngwing.com (7).png";
import img8 from "../../Images/Flights Logo/pngwing.com (8).png";
import img9 from "../../Images/Flights Logo/pngwing.com (9).png";
import img10 from "../../Images/Flights Logo/pngwing.com (10).png";
import img11 from "../../Images/Flights Logo/pngwing.com (11).png";
import img12 from "../../Images/Flights Logo/pngwing.com (12).png";
import img13 from "../../Images/Flights Logo/pngwing.com (13).png";
import img14 from "../../Images/Flights Logo/pngwing.com (14).png";
import img15 from "../../Images/Flights Logo/pngwing.com (15).png";
import img16 from "../../Images/Flights Logo/pngwing.com (16).png";
import img17 from "../../Images/Flights Logo/pngwing.com (17).png";
import img18 from "../../Images/Flights Logo/pngwing.com (18).png";
import img19 from "../../Images/Flights Logo/pngwing.com (19).png";
import img20 from "../../Images/Flights Logo/pngwing.com (20).png";
import img21 from "../../Images/Flights Logo/pngwing.com (21).png";
import img22 from "../../Images/Flights Logo/pngwing.com (22).png";
import img23 from "../../Images/Flights Logo/pngwing.com (23).png";
import img24 from "../../Images/Flights Logo/pngwing.com (24).png";
import img25 from "../../Images/Flights Logo/pngwing.com (25).png";
import img26 from "../../Images/Flights Logo/pngwing.com (26).png";
import img27 from "../../Images/Flights Logo/pngwing.com (27).png";
import img28 from "../../Images/Flights Logo/pngwing.com (28).png";
import img29 from "../../Images/Flights Logo/pngwing.com (29).png";
import img30 from "../../Images/Flights Logo/pngwing.com (30).png";
import img31 from "../../Images/Flights Logo/pngwing.com (32).png";
import img32 from "../../Images/Flights Logo/pngwing.com (32).png";
import Accordion from "../../components/Home/Accordion/Accordion";

const places = [
  {
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    city: "Paris",
    country: "France",
  },
  {
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "New York",
    country: "USA",
  },
  {
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Tokyo",
    country: "Japan",
  },
  {
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    city: "Sydney",
    country: "Australia",
  },
  {
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "London",
    country: "United Kingdom",
  },
  {
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    city: "Barcelona",
    country: "Spain",
  },
  {
    img: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Berlin",
    country: "Germany",
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    city: "Moscow",
    country: "Russia",
  },
  {
    img: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Dubai",
    country: "UAE",
  },
  {
    img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Rome",
    country: "Italy",
  },
  {
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    img: "https://images.unsplash.com/photo-1512427691650-1e8d7e2bdb13",
    city: "Rio de Janeiro",
    country: "Brazil",
  },
  {
    img: "https://images.unsplash.com/photo-1570083428586-cdeaa9384856",
    city: "Cape Town",
    country: "South Africa",
  },
  {
    img: "https://images.unsplash.com/photo-1597753525469-b4e03e517b1d",
    city: "Hong Kong",
    country: "China",
  },
];

const HomePage = () => {
  const [range, setRange] = useState(6);
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleData = () => {
    setLoading(true);
    setTimeout(() => {
      setRange((prevRange) => prevRange + 3);
      setLoading(false);
    }, 1000);
  };

  const logos = [
    { imageUrl: img1, alt: "Logo 1" },
    { imageUrl: img2, alt: "Logo 2" },
    { imageUrl: img3, alt: "Logo 2" },
    { imageUrl: img4, alt: "Logo 2" },
    { imageUrl: img5, alt: "Logo 2" },
    { imageUrl: img6, alt: "Logo 2" },
    { imageUrl: img7, alt: "Logo 2" },
    { imageUrl: img8, alt: "Logo 2" },
    { imageUrl: img9, alt: "Logo 2" },
    { imageUrl: img10, alt: "Logo 2" },
    { imageUrl: img11, alt: "Logo 2" },
    { imageUrl: img12, alt: "Logo 2" },
    { imageUrl: img13, alt: "Logo 2" },
    { imageUrl: img14, alt: "Logo 2" },
    { imageUrl: img15, alt: "Logo 2" },
    { imageUrl: img16, alt: "Logo 2" },
    { imageUrl: img17, alt: "Logo 2" },
    { imageUrl: img18, alt: "Logo 2" },
    { imageUrl: img19, alt: "Logo 2" },
    { imageUrl: img20, alt: "Logo 2" },
    { imageUrl: img21, alt: "Logo 2" },
    { imageUrl: img22, alt: "Logo 2" },
    { imageUrl: img23, alt: "Logo 2" },
    { imageUrl: img24, alt: "Logo 2" },
    { imageUrl: img25, alt: "Logo 2" },
    { imageUrl: img26, alt: "Logo 2" },
    { imageUrl: img27, alt: "Logo 2" },
    { imageUrl: img28, alt: "Logo 2" },
    { imageUrl: img29, alt: "Logo 2" },
    { imageUrl: img30, alt: "Logo 2" },
    { imageUrl: img31, alt: "Logo 2" },
    { imageUrl: img32, alt: "Logo 2" },

    // Add more logos as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Number of logos to show at a time
    slidesToScroll: 1, // Number of logos to scroll per swipe
    autoplay: true,
    autoplaySpeed: 2000, // Interval for autoplay
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5, // Adjust as needed for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust as needed for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Adjust as needed for even smaller screens
        },
      },
    ],
  };

  return (
    <div>
      <div className={CSS["container-background"]}>
        <Header />
        <div className={`${CSS["flights-container"]} container mx-auto`}>
          <FlightsSearch />
        </div>
      </div>
      <div className={`${CSS["trending-container"]} container mx-auto`}>
        <h1>Trending Countries</h1>
        <TrendingCard places={places.slice(0, range)} />
      </div>
      <div className={`${CSS["Show-more-container"]} container mx-auto`}>
        <button onClick={handleData} disabled={loading}>
          {loading ? "Loading..." : "Show more"}
        </button>
      </div>
      <div className={`${CSS["trending-container"]} container mx-auto`}>
        <h1>Popular Destinations</h1>
        <TrendingCard places={places.slice(0, range)} />
      </div>

      <div className="container mx-auto px-4 mx-2">
        <h3 className={CSS["slider-header"]}>Popular Flight</h3>

        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div className={CSS["slider-items"]} key={index}>
              <div className={CSS["slider-item"]}>
                <img
                  src={logo.imageUrl}
                  alt={logo.alt}
                  className={CSS["slider-image"]}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={`${CSS["trending-container"]} container mx-auto py-2`}>
      <h1>Booking flights with FlightWhisper</h1>
        <Accordion />
      </div>
      <div className={`${CSS["trending-container"]} container mx-auto px-4 py-8 -z-9999`}>
      <LocationMap latitude={null} longitude={null} />
      </div>
      <Footer />
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className=" z-99999 fixed bottom-10 right-10 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default HomePage;
