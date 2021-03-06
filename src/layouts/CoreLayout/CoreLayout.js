import React from 'react'
import HeaderContainer from '../../containers/HeaderContainer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <HeaderContainer />
    <div className='container text-center'>
      <div className='core-layout__viewport'>
        {children}
      </div>
    </div>
  </div>

)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
