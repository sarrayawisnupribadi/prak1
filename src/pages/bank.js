import React from "react";

export default class Bank extends React.Component {
  constructor() {
    super();
    this.state = {
      nominal: 0,
      bunga: 10,
      periode: "",
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
    let nominal = this.state.nominal;
    let bunga = this.state.bunga / 100;
    let periode = this.state.periode;

    let bulan;

    if (periode === "6") {
      bulan = 6;
    } else if (periode === "12") {
      bulan = 12;
    } else if (periode === "18") {
      bulan = 18;
    } else if (periode === "24") {
      bulan = 24;
    }

    let cicilan1 = nominal / bulan;
    let cicilan2 = (nominal * bunga) / bulan;

    let cicilan = cicilan1 + cicilan2;

    this.setState({
      hasil: "Rp. " + cicilan + ",00",
    });
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header">
            <h2 className="text-center">Cicilan Bank</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Nominal</p>
                </div>
                <div className="col-8">
                  <input className="form-control" name="nominal" type="number" value={this.state.nominal} onChange={this.handleChange} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Bunga</p>
                </div>
                <div className="col-8">
                  <input className="form-control" name="bunga" type="number" value={this.state.bunga} readOnly />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-4">
                  <p>Periode</p>
                </div>
                <div className="col-8">
                  <select className="form-select" name="periode" aria-label="Default select example" onChange={this.handleChange} required>
                    <option></option>
                    <option value="6">6 Bulan</option>
                    <option value="12">12 Bulan</option>
                    <option value="18">18 Bulan</option>
                    <option value="24">24 Bulan</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-100 btn btn-primary mt-4 mb-3 text-white">
                Hitung
              </button>
            </form>
          </div>
          <div className="card-footer">
            <button className="w-100 alert alert-primary" name="result">
              {this.state.hasil}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
