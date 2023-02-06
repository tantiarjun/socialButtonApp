const Button = (props) => {
  const { className, name } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="bgImage">
    <div className="card">
      <h1 className="heading">Social Buttons</h1>
      <Button className="likeBtn" name="Like" />
      <Button className="commentBtn" name="Comment" />
      <Button className="shareBtn" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
