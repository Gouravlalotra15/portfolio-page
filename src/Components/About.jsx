import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-items grid md:grid-cols-2 items-center gap-16 bg-slate-300">
        <img src={aboutSvg} className="w-full h-64"></img>
        <article>
          <SectionTitle text="code and coffee"></SectionTitle>
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus veritatis quisquam porro, molestiae optio eligendi
            dolore mollitia inventore autem beatae.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
