import React from "react";

const BarLoading = () => {
    return (
        <div className="flex items-start justify-center h-screen">
            <div className="loading-wave">
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
            </div>
        </div>
    );
};

export default BarLoading;
