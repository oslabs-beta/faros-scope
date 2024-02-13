import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../../routes";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <CSpinner variant="grow" />
    </div>
  );
};

const AppContent = () => {
  return (
    <CContainer className="custom-container px-4 w-100" fluid>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
