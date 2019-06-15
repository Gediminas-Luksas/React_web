import React from 'react'
import PropTypes from 'prop-types'

const InlineError = ({ text }) => <samp style={{ color: "#ae5856" }}>{ text }</samp>

InlineError.propTypes = {
    text: PropTypes.string.isRequired
}

export default InlineError;