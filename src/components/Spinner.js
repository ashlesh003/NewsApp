import React, { Component } from 'react'
import loading from './Rotating rings.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="mb-2" src={loading} alt={loading}></img>
      </div>
    )
  }
}