import React from "react";
import { Link } from "react-router-dom";
import { IconPulse } from "../icons";
import ThemeToggle from "./ThemeToggle";

function PublicNavbar() {
  return (
    <div className="navbar" style={{
      background: "var(--primary)", padding: "14px 24px", display: "flex",
      justifyContent: "space-between", alignItems: "center"
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <IconPulse width="26" height="26" />
        <span style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px" }}>
          Smart Healthcare
        </span>
      </Link>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <ThemeToggle onDarkNavbar />
        <Link to="/login" style={{ color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: 500, padding: "8px 14px" }}>Login</Link>
        <Link to="/register" style={{ color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: 500, padding: "8px 14px", background: "rgba(255,255,255,0.14)", borderRadius: "999px" }}>Register</Link>
      </div>
    </div>
  );
}

export default PublicNavbar;
