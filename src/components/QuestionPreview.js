import { connect } from "react-redux";
import { Link } from "react-router-dom";

function QuestionPreview(props) {
  const { author, question } = props;

  if (question === null) {
    return <p>This question doesn't exists.</p>;
  }
  return (
    <div className="question-preview">
      <h3>{author.name} asks:</h3>
      <img className="avatar" src={author.avatarURL} alt={author.name} />
      <h4>Would you rather...</h4>
      <p>...{question.optionOne.text}...</p>
      <Link to={`/questions/${question.id}`}>View Poll</Link>
    </div>
  );
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];

  return {
    author: users[question.author],
    question: question ? question : null,
  };
}

export default connect(mapStateToProps)(QuestionPreview);