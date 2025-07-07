import React from "react";
import { useState } from "react";
import { HiH3 } from "react-icons/hi2";

const Test = () => {
  const [events, setEvents] = useState([
    { title: "akhror's birthday party", id: 1 },
    { title: "doniyor's live stream", id: 2 },
    { title: "match: manchester united vs barcelona", id: 3 },
  ]);
  const [showContent, setShowContent] = useState(true);
  const heandClick = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };
  return (
    <div>
      <div className="flex justify-center gap-5">
        {showContent && (
          <button
            className="border-[4px]"
            onClick={() => setShowContent(false)}
          >
            Hide Content
          </button>
        )}
        {!showContent && (
          <button className="border-[4px]" onClick={() => setShowContent(true)}>
            Show Content
          </button>
        )}
      </div>
      <div>
        {showContent && (
          <div>
            {events.length === 0 && (
              <>
                <h1>List Delete all</h1>
              </>
            )}
            {events.map((event) => (
              <div key={event.id}>
                <button onClick={() => heandClick(event.id)}>
                  {event.title.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
