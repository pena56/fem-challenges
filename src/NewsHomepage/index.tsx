import "./main.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import img1 from "./assets/images/image-retro-pcs.jpg";
import img2 from "./assets/images/image-top-laptops.jpg";
import img3 from "./assets/images/image-gaming-growth.jpg";

const data = [
  {
    id: 0,
    number: "01",
    title: "Reviving Retro PCs",
    subtitle: "What happens when old PCs are given modern upgrades?",
    cover: img1,
  },
  {
    id: 1,
    number: "02",
    title: "Top 10 Laptops of 2022",
    subtitle: " Our best picks for various needs and budgets.",
    cover: img2,
  },
  {
    id: 2,
    number: "03",
    title: "The Growth of Gaming",
    subtitle: "How the pandemic has sparked fresh opportunities.",
    cover: img3,
  },
];

export default function Index() {
  return (
    <main>
      <Navbar />
      <div className="content__wrapper">
        <div className="banner__wrapper">
          <div className="hero__wrapper">
            <Hero />
            <div className="hero-wrapper-container">
              <h1>The Bright Future of Web 3.0?</h1>
              <div className="hero__wrapper-contents">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button type="button">Read more</button>
              </div>
            </div>
          </div>
          <div className="aside__wrapper">
            <h3>New</h3>
            <div>
              <h4>Hydrogen VS Electric Cars</h4>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div>
              <h4> The Downsides of AI Artistry</h4>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div>
              <h4>Is VC Funding Drying Up?</h4>
              <p>
                {" "}
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>

        <div className="list__wrapper">
          {data.map((item) => (
            <div className="list__item" key={item.id}>
              <img src={item.cover} alt="" />
              <div className="list__content">
                <h5>{item.number}</h5>
                <h6>{item.title}</h6>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
