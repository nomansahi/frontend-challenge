import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
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
      <Link to="/" className="btn btn-primary m-4">
        &larr; Back
      </Link>
      <section className="p-4">
        {country.map((item) => (
          <div key={item.population} className="d-flex m-4">
            <article className="pe-4">
              <img
                src={item.flags.svg}
                alt={item.name.common}
                style={{ width: "400px" }}
              />
            </article>

            <article className="ms-4">
              <h1 className="">{item.name.official}</h1>

              <ul className="">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
              </ul>

              {item.borders && (
                <div className="">
                  <h3 className="">Borders:</h3>
                  <ul className="d-flex ">
                    {item.borders.map((border, index) => (
                      <li
                        key={index}
                        className="px-3 m-2 fw-bold bg-white shadow"
                        style={{ listStyle: "none" }}
                      >
                        {border}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default CountryDetail;
