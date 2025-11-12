
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App bg-light min-vh-100">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={require('./logo.svg').default} alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Bootstrap Heading */}
        <h1 className="display-4 mb-4 text-primary">Witamy w Octofit Tracker!</h1>

        {/* Bootstrap Card */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Twoje dane</h5>
            <p className="card-text">Zarządzaj swoimi aktywnościami, zespołami i śledź postępy!</p>
            {/* Bootstrap Button */}
            <button className="btn btn-success" onClick={() => setShowModal(true)}>Pokaż szczegóły</button>
          </div>
        </div>

        {/* Bootstrap Table */}
        <div className="table-responsive mb-4">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Nazwa zespołu</th>
                <th>Punkty</th>
                <th>Akcja</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fit Masters</td>
                <td>1200</td>
                <td><a href="#" className="btn btn-primary btn-sm">Szczegóły</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Power Team</td>
                <td>950</td>
                <td><a href="#" className="btn btn-primary btn-sm">Szczegóły</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bootstrap Form */}
        <form className="mb-4">
          <h2 className="h4 mb-3">Dodaj aktywność</h2>
          <div className="mb-3">
            <label htmlFor="activityType" className="form-label">Typ aktywności</label>
            <input type="text" className="form-control" id="activityType" placeholder="np. Bieganie" />
          </div>
          <div className="mb-3">
            <label htmlFor="duration" className="form-label">Czas trwania (minuty)</label>
            <input type="number" className="form-control" id="duration" placeholder="np. 30" />
          </div>
          <button type="submit" className="btn btn-primary">Dodaj</button>
        </form>

        {/* Bootstrap Link */}
        <a href="https://reactjs.org" className="btn btn-link">Dowiedz się więcej o React</a>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Szczegóły użytkownika</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Tu pojawią się szczegóły użytkownika i zespołu.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Zamknij</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
