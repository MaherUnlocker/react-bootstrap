import React, { Component } from "react";

export class ListeFamille extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [
        {
          albumId: 1,
          id: 1,
          title: "Famille 1",
          url:
            "https://www.softwebaveraa.com/CESARWEB_WEB/repimage/e39cfb8e2cff45fc8188a2c2f4831ad2/2/web/Famille53.jpg",
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
          albumId: 1,
          id: 2,
          title: "Sandwich",
          url:
            "https://www.softwebaveraa.com/CESARWEB_WEB/repimage/e39cfb8e2cff45fc8188a2c2f4831ad2/2/web/Famille53.jpg",
          thumbnailUrl: "https://via.placeholder.com/150/771796",
        },
        {
          albumId: 1,
          id: 3,
          title: "officia porro iure quia iusto qui ipsa ut modi",
          url:
            "https://www.softwebaveraa.com/CESARWEB_WEB/repimage/e39cfb8e2cff45fc8188a2c2f4831ad2/2/web/Famille77.jpg",
          thumbnailUrl: "https://via.placeholder.com/150/24f355",
        },
      ],
    };
  }

  render() {
    return;
    <div>
      {this.state.user.map((user) => (
        <div class="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={user.url} alt=""></img>
              <div className="card-body">
                <h4 className="card-title">{user.title} </h4>
                <p className="card-text">{user.thumbnailUrl} </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>;
  }
}

export default ListeFamille;
