import React from "react";

const DarkMode = ({ theme, onChange = () => {} }) => {
    return (
        <label htmlFor="theme" className="theme">
            <span className="theme__toggle-wrap">
                <input
                    id="theme"
                    className="theme__toggle"
                    type="checkbox"
                    role="switch"
                    name="theme"
                    checked={theme}
                    onChange={onChange}
                />

                <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                </span>
            </span>
        </label>
    );
};

export default DarkMode;
