import React from "react";

export default class Hexadecimal extends React.Component {
  constructor() {
    super();
    this.state = {
      hexadesimal: "",
      konversi: "",
      hasil: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let hexadesimal = this.state.hexadesimal;
    let konversi = this.state.konversi;

    let dcml = parseInt(hexadesimal, 16);
    let jumlah;

    if (konversi === "biner") {
      jumlah = dcml.toString(2);
    } else if (konversi === "oktal") {
      jumlah = dcml.toString(8);
    } else if (konversi === "desimal") {
      jumlah = dcml;
    }

    this.setState({
      hasil: jumlah,
    });
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h2 className="text-center">Hexadecimal Number Conversion</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Hexadecimal</p>
                </div>
                <div className="col-8">
                  <input className="form-control" name="hexadesimal" value={this.state.hexadesimal} onChange={this.handleChange} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Conversion Options</p>
                </div>
                <div className="col-8">
                  <select className="form-select" name="konversi" aria-label="Default select example" onChange={this.handleChange} required>
                    <option></option>
                    <option value="biner">Binary</option>
                    <option value="oktal">Octal</option>
                    <option value="desimal">Decimal</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-100 btn btn-warning mt-4 mb-3 text-white">
                Conversion
              </button>
            </form>
          </div>
          <div className="card-footer">
            <h2 className="text-center mb-3 text-warning">Result</h2>
            <button className="w-100 alert alert-warning text-warning" name="result">
              {this.state.hasil}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
