import { Link, Outlet } from "react-router-dom";

export default function InterviewSetup() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "2px solid black",
          marginTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Interview Setup
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link to="/practice">Practice</Link>
          <Link to="/interview">Interview</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
