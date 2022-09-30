import React, { useMemo, useState } from "react";
import { LogCotext } from "../store/log-context";
import styles from "../styles.module.css";
import { formatDate } from "../utils/date";

const Log = () => {
  const { state } = React.useContext(LogCotext);
  const [showLogMenu, setShowLogMenu] = useState(false);
  const toggleLogMenu = () => setShowLogMenu(!showLogMenu);
  const [activeTab, setActiveTab] = useState("INFO");

  const logs = useMemo(() => {
    return state.filter((log) => log.type === activeTab);
  }, [state, activeTab]);

  return (
    <div className={styles.log_rect_provider}>
      {showLogMenu && (
        <div className={`${styles.log_menu}`}>
          <div className={styles.tab_wrapper}>
            <button
              className={`${styles.tab} ${
                activeTab === "INFO" ? styles.tab_active : ""
              }`}
              onClick={() => setActiveTab("INFO")}
            >
              Info
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "WARN" ? styles.tab_active : ""
              }`}
              onClick={() => setActiveTab("WARN")}
            >
              Warning
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "ERROR" ? styles.tab_active : ""
              }`}
              onClick={() => setActiveTab("ERROR")}
            >
              Error
            </button>
          </div>
          {logs.map((log) => (
            <div key={log.timestamp.getMilliseconds()} className={styles.log}>
              <p>
                {formatDate(log.timestamp)} - {log.name}
              </p>
              <pre>{JSON.stringify(log.data, null, 4)}</pre>
            </div>
          ))}
        </div>
      )}
      <button
        className={`${styles.logger_btn} ${
          showLogMenu ? styles.fullwidth_btn : ""
        }`}
        onClick={toggleLogMenu}
      >
        {showLogMenu ? "Log Rect" : "LR"}
      </button>
    </div>
  );
};

export default Log;
