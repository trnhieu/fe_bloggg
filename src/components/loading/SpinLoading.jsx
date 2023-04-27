import React from "react";

const SpinLoading = ({ size = "25px", border = "5px" }) => {
    return (
        <div
            size={size}
            border={border}
            style={{
                width: size,
                height: size,
                border: `${border} solid white`,
                borderBottom: `${border} solid white`,
                borderTop: `${border} solid white`,
                borderLeft: `${border} solid white`,
                borderRight: `${border} solid transparent`,
                borderRadius: "100rem",
                margin: "0 auto",
                animation: "spin 1s linear infinite",
            }}
        ></div>
    );
};

export default SpinLoading;
