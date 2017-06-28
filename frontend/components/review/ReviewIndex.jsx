import React from 'react';
import ReviewIndexItem from './ReviewIndexItem';
import ReviewFormContainer from './form/ReviewFormContainer';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.currentRoom);
  }

  render() {
    const { reviews, currentUser } = this.props;
    const reviewItems = reviews.map( review => <ReviewIndexItem key={review.id} review={review} />);
    const userReviewed = reviews.find((review) => review.user_id === currentUser.id);
// debugger

    // if (!reviews)return null;

    return (
      <section className="review-index">
        <h3>Reviews</h3>
        <ul>
          { reviewItems.length === 0 ? <p>There are no reviews for this room.</p> : reviewItems }
        </ul>

        <h3>{ userReviewed ? 'Edit your Review' : 'Leave a Review' }</h3>
        <ReviewFormContainer currentRoom={this.props.currentRoom} editedForm={ Boolean(userReviewed) ? userReviewed : false } />
      </section>
    );
  }
}

export default ReviewIndex;
