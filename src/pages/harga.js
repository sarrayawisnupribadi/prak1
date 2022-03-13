import React from "react";

export default class Harga extends React.Component {
  constructor() {
    super();
    this.state = {
      hargaAwal: 0,
      ppn: 0,
      diskon: 0,
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
    let hargaAwal = this.state.hargaAwal;
    let ppn = this.state.ppn / 100;
    let diskon = this.state.diskon / 100;

    let jumlah1 = hargaAwal * ppn;
    let jumlah2 = hargaAwal * diskon;

    let jumlah3 = jumlah2 - jumlah1;
    let jumlah = hargaAwal - jumlah3;

    this.setState({
      hasil: "Rp. " + jumlah + ",00",
    });
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-header bg-danger text-white">
            <h2 className="text-center">Hitung Harga Akhir</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <div>
                  <p>Harga awal</p>
                  <input className="form-control" name="hargaAwal" type="number" value={this.state.hargaAwal} onChange={this.handleChange} />
                </div>
                <br></br>
                <div>
                  <p>PPN</p>
                  <input className="form-control" name="ppn" type="number" value={this.state.ppn} onChange={this.handleChange} />
                </div>
                <br></br>
                <div>
                  <p>Diskon</p>
                  <input className="form-control" name="diskon" type="number" value={this.state.diskon} onChange={this.handleChange} />
                </div>
                
              <button type="submit" className="w-100 btn btn-danger mt-4 mb-3 text-white">
                Hitung
              </button>
            </form>
          </div>
          <div className="card-footer">
            <h2 className="text-center mb-3">Harga Akhir</h2>
            <button className="w-100 alert alert " name="result">
              {this.state.hasil}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
