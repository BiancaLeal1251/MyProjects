import { Carousel } from 'react-carousel-minimal';

function CarouselComp() {
 const data = [
    {
      image: "./img/vegetables1.jpg",
      caption: "Freshiest vegetables!",
    },
    {
      image: "./img/vegetables2.jpg",
      caption: "Healthier lifestyle!",
    },
    {
      image: "./img/vegetables3.jpg",
      caption: "Best prices!",
    },
        
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselComp;