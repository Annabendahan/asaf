import { Link } from "gatsby"
import React, { Component } from "react"

import Backdrop from "./backdrop"

class Menu extends Component {
  state = {
    show: false,
    show2: false,
  }

  menuAppearsHandler = () => {
    this.setState({ show: true })
    setTimeout(
      function() {
        this.setState({ show2: true })
      }.bind(this),
      200
    )
  }

  iconeAppearsHandler = () => {
    this.setState({ show2: false })
    setTimeout(
      function() {
        this.setState({ show: false })
      }.bind(this),
      200
    )
  }

  render() {
    let menuIcone = (
      <div className="menuSmall" onClick={this.menuAppearsHandler}>
        <div className="menu-svg">
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="1"
              x2="22.0935"
              y2="1"
              stroke="#072656"
              stroke-width="2"
            />
            <line
              y1="8.92944"
              x2="22.0935"
              y2="8.92944"
              stroke="#072656"
              stroke-width="2"
            />
            <line
              y1="17"
              x2="22.0935"
              y2="17"
              stroke="#072656"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    )

    let menu = (
      <div
        className="menu"
        style={{
          right: this.state.show2 ? "-10px" : "-300px",
          display: this.state.show ? "block" : "none",
        }}
      >
        <Link to="/">
          {" "}
          <p>
            {" "}
            ACCUEIL{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>
        <Link to="/alpe-d-huez/">
          {" "}
          <p>
            {" "}
            ALPE D'HUEZ{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>
        <Link to="/belleplagne/">
          {" "}
          <p>
            {" "}
            BELLE PLAGNE{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>

        <Link to="/tarifs-et-inscriptions/">
          {" "}
          <p>
            {" "}
            TARIFS ET INSCRIPTION{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>

        <Link to="/contact/">
          {" "}
          <p>
            {" "}
            CONTACT{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>

        <p className="close" onClick={this.iconeAppearsHandler}>
          <svg
            id="cross"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="23.9244"
              y1="63.3012"
              x2="74.8046"
              y2="10.9543"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="24.023"
              y1="12.903"
              x2="77.4122"
              y2="62.6885"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </p>
      </div>
    )

    return (
      <div>
        <Backdrop show={this.state.show} clicked={this.iconeAppearsHandler} />
        {menuIcone}
        {menu}
      </div>
    )
  }
}

export default Menu
