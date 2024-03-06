import "./Feature.scss";

const Feature = ({ image, alt, title, children}) => {

    return (
      <div className="feature-item">
        <img src={image} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{children}</p>
      </div>
    );
};

export default Feature;