// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchedResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="Container">
        <h1>Destination Search</h1>
        <div className="searchContainer">
          <input
            type="search"
            onChange={this.onSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIcon"
          />
        </div>
        <ul>
          {searchedResults.map(eachDestination => (
            <DestinationItem
              destinationsList={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
