body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #0f172a;
  color: #e5e7eb;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #38bdf8;
}

.navbar nav a {
  margin-left: 25px;
  text-decoration: none;
  color: #e5e7eb;
  font-weight: 500;
  position: relative;
}

.navbar nav a::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background: #38bdf8;
  transition: 0.3s;
}

.navbar nav a:hover::after {
  width: 100%;
}

section {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease;
  margin: 80px auto;
  width: 85%;
}

section.show {
  opacity: 1;
  transform: translateY(0);
}

.project-card {
  background: #020617;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 25px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(56,189,248,0.15);
}

