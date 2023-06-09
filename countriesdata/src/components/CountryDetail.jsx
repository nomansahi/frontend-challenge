import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function CountryDetail() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <Container>
      <Link to="/" className="btn btn-white shadow m-4">
        &larr; Back
      </Link>

      <section className="p-4 countryDetail">
        {country.map((item) => {
          return (
            <div key={item.population} className="d-flex m-4">
              <Row>
                <Col md="6">
                  <article className="pe-4">
                    <img
                      src={item.flags.svg}
                      alt={item.name.common}
                      style={{ width: "550px" }}
                    />
                  </article>
                </Col>
                <Col md="6">
                  <article className="mt-sm-4">
                    <h1 className="">{item.name.official}</h1>
                    <div className="d-flex ">
                      <ul style={{ listStyle: "none" }}>
                        <li className="">
                          Native Name:
                          <span className="textColor">
                            {item.name.nativeName[0]}
                          </span>
                        </li>
                        <li>
                          Capital:
                          <span className="textColor">{item.capital[0]}</span>
                        </li>
                        <li>
                          Population:
                          <span className="textColor">
                            {item.population.toLocaleString()}
                          </span>
                        </li>
                        <li>
                          Region:{" "}
                          <span className="textColor">{item.region}</span>
                        </li>
                        <li>
                          Subregion:
                          <span className="textColor">{item.subregion}</span>
                        </li>
                      </ul>
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          Top Level Domain:{" "}
                          <span className="textColor">{item.symbol}</span>
                        </li>
                        <li>
                          Curriences:
                          <span className="textColor">{item.curriences}</span>
                        </li>
                        <li>
                          Languages:{" "}
                          <span className="textColor">
                            {Object.values(item.languages)}
                          </span>
                        </li>
                      </ul>
                    </div>

                    {item.borders && (
                      <div className="d-flex">
                        <h3 className="">Borders Countries:</h3>
                        <ul className="d-flex ">
                          {item.borders.map((border, index) => (
                            <li
                              key={index}
                              className="px-3 m-2 fs-6 bg-white shadow px-4"
                              style={{ listStyle: "none" }}
                            >
                              {border}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                </Col>
              </Row>
            </div>
          );
        })}
      </section>
    </Container>
  );
}

export default CountryDetail;
