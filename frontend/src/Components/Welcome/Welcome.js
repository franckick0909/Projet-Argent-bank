import "./Welcome.scss";

const Welcome = () => {
    return (
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
    );
};

export default Welcome;