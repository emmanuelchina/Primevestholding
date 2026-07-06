import "../styles/preloader.css";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="logo-circle">PV</div>

      <h1 className="company-name">PRIMEVESTHOLDINGS</h1>

      <p className="loading-text">
        Preparing your investment experience...
      </p>

      <div className="loader">
        <div className="loader-fill"></div>
      </div>
    </div>
  );
}