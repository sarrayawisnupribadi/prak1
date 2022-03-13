import React from "react";

export default class Tubuh extends React.Component {
  constructor() {
    super();
    this.state = {
      berat: 0.0,
      tinggi: 0.0,
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
    let berat = this.state.berat;
    let tinggi = this.state.tinggi / 100;

    let bmi = berat / (tinggi * tinggi);

    let status;

    if (bmi <= 18.5) {
      status = "Kurus";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      status = "Gemuk";
    } else if (bmi >= 30.0) {
      status = "Obesitas";
    }

    this.setState({
      hasil: status,
    });
  };
  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header bg-gray text-black">
            <h2 className="text-center">Body Mass Index</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Berat badan :</p>
                </div>
                <div className="col-8">
                  <input className="form-control" name="berat" type="number" value={this.state.berat} onChange={this.handleChange} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Tinggi badan :</p>
                </div>
                <div className="col-8">
                  <input className="form-control" name="tinggi" type="number" value={this.state.tinggi} onChange={this.handleChange} />
                </div>
              </div>
              <button type="submit" className="w-100 btn btn-primary mt-4 mb-3 text-white">
                Hitung
              </button>
            </form>
          </div>
          <div className="card-footer">
            <h2 className="text-center mb-3">Hasil</h2>
            <button className="w-100 alert alert-success" name="result">
              {this.state.hasil}
            </button>
          </div>
        </div>
      </div>
    );
  }
}