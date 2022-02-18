import CarouselComp from "./carousel";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 intro-text'>
              <CarouselComp />
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                {' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
