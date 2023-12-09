import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import parse from "html-react-parser";
import Link from "next/link";

class Social extends Component {
  render() {
    let publicUrl = process.env.NEXT_PUBLIC_URL + "/";

    return (
      <div className="ltn__social-media">
        <ul>
          <li>
            <Link href="https://www.facebook.com/tuna-theme" title="Facebook">
              <i className="fab fa-facebook-f" />
            </Link>
          </li>
          <li>
            <Link href="https://www.twitter.com/tuna-theme" title="Twitter">
              <i className="fab fa-twitter" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/tuna-theme" title="Instagram">
              <i className="fab fa-instagram" />
            </Link>
          </li>
          <li>
            <Link href="https://www.dribble.com/tuna-theme" title="Dribbble">
              <i className="fab fa-dribbble" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
