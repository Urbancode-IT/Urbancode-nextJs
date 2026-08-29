import "./AboutHeading.css";

function AboutHeading({ heading, subheading }) {
  return (
    <div className="about-heading">

      <h1 className="about-heading__title">{heading}</h1>
      <p className="about-heading__subtitle">{subheading}</p>
    </div>
  );
}

export default AboutHeading;