import { Image } from "./image";

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Most popular</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>

        <div className='row'>
          <div className="list col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='card col-md-4 col-lg-4 col-sm-6 col-xs-12'>
                  {' '}
                  <Image title={d.name} largeImage={d.img} smallImage={d.img} />
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p className="product-price">{d.text}</p>
                    <p>{d.description}</p>
                    <button className="btn-custom">Add to cart</button>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
    </div>
  )
}
