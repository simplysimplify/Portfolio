import "./App.css";

function App() {
  return (
    <body>
      <header>
        <div id="head">Severin Engelbert</div>
      </header>
      <div>
        <div className="PopoutButton">
          Portfolio
          <button type="submit"></button>
          <article
            className="PopoutPage"
            id="Portfolio"
            style={{
              minHeight: "fit-content",
              maxHeight: "45%",
              width: "45%",
              overflow: "auto",
            }}
          >
            Calculator
            <img
              src="https://images.contentful.com/mrop88jh71hl/5OCtCpFsFoMM8Q2XeirRUm/b429d2b0c0bcfd656ba09d1897022b97/how-to-make-a-calculator-in-python-coding-screenshot.png"
              alt="Calculator python script."
            />
            LED Light Cycler
            <img
              src="https://www.abc.net.au/news/image/5184546-3x2-940x627.jpg"
              alt="LED Light Cycler"
            />
            Contributor on numerous popular Overwatch Custom Gamemodes
            <img
              src="https://www.idgcdn.com.au/article/images/740x500/dimg/a733ij2vojgf1556085996085.jpg"
              alt="Overwatch Workshop banner"
            />
            <a href="https://caseysmiller.github.io/bootcapBlackjack/">
              BlackJack
            </a>{" "}
            app using Deck of Card API and Dailymotion API
            <img
              src="./Assets/Photos/Capture.PNG"
              alt="BlackJack app using Deck of Card API and Dailymotion API"
            />
          </article>
        </div>
        <div className="PopoutButton">
          Education
          <button type="submit"></button>
          <article
            className="PopoutPage"
            id="Education"
            style={{
              minHeight: "fit-content",
              maxHeight: "45%",
              width: "45%",
              overflow: "auto",
            }}
          >
            <img
              src="https://2u.com/static/6b3164e1952e9743e4ddfe440c4d3cba/44b4e/25878428288_001ee7b37e_k.max-2880x1800.jpg"
              alt="Denver University Campus"
            />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            dignissimos eligendi optio doloribus corporis ab similique quisquam
            placeat! Deleniti soluta, vitae expedita officia placeat numquam
            cupiditate consequatur explicabo natus. Hic dolor atque error
            distinctio nihil minus sunt debitis, quos accusantium minima
            provident voluptatum harum nesciunt! Labore, animi veniam corrupti
            in perspiciatis asperiores illum nobis? Voluptates aut, cupiditate
            accusantium non ea fugiat at animi tempore modi, vitae architecto,
            et sed. Voluptas aspernatur delectus nihil consectetur illum soluta
            reprehenderit expedita veniam? Debitis quasi sit quo quod unde
            temporibus libero numquam nesciunt! Fugit assumenda, accusamus
            perferendis laboriosam neque ab dolorum quo illo provident?
          </article>
        </div>
        <div className="PopoutButton">
          Accomplishments
          <button type="submit"></button>
          <article
            className="PopoutPage"
            id="Accomplishments"
            style={{
              minHeight: "fit-content",
              maxHeight: "45%",
              width: "45%",
              overflow: "auto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            dignissimos eligendi optio doloribus corporis ab similique quisquam
            placeat! Deleniti soluta, vitae expedita officia placeat numquam
            cupiditate consequatur explicabo natus. Hic dolor atque error
            distinctio nihil minus sunt debitis, quos accusantium minima
            provident voluptatum harum nesciunt! Labore, animi veniam corrupti
            in perspiciatis asperiores illum nobis? Voluptates aut, cupiditate
            accusantium non ea fugiat at animi tempore modi, vitae architecto,
            et sed. Voluptas aspernatur delectus nihil consectetur illum soluta
            reprehenderit expedita veniam? Debitis quasi sit quo quod unde
            temporibus libero numquam nesciunt! Fugit assumenda, accusamus
            perferendis laboriosam neque ab dolorum quo illo provident?
          </article>
        </div>
        <div className="PopoutButton">
          Contact Information
          <button type="submit"></button>
          <article
            className="PopoutPage"
            id="ContactInfo"
            style={{
              minHeight: "fit-content",
              maxHeight: "45%",
              width: "45%",
              overflow: "auto",
            }}
          >
            <ul>
              <li>Github</li>
              <li>###-###-####</li>
              <li>
                <a href="https://github.com/simplysimplify">GitHub</a>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <div className="pageBreak"> l </div>
    </body>
  );
}

export default App;
