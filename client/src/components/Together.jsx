import React from 'react';
import PropTypes from 'prop-types';

class Together extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: this.props.games[0].price + this.props.games[1].price + this.props.games[2].price,
      gameZeroChecked: true,
      gameOneChecked: true,
      gameTwoChecked: true,
      totalChecked: 3,
      phrase: 'all 3 '
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.setPhrase = this.setPhrase.bind(this);
  }

  changeHandler(e) {
    if (e.target.name === 'zero') {
      if (this.state.gameZeroChecked) {
        this.setState({
          total: parseFloat((this.state.total - this.props.games[0].price).toFixed(2)),
          gameZeroChecked: false,
          totalChecked: this.state.totalChecked - 1
        }, this.setPhrase);
      } else {
        this.setState({
          total: parseFloat((this.state.total + this.props.games[0].price).toFixed(2)),
          gameZeroChecked: true,
          totalChecked: this.state.totalChecked + 1
        }, this.setPhrase);
      }
    } else if (e.target.name === 'one') {
      if (this.state.gameOneChecked) {
        this.setState({
          total: parseFloat((this.state.total - this.props.games[1].price).toFixed(2)),
          gameOneChecked: false,
          totalChecked: this.state.totalChecked - 1
        }, this.setPhrase);
      } else {
        this.setState({
          total: parseFloat((this.state.total + this.props.games[1].price).toFixed(2)),
          gameOneChecked: true,
          totalChecked: this.state.totalChecked + 1
        }, this.setPhrase);
      }
    } else if (e.target.name === 'two') {
      if (this.state.gameTwoChecked) {
        this.setState({
          total: parseFloat((this.state.total - this.props.games[2].price).toFixed(2)),
          gameTwoChecked: false,
          totalChecked: this.state.totalChecked - 1
        }, this.setPhrase);
      } else {
        this.setState({
          total: parseFloat((this.state.total + this.props.games[2].price).toFixed(2)),
          gameTwoChecked: true,
          totalChecked: this.state.totalChecked + 1
        }, this.setPhrase);
      }
    }
  }

  setPhrase() {
    if (this.state.totalChecked === 1) {
      this.setState({
        phrase: ''
      })
    } else if (this.state.totalChecked === 2) {
      this.setState({
        phrase: 'both '
      })
    } else if (this.state.totalChecked === 3) {
      this.setState({
        phrase: 'all 3 '
      })
    }
  }

  render() {
    const gameStyle = { borderRadius: "1%", backgroundColor: "rgb(255, 255, 255)", display: "inline-block", padding: "15px 5px", width: "150px", height: "100%"};
    const nameStyle = { height: "23%", textAlign: "center", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" };

    return (
      <div style={{ backgroundColor: "rgb(247, 247, 247)", display: "block", margin: "20px auto", width: "100%" }}>
        <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", maxWidth: "900px", width: "100%", margin: "0px auto" }}>
          <h2 style={{ width: "100%", textAlign: "center"}}>Frequently bought together</h2>
          <div>
            <div style={gameStyle}>
              <div>
                {console.log('games:', this.props.games[0])}
                <img src={this.props.games[0].imgurl} style={{ width: "100%" }} />
              </div>
              <p style={{ fontWeight: "bold", textAlign: "center" }}>{this.props.games[0].price}</p>
              <p style={nameStyle}>{this.props.games[0].item}</p>
              <input type="checkbox" name="zero" onChange={this.changeHandler} checked={this.state.gameZeroChecked} ></input>
            </div>
            <div style={{ display: "inline-block", margin: "0px 10px", transform: "translate(0px, -150px)", fontSize: "36px" }}>&#43;</div>
            <div style={gameStyle}>
              <div>
                <img src={this.props.games[1].imgurl} style={{ width: "100%" }} />
              </div>
              <p style={{ fontWeight: "bold", textAlign: "center" }}>{this.props.games[1].price}</p>
              <p style={nameStyle}>{this.props.games[1].item}</p>
              <input type="checkbox" name="one" onChange={this.changeHandler} checked={this.state.gameOneChecked} ></input>
            </div>
            <div style={{ display: "inline-block", margin: "0px 10px", transform: "translate(0px, -150px)", fontSize: "36px" }} >&#43;</div>
            <div style={gameStyle}>
              <div>
                <img src={this.props.games[2].imgurl} style={{ width: "100%" }} />
              </div>
              <p style={{ fontWeight: "bold", textAlign: "center" }}>{this.props.games[2].price}</p>
              <p style={nameStyle}>{this.props.games[2].item}</p>
              <input type="checkbox" name="two" onChange={this.changeHandler} checked={this.state.gameTwoChecked} ></input>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", maxWidth: "900px", margin: "10px auto"  }}>
          {
            this.state.totalChecked !== 0 ?
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>Subtotal: ${this.state.total} ({this.state.totalChecked} item(s))</p>
                <button style={{ borderRadius: "5%", backgroundColor: "rgb(204, 0, 0)", color: "rgb(255, 255, 255)", border: "0px", padding: "10px 5px", margin: "5px 5px"}}>
                  Add {this.state.phrase}to cart
                </button>
              </div>
                :
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>Select item to add</p>
                <button disabled={true} style={{ margin: "15px"}} >
                  Add to cart
                </button>
              </div>
          }
        </div>
      </div>
    );
  }
}

Together.propTypes = {
  games: PropTypes.array.isRequired
}

export default Together;