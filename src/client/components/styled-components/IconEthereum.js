import React from 'react'
import PropTypes from 'prop-types'

const IconEthereum = props => (
  <svg width="34px" height="35px" viewBox="0 0 34 35" {...props}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fill={props.color} fillRule="nonzero">
        <g transform="translate(0.000000, 0.230701)">
          <path d="M17,0.131001277 C7.61972589,0.131001277 0,7.75072681 0,17.1310013 C0,26.5112757 7.61972589,34.1310013 17,34.1310013 C26.3802737,34.1310013 34,26.5112757 34,17.1310013 C34,7.75072681 26.3802737,0.131001277 17,0.131001277 Z M17,2.35440553 C25.16903,2.35440553 31.7765957,8.96196994 31.7765957,17.1310013 C31.7765957,25.3000189 25.16903,31.907597 17,31.907597 C8.83096969,31.907597 2.22340426,25.3000189 2.22340426,17.1310013 C2.22340426,8.96196994 8.83096969,2.35440553 17,2.35440553 Z M16.9499679,4.86109923 C16.8261271,4.87779188 16.7082203,4.96076335 16.6122509,5.09875191 C16.5990764,5.12272301 16.5865545,5.14776684 16.5747268,5.17380012 L10.1706127,16.3809999 C10.0565588,16.5797455 9.992443,16.8498124 9.992443,17.131482 C9.992443,17.4131516 10.0565588,17.6832185 10.1706127,17.8819641 L16.5747268,29.0891639 C16.8104472,29.4965896 17.1895528,29.4965896 17.4252732,29.0891639 L23.8293873,17.8819641 C23.9434412,17.6832185 24.007557,17.4131516 24.007557,17.131482 C24.007557,16.8498124 23.9434412,16.5797455 23.8293873,16.3809999 L17.4252732,5.17380012 C17.3006957,4.95266464 17.1269373,4.83834992 16.9499679,4.86109923 Z M17,8.78633151 L21.3736702,16.4402544 L17,18.7728785 L12.6263298,16.4402544 L17,8.78633151 Z M12.9145612,18.6863915 L16.6678505,20.6903601 C16.8755692,20.8005744 17.1244308,20.8005744 17.3321495,20.6903601 L21.0854388,18.6863915 L17,25.8276057 L12.9145612,18.6863915 Z" />
        </g>
      </g>
    </g>
  </svg>
)

IconEthereum.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

IconEthereum.defaultProps = {
  color: '#222',
  width: '34px',
  height: '35px',
}

export default IconEthereum
