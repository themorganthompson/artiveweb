import React, { Component } from "react";
import PostCard from "./PostCard";

class Post extends Component {
  render() {
    return (
      <div className="cardContainer" style={{ marginBottom: "40px" }}>
        <PostCard
          postLoading={this.props.postLoading}
          post={this.props}
          openCritique={(post) => this.props.openCritique(post)}
          isAuthenticated={this.props.isAuthenticated}
          showZoomModal={(image) => this.props.showZoomModal(image)}
          showEditModal={(post) => this.props.showEditModal(post)}
          {...this.props}
        />
      </div>
    );
  }
}

export default Post;
