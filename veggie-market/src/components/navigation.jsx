export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header col-md-12 col-lg-12 col-sm-12 col-xs-12'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <div> 
          <a className='navbar-brand page-scroll' href='#page-top'>
            Veggie Market
          </a>{' '}
        </div>
        <div className="search col-md-8 col-lg-8 col-sm-8 col-xs-12">
        <input
        type='text'
        id='name'
        name='name'
        className='form-control'
        placeholder='Find a product'
                        
        />
        <button className="btn">OK</button>
        </div>
        </div>
        <div
          className='collapse navbar-collapse col-md-12 col-lg-12 col-sm-12 col-xs-12'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/vegetables' className='page-scroll'>
              Vegetables
              </a>
            </li>
            <li>
              <a href='/cereals' className='page-scroll'>
              Cereals
              </a>
            </li>
            <li>
              <a href='/pasta' className='page-scroll'>
              Pasta
              </a>
            </li>
            <li>
              <a href='/suplements' className='page-scroll'>
              Suplements
              </a>
            </li>
            <li>
              <a href='/proteins' className='page-scroll'>
              Proteins
              </a>
            </li>
            <li>
              <a href='/sweets' className='page-scroll'>
              Sweets
              </a>
            </li>
            <li>
              <a href='/beverages' className='page-scroll'>
              Beverages
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
